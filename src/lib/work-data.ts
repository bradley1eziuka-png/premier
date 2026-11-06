// Real Premier Landscape & Design landscaping photos (optimized WebP copies of
// the client's originals in ../Images). Captions describe only what is visible
// in each photo. Source photos are 414×414, so they are displayed at small and
// medium sizes only. No locations or project details are claimed.
import { IMAGES } from "./site-images";

export interface WorkItem {
  src: string;
  alt: string;
  label: string;
}

export const WORK: WorkItem[] = [
  {
    src: IMAGES.workGrasses,
    alt: "Fresh mulch bed with ornamental grasses and small path lights curving along a brick home and sidewalk",
    label: "Mulch bed & ornamental grasses",
  },
  {
    src: IMAGES.workHydrangea,
    alt: "Mulch bed with arborvitae, hydrangeas and ornamental plantings along a red brick wall",
    label: "Hydrangeas & arborvitae",
  },
  {
    src: IMAGES.workMaple,
    alt: "Dark mulch bed with stepping stones, a boulder and a Japanese maple beside a brick home",
    label: "Maple, boulder & fresh mulch",
  },
  {
    src: IMAGES.workBoulder,
    alt: "Backyard landscape with a natural boulder wall, dark mulch and a lawn edge beside a patio",
    label: "Boulder wall & backyard beds",
  },
  {
    src: IMAGES.workBrickWalkway,
    alt: "Clean black mulch bed with shrubs and path lights beside a concrete walkway and brick home",
    label: "Walkway bed with path lighting",
  },
  {
    src: IMAGES.workHosta,
    alt: "Rich brown mulch ring around a hosta and shrub on a freshly kept lawn",
    label: "Fresh mulch & lawn",
  },
];
