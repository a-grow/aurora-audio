import { withBasePath } from "../lib/paths";

export type Product = {
  name: string;
  slug: string;
  price: string;
  description: string;
  shortDescription: string;
  highlights: string[];
  images: string[];
  tier: "Standard" | "Pro" | "Studio";
};

export const products: Product[] = [
  {
    name: "Aurora Nebula",
    slug: "aurora-nebula",
    price: "$699",
    description:
      "Open-back studio reference with crystalline soundstage and effortless detail.",
    shortDescription: "Open-back studio reference with crystalline soundstage.",
    highlights: [
      "50mm graphene drivers",
      "Open-back airflow chamber",
      "Studio reference tuning",
      "Alcantara memory foam",
    ],
    images: [
      withBasePath("/HeadsetN.png"),
      withBasePath("/products/aurora-2.svg"),
      withBasePath("/products/aurora-3.svg"),
    ],
    tier: "Studio",
  },
  {
    name: "Aurora Borealis",
    slug: "aurora-borealis",
    price: "$499",
    description:
      "Flagship wireless with adaptive spatial clarity and low-latency control.",
    shortDescription: "Flagship wireless with adaptive spatial clarity.",
    highlights: [
      "Adaptive spatial audio",
      "38-hour battery",
      "Ultra-low latency",
      "Precision machined aluminum",
    ],
    images: [
      withBasePath("/headsetB.png"),
      withBasePath("/products/aurora-3.svg"),
      withBasePath("/products/aurora-1.svg"),
    ],
    tier: "Pro",
  },
  {
    name: "Aurora Pulse",
    slug: "aurora-pulse",
    price: "$349",
    description:
      "Portable performance tuned for deep, velvety bass and mobility.",
    shortDescription: "Portable performance tuned for deep, velvety bass.",
    highlights: [
      "Hybrid ANC",
      "Foldable silhouette",
      "Balanced low-end",
      "USB-C lossless mode",
    ],
    images: [
      withBasePath("/HeadsetP.png"),
      withBasePath("/products/aurora-1.svg"),
      withBasePath("/products/aurora-2.svg"),
    ],
    tier: "Standard",
  },
  {
    name: "Aurora Zenith",
    slug: "aurora-zenith",
    price: "$799",
    description:
      "Studio monitoring headset with ultra-low latency and razor sharp imaging.",
    shortDescription: "Studio monitoring with ultra-low latency imaging.",
    highlights: [
      "Studio monitoring",
      "Reference-grade DAC",
      "Ultra-low latency",
      "Magnesium alloy frame",
    ],
    images: [
      withBasePath("/products/aurora-1.svg"),
      withBasePath("/products/aurora-2.svg"),
      withBasePath("/products/aurora-3.svg"),
    ],
    tier: "Studio",
  },
  {
    name: "Aurora Halo",
    slug: "aurora-halo",
    price: "$599",
    description:
      "Luxury comfort for long-form listening sessions with plush isolation.",
    shortDescription: "Luxury comfort for long-form listening sessions.",
    highlights: [
      "Luxury comfort",
      "Dual-density cushions",
      "Warm neutral tuning",
      "AuraGlow finish",
    ],
    images: [
      withBasePath("/products/aurora-2.svg"),
      withBasePath("/products/aurora-3.svg"),
      withBasePath("/products/aurora-1.svg"),
    ],
    tier: "Pro",
  },
  {
    name: "Aurora Drift",
    slug: "aurora-drift",
    price: "$399",
    description:
      "Travel-ready ANC designed for immersive commutes and jet-lagged nights.",
    shortDescription: "Travel-ready ANC for immersive commutes.",
    highlights: [
      "Adaptive ANC",
      "30-hour travel mode",
      "Compact fold",
      "Quick charge 10 min",
    ],
    images: [
      withBasePath("/products/aurora-3.svg"),
      withBasePath("/products/aurora-1.svg"),
      withBasePath("/products/aurora-2.svg"),
    ],
    tier: "Standard",
  },
];
