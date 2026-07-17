export type Service = {
  slug: string;
  name: string;
  short: string;
  headline: string;
  intro: string;
  body: string[];
  benefits: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const AREAS = [
  "Trowbridge",
  "Bradford-on-Avon",
  "Westbury",
  "Melksham",
  "Frome",
  "Warminster",
  "Chippenham",
  "Devizes",
  "Bath",
];

export const SERVICES: Service[] = [
  {
    slug: "block-paving",
    name: "Block Paving",
    short: "Driveways and paths laid block by block, built on a proper sub-base.",
    headline: "Block paving driveways in Trowbridge & Wiltshire",
    intro:
      "A block-paved driveway is only as good as what sits underneath it. We excavate to the right depth, lay a compacted MOT Type 1 sub-base, and screed a true bed before a single block goes down — so your driveway stays flat, drains properly, and lasts for decades.",
    body: [
      "We work with concrete and clay pavers from trusted UK manufacturers, in a full range of colours, textures and laying patterns — herringbone, basketweave, stretcher bond and contrasting borders. Every edge is haunched in concrete so the surface can't creep or spread under vehicle weight.",
      "Drainage is designed in from the start. Where a new driveway meets the highway or drains toward the house, we install ACO channels and soakaways to keep you compliant with SUDS rules and free of standing water.",
    ],
    benefits: [
      { title: "Built to carry vehicles", text: "150mm+ compacted sub-base and concrete-haunched edges as standard on every driveway." },
      { title: "Repairable surface", text: "Individual blocks can be lifted and relaid — a stain or utility dig never means replacing the whole drive." },
      { title: "Design choice", text: "Dozens of colours and patterns, with borders and aprons to match your property." },
    ],
    faqs: [
      { q: "How long does a block paving driveway take?", a: "A typical two-car driveway takes 5–8 working days depending on excavation, drainage and access. We confirm a schedule in your written quote." },
      { q: "Do I need planning permission?", a: "Usually not. Permeable block paving, or paving drained to a soakaway within your boundary, falls under permitted development for most homes. We advise on this at the survey." },
      { q: "How do I maintain it?", a: "An occasional sweep and re-sand of the joints, plus a pressure wash once a year, keeps block paving looking new." },
    ],
  },
  {
    slug: "resin-driveways",
    name: "Resin Driveways",
    short: "Smooth, permeable resin-bound surfacing in a wide range of aggregate blends.",
    headline: "Resin-bound driveways in Trowbridge & Wiltshire",
    intro:
      "Resin-bound surfacing gives you a smooth, seamless finish that stays weed-free and lets rainwater drain straight through. We install it over a properly prepared base, mixed and trowelled on site by hand for a consistent, pit-free surface.",
    body: [
      "We use UV-stable resins so the colour won't yellow in sunlight, and offer a broad palette of natural aggregate blends — from warm golds and buffs to cool greys — with contrasting edging if you want definition.",
      "Because resin-bound surfacing is porous, it's SUDS-compliant when laid over an open-textured base: no planning permission needed for most driveways, and no puddles after heavy Wiltshire rain.",
    ],
    benefits: [
      { title: "Permeable & SUDS-compliant", text: "Water drains through the surface, so there's no run-off problem and usually no planning paperwork." },
      { title: "Seamless finish", text: "No joints for weeds to grow through; the surface is trowelled as one continuous piece." },
      { title: "UV-stable resin", text: "We specify aliphatic, UV-stable resin so the finish keeps its colour year after year." },
    ],
    faqs: [
      { q: "Can resin be laid over my existing driveway?", a: "Sometimes. Sound concrete or tarmac can act as the base after cleaning and priming. If the existing surface is cracked or failing, we'll recommend a new base — we'll tell you straight at the survey." },
      { q: "How soon can I use the driveway?", a: "You can usually walk on it after 8 hours and drive on it after 24–48 hours, weather depending." },
      { q: "Is resin slippery?", a: "No — we add a fine anti-slip aggregate scatter to the surface as standard." },
    ],
  },
  {
    slug: "tarmac",
    name: "Tarmac Driveways",
    short: "Hard-wearing tarmacadam driveways, roads and hardstandings.",
    headline: "Tarmac driveways in Trowbridge & Wiltshire",
    intro:
      "Tarmac is the workhorse of driveway surfacing: fast to lay, extremely durable, and the most cost-effective way to cover larger areas. We machine-lay binder and surface courses to the correct depths and compact them properly, so the finish stays smooth and doesn't rut.",
    body: [
      "We install both red and black tarmacadam, with block-paved borders and aprons available if you want to lift the look. Edges are contained with kerbs, edging blocks or timber depending on the site.",
      "As well as domestic driveways we handle larger hardstandings, farm access tracks and car park areas across Wiltshire and Somerset.",
    ],
    benefits: [
      { title: "Best value for large areas", text: "Tarmac covers big driveways and hardstandings at a lower cost per square metre than most alternatives." },
      { title: "Fast installation", text: "Most domestic tarmac driveways are excavated, based and surfaced within 3–5 days." },
      { title: "Proven durability", text: "Laid at the right depth over a compacted base, tarmac handles daily vehicle traffic for 15–20 years or more." },
    ],
    faqs: [
      { q: "Red or black tarmac?", a: "Black is the classic and slightly cheaper; red gives a warmer look and pairs well with block borders. We bring photos of both to the survey." },
      { q: "Will it soften in summer?", a: "Modern surface courses are designed for UK summers. Very hot spells can temporarily soften any tarmac, but correct depth and compaction prevent marking in normal use." },
    ],
  },
  {
    slug: "patios",
    name: "Patios",
    short: "Indian sandstone, porcelain and slab patios, laid level and true.",
    headline: "Patio installation in Trowbridge & Wiltshire",
    intro:
      "A good patio is the foundation of a garden you actually use. We build patios in porcelain, Indian sandstone, limestone and concrete slabs — laid on a full mortar bed over a compacted base, with falls set so water runs away from your house, never toward it.",
    body: [
      "Porcelain has become our most-requested patio material: it doesn't stain, doesn't fade, and shrugs off moss and algae. Natural stone gives a softer, classic look. We'll talk you through the trade-offs honestly and price both if you're undecided.",
      "We handle the whole job: excavation, drainage, steps, brick edging and retaining details, and jointing with brush-in or sleek epoxy compounds.",
    ],
    benefits: [
      { title: "Full mortar bed", text: "Every slab is bedded solid — no dabs, no rocking corners, no slabs coming loose in two winters." },
      { title: "Correct falls", text: "Patios are laid with a designed fall and drainage so rainwater never sits against your walls." },
      { title: "Materials for every budget", text: "From value concrete slabs to premium porcelain, with samples you can see before you decide." },
    ],
    faqs: [
      { q: "Porcelain or natural stone?", a: "Porcelain is harder-wearing and almost maintenance-free; sandstone is cheaper and looks more traditional. We install both and will quote either way." },
      { q: "Can you build steps and raised areas?", a: "Yes — steps, retaining walls, raised beds and split-level patios are all part of what we do." },
    ],
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    short: "Full garden transformations — levels, lawns, planting areas and more.",
    headline: "Garden landscaping in Trowbridge & Wiltshire",
    intro:
      "From tired plot to finished garden: we re-level ground, build retaining walls, lay lawns, create planting beds and tie it all together with paths, patios and fencing. One team, one plan, one point of contact from first sketch to final sweep-up.",
    body: [
      "Most of our landscaping projects combine several trades — groundworks, brickwork, paving, turfing, fencing and decking. Because we do all of it in-house, you're not juggling three contractors or waiting on someone else's schedule.",
      "We're happy working from your ideas, a designer's plan, or a blank slate. Tell us how you want to use the garden and we'll propose a layout and a fixed written price.",
    ],
    benefits: [
      { title: "One team for everything", text: "Groundworks to planting handled in-house — no gaps between trades, no finger-pointing." },
      { title: "Fixed written quotes", text: "A clear scope and price before we start, so the budget doesn't drift." },
      { title: "Built to last", text: "Proper foundations under every wall, path and patio — the same standard we build driveways to." },
    ],
    faqs: [
      { q: "Do you do garden design?", a: "We're builders first, but we produce layout proposals for most projects and work happily from professional designs too." },
      { q: "Can you work in stages?", a: "Yes — many clients phase a big garden over two or three visits to spread the cost. We'll plan the stages so nothing gets built twice." },
    ],
  },
  {
    slug: "fencing",
    name: "Fencing",
    short: "Closeboard, panel and decorative fencing with concrete or timber posts.",
    headline: "Fencing installation in Trowbridge & Wiltshire",
    intro:
      "Straight lines, solid posts, gates that close properly. We install closeboard, lap panel, slatted and decorative fencing, with concrete or timber posts set deep in postcrete — built to face down a Wiltshire winter gale.",
    body: [
      "Closeboard (featheredge) is our recommendation where strength and privacy matter most; panel fencing suits tighter budgets; contemporary slatted screens work beautifully around patios and seating areas.",
      "We also build and hang matching gates, replace individual storm-damaged sections, and install trellis toppers and gravel boards to keep timber off wet ground.",
    ],
    benefits: [
      { title: "Posts set properly", text: "Concreted to the correct depth for the fence height — the difference between a fence and firewood after a storm." },
      { title: "Gravel boards as standard", text: "Timber kept off wet ground so panels don't rot from the bottom up." },
      { title: "Gates that fit", text: "Made and hung to suit the opening, with quality hinges and latches." },
    ],
    faqs: [
      { q: "Concrete or timber posts?", a: "Concrete posts last longest and panels slot in for easy future replacement. Timber looks softer and suits closeboard runs. We'll price your preference." },
      { q: "Whose fence is it anyway?", a: "Deeds usually show boundary ownership with a 'T' mark. If it's unclear, we recommend agreeing with your neighbour before work starts — we're happy to advise." },
    ],
  },
  {
    slug: "decking",
    name: "Decking",
    short: "Timber and composite decking, from ground-level platforms to raised terraces.",
    headline: "Decking installation in Trowbridge & Wiltshire",
    intro:
      "We build decking that doesn't bounce, rot or turn into a slide in winter: properly spaced joists on solid foundations, with composite or pressure-treated timber boards fixed down correctly.",
    body: [
      "Composite decking has transformed what a deck can be — no annual staining, no splinters, and far better slip resistance. We install leading composite systems alongside traditional treated softwood and hardwood decks.",
      "Raised decks, balustrades, steps, lighting and integrated seating are all within scope. Every frame is built from treated structural timber with proper airflow underneath.",
    ],
    benefits: [
      { title: "Composite or timber", text: "We install both and will give you an honest cost-versus-maintenance comparison." },
      { title: "Structural frames", text: "Joists sized and spaced to structural spans — a deck that feels solid underfoot for decades." },
      { title: "Details included", text: "Steps, balustrades, skirting and lighting designed in, not bolted on afterwards." },
    ],
    faqs: [
      { q: "How much more is composite than timber?", a: "Typically 40–80% more on materials, but with almost zero maintenance. Over ten years the costs often even out." },
      { q: "Do decks need planning permission?", a: "Only if raised more than 30cm or covering over half the garden, in most cases. We'll flag it at the survey if your design needs approval." },
    ],
  },
  {
    slug: "artificial-grass",
    name: "Artificial Grass",
    short: "Realistic artificial lawns on a proper free-draining base.",
    headline: "Artificial grass installation in Trowbridge & Wiltshire",
    intro:
      "A lawn that's green in February and mud-free all year. We install premium artificial grass over an excavated, free-draining aggregate base with a compacted grano layer — the preparation that separates a lawn that lasts 15 years from one that wrinkles in two.",
    body: [
      "We offer a range of pile heights and blends so the grass suits your garden and budget, including softer piles for families and pet-friendly systems with extra drainage.",
      "Edges are fixed to treated timber or steel edging, joints are seamed invisibly, and the finished lawn is dressed and brushed so the pile stands naturally.",
    ],
    benefits: [
      { title: "Proper sub-base", text: "Excavation, membrane, aggregate and grano — the groundwork that keeps the lawn flat and draining." },
      { title: "Pet & family friendly", text: "Free-draining systems that rinse clean, with soft piles safe for children." },
      { title: "Zero mowing", text: "No mud, no mowing, no brown patches — just an occasional brush." },
    ],
    faqs: [
      { q: "Does artificial grass drain?", a: "Yes — the backing is perforated and our aggregate base carries water away, so it drains faster than most real lawns." },
      { q: "How long does it last?", a: "Quality grass on a proper base looks good for 12–15 years or more. Cheap grass on poor preparation fails in 2–3, which is why we don't cut corners on the base." },
    ],
  },
  {
    slug: "brickwork",
    name: "Brickwork & Blockwork",
    short: "Garden walls, retaining walls, piers and general masonry.",
    headline: "Brickwork & blockwork in Trowbridge & Wiltshire",
    intro:
      "Garden walls, retaining walls, gate piers, steps and repairs — built off proper concrete footings with neat, consistent pointing. Our bricklayers match existing brickwork closely on extensions to walls and repairs, so new work doesn't shout.",
    body: [
      "Retaining walls get particular care: correct footing sizes, engineering blocks or reinforced cores where loads demand it, and drainage behind the wall so water pressure never builds up.",
      "We also build the masonry that supports our other work — patio steps, raised planters, barbecue areas and the piers and dwarf walls that frame fences and railings.",
    ],
    benefits: [
      { title: "Proper footings", text: "Every wall starts with a concrete footing sized for its height and load — never laid straight on soil." },
      { title: "Drainage behind retaining walls", text: "Weep holes and gravel backfill as standard, so walls don't crack under water pressure." },
      { title: "Brick matching", text: "We source bricks to match existing work for repairs and extensions to walls." },
    ],
    faqs: [
      { q: "How high can a garden wall be?", a: "Up to 2 metres (1 metre next to a highway) without planning permission in most cases. Retaining walls holding significant ground may need building control input — we'll advise." },
    ],
  },
  {
    slug: "dropped-kerbs",
    name: "Dropped Kerbs",
    short: "Council-compliant dropped kerb installation for new driveways.",
    headline: "Dropped kerb installation in Trowbridge & Wiltshire",
    intro:
      "If your new driveway meets the road, you'll need a dropped kerb (vehicle crossover) installed to your local highway authority's specification. We build crossovers to Wiltshire Council requirements and can guide you through the application.",
    body: [
      "A compliant crossover involves more than lowering a few kerb stones: the footway has to be excavated and rebuilt to a heavier-duty specification so it can carry vehicles, with kerbs re-laid at the correct transition heights.",
      "We often combine dropped kerb work with a new block paving, resin or tarmac driveway, handling the whole project — application guidance, crossover and driveway — as one job.",
    ],
    benefits: [
      { title: "Built to council spec", text: "Footway construction depths and kerb transitions that pass highway authority inspection." },
      { title: "Application guidance", text: "We'll point you through Wiltshire Council's vehicle crossing application so nothing stalls the job." },
      { title: "One contractor, whole job", text: "Crossover and driveway built together, matched and finished as one." },
    ],
    faqs: [
      { q: "Do I need permission for a dropped kerb?", a: "Yes — a vehicle crossing application to your highway authority (Wiltshire Council for most of our area). We'll help you with the details it needs." },
      { q: "Can I just drive over the kerb?", a: "No — it damages the footway and services beneath it, and the council can require you to stop or pay for repairs. A proper crossover protects you." },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export const BUSINESS = {
  name: "R&B Landscapes and Driveways",
  legalName: "R&b landscapes and driveways",
  phone: "01225 267063",
  phoneHref: "+441225267063",
  email: "Rblandscapesanddriveways@hotmail.com",
  address: { locality: "Trowbridge", region: "Wiltshire", postcode: "BA14 0BX", country: "GB" },
  tagline: "When we build, we build to last.",
};
