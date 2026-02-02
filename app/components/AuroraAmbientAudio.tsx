"use client";

import { useEffect, useRef, useState } from "react";

/**
 * AuroraAmbientAudio
 * - Original aurora-inspired ambient pad with gentle breathing motion
 * - Subtle low kick/pulse every 2–4 seconds
 * - Floating control widget fixed to the bottom-right
 */
export default function AuroraAmbientAudio() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const beatTimeoutRef = useRef<number | null>(null);
  const chordIntervalRef = useRef<number | null>(null);

  // Start unmuted at a soft volume so the sound is immediately gentle
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.2);

  /**
   * Create and wire the Web Audio graph only once.
   */
  const initAudio = () => {
    if (audioCtxRef.current) return;

    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    audioCtxRef.current = ctx;

    // Master gain controls the final output level.
    const master = ctx.createGain();
    master.gain.value = isMuted ? 0 : volume;
    master.connect(ctx.destination);
    masterGainRef.current = master;

    // Aurora pad: soft oscillators into a lush low-pass filter.
    const padFilter = ctx.createBiquadFilter();
    padFilter.type = "lowpass";
    padFilter.frequency.value = 1400;
    padFilter.Q.value = 0.4;

    // High-pass filter to remove rumbly low-end (prevents earthquake feel).
    const padHighPass = ctx.createBiquadFilter();
    padHighPass.type = "highpass";
    padHighPass.frequency.value = 140;
    padHighPass.Q.value = 0.3;

    const padGain = ctx.createGain();
    padGain.gain.value = 0.35;
    padFilter.connect(padHighPass);
    padHighPass.connect(padGain);
    padGain.connect(master);

    // Slow LFO for gentle filter breathing (aurora shimmer).
    const filterLfo = ctx.createOscillator();
    const filterLfoGain = ctx.createGain();
    filterLfo.frequency.value = 0.03;
    filterLfoGain.gain.value = 320;
    filterLfo.connect(filterLfoGain);
    filterLfoGain.connect(padFilter.frequency);
    filterLfo.start();

    // Soft high shimmer using filtered noise (adds motion beyond a single note).
    const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseData.length; i += 1) {
      noiseData[i] = (Math.random() * 2 - 1) * 0.3;
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.value = 1800;
    noiseFilter.Q.value = 0.8;

    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.06;

    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(master);
    noiseSource.start();

    const noiseLfo = ctx.createOscillator();
    const noiseLfoGain = ctx.createGain();
    noiseLfo.frequency.value = 0.035;
    noiseLfoGain.gain.value = 600;
    noiseLfo.connect(noiseLfoGain);
    noiseLfoGain.connect(noiseFilter.frequency);
    noiseLfo.start();

    // Very slow amplitude movement so the pad feels alive.
    const ampLfo = ctx.createOscillator();
    const ampLfoGain = ctx.createGain();
    ampLfo.frequency.value = 0.05;
    ampLfoGain.gain.value = 0.08;
    ampLfo.connect(ampLfoGain);
    ampLfoGain.connect(padGain.gain);
    ampLfo.start();

    // Soft chord stack with light detuning for a floating texture.
    const chordIntervals = [0, 7, 12];
    const chordRoots = [247, 220, 196, 262]; // B3, A3, G3, C4
    const padOscillators: OscillatorNode[] = [];

    chordIntervals.forEach((semitones, index) => {
      const osc = ctx.createOscillator();
      osc.type = index === 1 ? "triangle" : "sine";
      osc.detune.value = index === 1 ? 4 : -4;
      osc.connect(padFilter);
      osc.start();
      padOscillators.push(osc);
    });

    // Very slow pitch drift for a more musical, organic shimmer.
    const driftLfo = ctx.createOscillator();
    const driftGain = ctx.createGain();
    driftLfo.frequency.value = 0.015;
    driftGain.gain.value = 3;
    driftLfo.connect(driftGain);
    padOscillators.forEach((osc) => driftGain.connect(osc.detune));
    driftLfo.start();

    // Evolving chord progression so it doesn't feel like a constant hum.
    let chordIndex = 0;
    const applyChord = () => {
      const now = ctx.currentTime;
      const root = chordRoots[chordIndex % chordRoots.length];
      padOscillators.forEach((osc, index) => {
        const target = root * Math.pow(2, chordIntervals[index] / 12);
        osc.frequency.cancelScheduledValues(now);
        osc.frequency.setTargetAtTime(target, now, 0.9);
      });
      chordIndex += 1;
    };

    applyChord();
    chordIntervalRef.current = window.setInterval(applyChord, 11000);

    // Gentle, random micro-pulses to keep the pad breathing.
    const pulseLfo = ctx.createOscillator();
    const pulseGain = ctx.createGain();
    pulseLfo.frequency.value = 0.05;
    pulseGain.gain.value = 0.05;
    pulseLfo.connect(pulseGain);
    pulseGain.connect(padGain.gain);
    pulseLfo.start();

    // Subtle beat: a low kick/pulse every 2–4 seconds.
    const beatGain = ctx.createGain();
    beatGain.gain.value = 0.12;
    beatGain.connect(master);

    const triggerBeat = () => {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(70, now + 0.22);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.18, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(beatGain);

      osc.start(now);
      osc.stop(now + 0.4);

      // Schedule the next beat for a subtle, organic pulse.
      const nextDelay = 2000 + Math.random() * 2000;
      beatTimeoutRef.current = window.setTimeout(triggerBeat, nextDelay);
    };

    triggerBeat();
  };

  /**
   * Apply mute/unmute state with a gentle ramp.
   */
  const applyMuteState = async (muted: boolean) => {
    const ctx = audioCtxRef.current;
    const master = masterGainRef.current;
    if (!ctx || !master) return;

    if (ctx.state === "suspended") {
      await ctx.resume();
    }

    master.gain.setTargetAtTime(muted ? 0 : volume, ctx.currentTime, 0.06);
  };

  /**
   * Auto-start audio on mount, and unlock it on first user interaction
   * if the browser blocks autoplay.
   */
  useEffect(() => {
    initAudio();

    const unlockAudio = async () => {
      const ctx = audioCtxRef.current;
      if (!ctx) return;
      if (ctx.state === "suspended") {
        await ctx.resume();
      }
      await applyMuteState(isMuted);
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };

    window.addEventListener("pointerdown", unlockAudio);
    window.addEventListener("keydown", unlockAudio);

    return () => {
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
  }, [isMuted]);

  /**
   * Cleanup on unmount.
   */
  useEffect(() => {
    return () => {
      if (beatTimeoutRef.current) window.clearTimeout(beatTimeoutRef.current);
      if (chordIntervalRef.current) window.clearInterval(chordIntervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  const handleToggle = async () => {
    initAudio();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    await applyMuteState(nextMuted);
  };

  const handleVolumeChange = async (value: number) => {
    setVolume(value);
    if (!isMuted) {
      await applyMuteState(false);
    }
  };

  return (
    <div className="aurora-audio-widget">
      <button
        onClick={handleToggle}
        className="aurora-audio-button"
        aria-pressed={!isMuted}
        aria-label={isMuted ? "Unmute ambient audio" : "Mute ambient audio"}
      >
        <span className="aurora-audio-icon">{isMuted ? "🔇" : "🔊"}</span>
        <span className="aurora-audio-label">
          {isMuted ? "Muted" : "Sound On"}
        </span>
      </button>

      <label className="aurora-audio-volume">
        <span>Volume</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
        />
      </label>

      {/* CSS-in-JS styles for the floating widget */}
      <style jsx>{`
        .aurora-audio-widget {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 9999;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.85rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(5, 7, 11, 0.7);
          color: #fff;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          backdrop-filter: blur(8px);
        }

        .aurora-audio-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0.8rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: transparent;
          color: inherit;
          cursor: pointer;
          transition: border 0.2s ease, background 0.2s ease;
        }

        .aurora-audio-button:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .aurora-audio-icon {
          font-size: 1rem;
        }

        .aurora-audio-label {
          font-size: 0.65rem;
        }

        .aurora-audio-volume {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
        }

        .aurora-audio-volume input[type="range"] {
          width: 90px;
          accent-color: #9dd7ff;
          cursor: pointer;
        }

        @media (max-width: 640px) {
          .aurora-audio-widget {
            right: 16px;
            bottom: 16px;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.5rem;
          }

          .aurora-audio-volume input[type="range"] {
            width: 72px;
          }
        }
      `}</style>
    </div>
  );
}
