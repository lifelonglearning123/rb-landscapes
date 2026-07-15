// Portfolio projects, grouped by property (before / during / after).
// Images live in /public/portfolio/<slug>/ and were preprocessed
// (letterbox-cropped + resized). See content/portfolio-groups.md for the
// grouping rationale.

export type StageKind = "before" | "during" | "after";

export type Stage = {
  src: string;
  kind: StageKind;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  serviceSlug?: string; // links the tag to a service page
  serviceLabel: string;
  summary: string;
  stages: Stage[]; // ordered earliest → latest
  featured?: boolean;
};

const P = (slug: string) => `/portfolio/${slug}`;

export const PROJECTS: Project[] = [
  {
    slug: "pebbledash-tarmac",
    title: "Off-street tarmac driveway",
    serviceSlug: "tarmac",
    serviceLabel: "Tarmac Driveway",
    summary:
      "A closed-in front garden opened up into off-street parking — excavated to depth, edged in block, and finished in smooth machine-laid tarmac.",
    featured: true,
    stages: [
      { src: `${P("pebbledash-tarmac")}/1-during.jpg`, kind: "during", alt: "Front garden of a 1930s pebbledash semi excavated to bare sub-base, ready for a new driveway" },
      { src: `${P("pebbledash-tarmac")}/2-after.jpg`, kind: "after", alt: "Finished full-width black tarmac driveway with a block-paved border at a pebbledash semi-detached house" },
    ],
  },
  {
    slug: "render-bay-resin",
    title: "Resin-bound driveway",
    serviceSlug: "resin-driveways",
    serviceLabel: "Resin Driveway",
    summary:
      "A worn approach rebuilt as a smooth, permeable resin-bound driveway with a crisp tarmac apron down to the road.",
    featured: true,
    stages: [
      { src: `${P("render-bay-resin")}/1-during.jpg`, kind: "during", alt: "Detached house driveway during construction with a compacted base and safety barriers" },
      { src: `${P("render-bay-resin")}/2-after.jpg`, kind: "after", alt: "Completed grey resin-bound driveway in the sun at a rendered 1930s detached house" },
    ],
  },
  {
    slug: "brown-tile-block-paving",
    title: "Brindle block-paved driveway",
    serviceSlug: "block-paving",
    serviceLabel: "Block Paving",
    summary:
      "Dug out from bare ground, built on a compacted sub-base, and laid in brindle block paving with a charcoal border and matching fence.",
    featured: true,
    stages: [
      { src: `${P("brown-tile-block-paving")}/1-during.jpg`, kind: "during", alt: "Driveway excavated to bare ground with a mini-digger and pile of sand" },
      { src: `${P("brown-tile-block-paving")}/2-during.jpg`, kind: "during", alt: "Compacted sub-base being prepared for a new block-paved driveway" },
      { src: `${P("brown-tile-block-paving")}/3-during.jpg`, kind: "during", alt: "Sharp sand screeded flat ready for block paving to be laid" },
      { src: `${P("brown-tile-block-paving")}/4-after.jpg`, kind: "after", alt: "Finished brindle block-paving driveway with a charcoal border and timber fence" },
    ],
  },
  {
    slug: "brick-extension-tarmac",
    title: "Tarmac driveway & groundworks",
    serviceSlug: "tarmac",
    serviceLabel: "Tarmac Driveway",
    summary:
      "A full strip-out and rebuild for a double-fronted home — old surface broken out, base re-laid, and a fresh tarmac driveway machine-laid across the front.",
    stages: [
      { src: `${P("brick-extension-tarmac")}/1-during.jpg`, kind: "during", alt: "Old driveway being broken out with a mini-excavator at a large brick house" },
      { src: `${P("brick-extension-tarmac")}/2-during.jpg`, kind: "during", alt: "Excavated driveway marked out with cones ready for surfacing" },
      { src: `${P("brick-extension-tarmac")}/3-after.jpg`, kind: "after", alt: "New black tarmac driveway completed across the front of a double-fronted brick house" },
    ],
  },
  {
    slug: "grey-render-resin",
    title: "Light-grey resin driveway",
    serviceSlug: "resin-driveways",
    serviceLabel: "Resin Driveway",
    summary:
      "New sub-base and block edging topped with a seamless light-grey resin-bound surface — permeable, weed-free and low maintenance.",
    stages: [
      { src: `${P("grey-render-resin")}/1-during.jpg`, kind: "during", alt: "Driveway sub-base levelled with new block-paved edging before resin is laid" },
      { src: `${P("grey-render-resin")}/2-after.jpg`, kind: "after", alt: "Finished light-grey resin-bound driveway at a rendered semi-detached house" },
    ],
  },
  {
    slug: "bungalow-54-tarmac",
    title: "Bungalow tarmac driveway",
    serviceSlug: "tarmac",
    serviceLabel: "Tarmac Driveway",
    summary:
      "A sloping bungalow approach re-graded, kerbed and compacted, then surfaced in black tarmac for a clean, durable finish.",
    stages: [
      { src: `${P("bungalow-54-tarmac")}/1-during.jpg`, kind: "during", alt: "Bungalow driveway being compacted with a roller during construction" },
      { src: `${P("bungalow-54-tarmac")}/2-after.jpg`, kind: "after", alt: "Completed black tarmac driveway at a brick bungalow" },
    ],
  },
  {
    slug: "redbrick-frontage",
    title: "Frontage clearance & groundworks",
    serviceSlug: "landscaping",
    serviceLabel: "Landscaping",
    summary:
      "An overgrown frontage with a collapsing wall cleared, dug out and prepared with fresh edging — the groundwork that makes a lasting driveway.",
    stages: [
      { src: `${P("redbrick-frontage")}/1-before.jpg`, kind: "before", alt: "Overgrown front garden with a demolished brick wall before landscaping work" },
      { src: `${P("redbrick-frontage")}/2-during.jpg`, kind: "during", alt: "Cleared frontage dug out and levelled with new edging during groundworks" },
    ],
  },
  {
    slug: "redbrick-resin",
    title: "Buff resin-bound driveway",
    serviceSlug: "resin-driveways",
    serviceLabel: "Resin Driveway",
    summary:
      "A clean buff resin-bound driveway laid kerb-to-threshold with a block-paved border and tarmac apron.",
    stages: [
      { src: `${P("redbrick-resin")}/1-after.jpg`, kind: "after", alt: "Completed buff resin-bound driveway with block border at a red-brick house" },
    ],
  },
  {
    slug: "pebbledash-frontage",
    title: "New driveway & boundary wall",
    serviceSlug: "brickwork",
    serviceLabel: "Brickwork",
    summary:
      "Off-street parking created with a new low brick boundary wall and a resurfaced approach.",
    stages: [
      { src: `${P("pebbledash-frontage")}/1-after.jpg`, kind: "after", alt: "New off-street driveway with a low red-brick boundary wall at a pebbledash house" },
    ],
  },
];

export const FEATURED = PROJECTS.filter((p) => p.featured);

export function projectsForService(serviceSlug: string): Project[] {
  return PROJECTS.filter((p) => p.serviceSlug === serviceSlug);
}

export function firstLast(p: Project): { before: Stage; after: Stage } {
  return { before: p.stages[0], after: p.stages[p.stages.length - 1] };
}

export const STAGE_LABEL: Record<StageKind, string> = {
  before: "Before",
  during: "In progress",
  after: "After",
};

// Totals for trust band
export const PORTFOLIO_STATS = {
  projects: PROJECTS.length,
  photos: PROJECTS.reduce((n, p) => n + p.stages.length, 0),
};
