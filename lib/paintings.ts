export interface Painting {
  slug: string;
  title: string;
  artist: string;
  year?: string;
  /** Original (public domain) painting, ≤1400px on the long side. */
  src: string;
  width: number;
  height: number;
  /** Tiny native pixel grid — render with image-rendering: pixelated, never through next/image. */
  pixel: string;
  pixelWidth: number;
  pixelHeight: number;
}

export const greatWave: Painting = {
  slug: "great-wave",
  title: "The Great Wave off Kanagawa",
  artist: "Katsushika Hokusai",
  src: "/cpa/great-wave.jpg",
  width: 1400,
  height: 962,
  pixel: "/cpa/great-wave-pixel.png",
  pixelWidth: 32,
  pixelHeight: 22,
};

export const collection: Painting[] = [
  {
    slug: "starry-night",
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    src: "/cpa/starry-night.jpg",
    width: 1400,
    height: 1108,
    pixel: "/cpa/starry-night-pixel.png",
    pixelWidth: 30,
    pixelHeight: 24,
  },
  {
    slug: "the-kiss",
    title: "The Kiss",
    artist: "Gustav Klimt",
    year: "1908",
    src: "/cpa/the-kiss.jpg",
    width: 1395,
    height: 1400,
    pixel: "/cpa/the-kiss-pixel.png",
    pixelWidth: 27,
    pixelHeight: 27,
  },
  {
    slug: "birth-of-venus",
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    year: "c. 1485",
    src: "/cpa/birth-of-venus.jpg",
    width: 1400,
    height: 879,
    pixel: "/cpa/birth-of-venus-pixel.png",
    pixelWidth: 34,
    pixelHeight: 21,
  },
  greatWave,
];
