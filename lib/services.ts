export type Service = {
  slug: string;
  name: string;
  short: string;
  h1: string;
  description: string;
  intro: string;
  involvesHeading: string;
  steps: { title: string; text: string }[];
  body: string[];
  benefits: { title: string; text: string }[];
  cost: string[];
  faqs: { q: string; a: string }[];
};

/* Shared quote copy. The business publishes no prices, so every cost
   section explains how a price is reached instead of quoting a figure. */
const FREE_QUOTE =
  "We don't publish a price list because no two jobs are the same. We come out, measure up and look at the ground, then send a fixed written quote — free and with no obligation.";

export const SERVICES: Service[] = [
  {
    slug: "driveway-installation",
    name: "Driveway Installation",
    short: "New and replacement driveways in block paving, resin or tarmac, built from the ground up.",
    h1: "Driveway Installation in Trowbridge",
    description:
      "New and replacement driveways in Trowbridge and across Wiltshire — block paving, resin or tarmac, built on a properly dug and compacted base. Free quotes.",
    intro:
      "Whether you're turning a front garden into parking or ripping out a tired old drive, a new driveway is a groundworks job first and a surfacing job second. We dig out, build the base, sort the drainage and then lay the surface you've chosen — block paving, resin or tarmac.",
    involvesHeading: "What driveway installation involves",
    steps: [
      { title: "Site visit and choosing a surface", text: "We look at the size, the slope, where water will go and how you use the space, then talk through block paving, resin and tarmac side by side." },
      { title: "Breaking out and digging down", text: "Any old surface, walls or turf come out and go away. We excavate to the depth the new surface needs to carry a car." },
      { title: "Base, edging and drainage", text: "A compacted sub-base goes in, edges are set and haunched, and channels or soakaways are added wherever water would otherwise sit or run toward the house or road." },
      { title: "Laying the surface", text: "Your chosen surface is laid and finished, and any dropped kerb needed for access is built at the same time." },
      { title: "Clear-up and handover", text: "We clear the site, take the waste away and walk round the finished drive with you." },
    ],
    body: [
      "Replacement driveways are where the groundwork matters most. A drive that has sunk, cracked or puddled almost always failed below the surface, so laying something new on top of the same base just repeats the problem. We break out and rebuild so the new drive doesn't go the same way.",
      "If you're converting a front garden, think about drainage and access early. A non-permeable surface over five square metres that drains onto the road usually needs planning permission, and parking across a footway needs a dropped kerb. We build both into the plan so nothing stalls the job.",
    ],
    benefits: [
      { title: "Every surface under one roof", text: "Block paving, resin and tarmac all laid by our own team, so the advice is about your drive, not about what we happen to sell." },
      { title: "The old drive taken away", text: "Breaking out, muck-away and skip handling are part of the job — you don't need to arrange anything." },
      { title: "Kerb to front door", text: "Dropped kerbs, edging, drainage and steps handled as one project." },
    ],
    cost: [
      FREE_QUOTE,
      "For a new or replacement driveway the price mostly comes down to the area, the surface you choose, how much has to be dug out and taken away, whether drainage or a dropped kerb is needed, and how easy it is to get machinery onto the site.",
    ],
    faqs: [
      { q: "How much does driveway installation cost?", a: "It depends on the size of the drive, the surface you choose, how much old material has to come out and whether you need drainage or a dropped kerb. We give you a fixed written price after a free site visit." },
      { q: "How long does driveway installation take?", a: "It depends on the size, the surface and the amount of digging. We'll give you a start date and an expected duration in your written quote, so you know how long you'll be without the drive." },
      { q: "Which driveway surface is best?", a: "Block paving is easy to repair in patches, resin is smooth and permeable, and tarmac is usually the most economical for large areas. We'll recommend the one that suits your space and budget at the site visit." },
    ],
  },
  {
    slug: "block-paving",
    name: "Block Paving",
    short: "Driveways and paths laid block by block, built on a proper sub-base.",
    h1: "Block Paving in Trowbridge",
    description:
      "Block paving driveways, paths and borders in Trowbridge and Wiltshire, laid on a compacted sub-base with concrete-haunched edges. Free, no-obligation quotes.",
    intro:
      "A block-paved driveway is only as good as what sits underneath it. We excavate to the right depth, lay a compacted MOT Type 1 sub-base, and screed a true bed before a single block goes down — so your driveway stays flat, drains properly, and lasts for decades.",
    involvesHeading: "What block paving involves",
    steps: [
      { title: "Survey and design", text: "We measure up, check levels and drainage, and help you choose blocks, colours and a laying pattern." },
      { title: "Excavation", text: "The area is dug out to depth and the spoil taken away." },
      { title: "Sub-base and edging", text: "MOT Type 1 is laid and compacted in layers, and edge courses are bedded and haunched in concrete." },
      { title: "Laying and cutting", text: "Blocks go down on a screeded sand bed, with cuts made cleanly around edges, drains and covers." },
      { title: "Jointing and compacting", text: "Kiln-dried sand is brushed into the joints and the surface is compacted to lock everything together." },
    ],
    body: [
      "We work with concrete and clay pavers from trusted UK manufacturers, in a full range of colours, textures and laying patterns — herringbone, basketweave, stretcher bond and contrasting borders. Every edge is haunched in concrete so the surface can't creep or spread under vehicle weight.",
      "Drainage is designed in from the start. Where a new driveway meets the highway or drains toward the house, we install ACO channels and soakaways to keep you compliant with SUDS rules and free of standing water.",
    ],
    benefits: [
      { title: "Built to carry vehicles", text: "150mm+ compacted sub-base and concrete-haunched edges as standard on every driveway." },
      { title: "Repairable surface", text: "Individual blocks can be lifted and relaid — a stain or utility dig never means replacing the whole drive." },
      { title: "Design choice", text: "Dozens of colours and patterns, with borders and aprons to match your property." },
    ],
    cost: [
      FREE_QUOTE,
      "Block paving prices depend on the area, the block you choose (concrete or clay, standard or premium ranges), the laying pattern — herringbone needs more cutting than stretcher bond — and how much excavation and drainage the site needs.",
    ],
    faqs: [
      { q: "How much does block paving cost?", a: "It depends on the size of the area, the blocks and pattern you choose, and how much digging and drainage is needed. We give you a fixed written price after a free site visit." },
      { q: "How long does block paving take?", a: "A typical two-car driveway takes 5–8 working days depending on excavation, drainage and access. We confirm a schedule in your written quote." },
      { q: "Do I need planning permission?", a: "Usually not. Permeable block paving, or paving drained to a soakaway within your boundary, falls under permitted development for most homes. We advise on this at the survey." },
      { q: "How do I maintain it?", a: "An occasional sweep and re-sand of the joints, plus a pressure wash once a year, keeps block paving looking new." },
    ],
  },
  {
    slug: "resin",
    name: "Resin Driveways",
    short: "Smooth, permeable resin-bound surfacing in a wide range of aggregate blends.",
    h1: "Resin in Trowbridge",
    description:
      "Resin-bound driveways and paths in Trowbridge and Wiltshire — smooth, permeable, hand-trowelled over a properly prepared base. Free quotes and colour samples.",
    intro:
      "Resin-bound surfacing gives you a smooth, seamless finish that stays weed-free and lets rainwater drain straight through. We install it over a properly prepared base, mixed and trowelled on site by hand for a consistent, pit-free surface.",
    involvesHeading: "What a resin driveway involves",
    steps: [
      { title: "Checking the base", text: "We decide whether your existing surface can take resin or whether a new base is needed — the most important call on the job." },
      { title: "Preparing the base", text: "Either the old surface is cleaned, repaired and primed, or a new open-textured base is built." },
      { title: "Edging", text: "Edges are set so the resin has a clean line to finish against." },
      { title: "Mixing and trowelling", text: "Resin and aggregate are mixed in batches on site and hand-trowelled to an even finish." },
      { title: "Curing", text: "The surface is left to cure before you walk or drive on it." },
    ],
    body: [
      "We use UV-stable resins so the colour won't yellow in sunlight, and offer a broad palette of natural aggregate blends — from warm golds and buffs to cool greys — with contrasting edging if you want definition.",
      "Because resin-bound surfacing is porous, it's SUDS-compliant when laid over an open-textured base: no planning permission needed for most driveways, and no puddles after heavy Wiltshire rain.",
    ],
    benefits: [
      { title: "Permeable & SUDS-compliant", text: "Water drains through the surface, so there's no run-off problem and usually no planning paperwork." },
      { title: "Seamless finish", text: "No joints for weeds to grow through; the surface is trowelled as one continuous piece." },
      { title: "UV-stable resin", text: "We specify aliphatic, UV-stable resin so the finish keeps its colour year after year." },
    ],
    cost: [
      FREE_QUOTE,
      "With resin, the biggest factor is the base. If your existing concrete or tarmac is sound enough to overlay, the job is far simpler than when a new base has to be dug and built. The area, aggregate blend and edging details make up the rest.",
    ],
    faqs: [
      { q: "How much does a resin driveway cost?", a: "Mainly it depends on whether your existing surface can be overlaid or needs a new base, plus the area and the aggregate you choose. We give you a fixed written price after a free site visit." },
      { q: "How long does a resin driveway take?", a: "Overlaying a sound base is much quicker than building a new one. Your written quote sets out how long your job will take, and you can usually drive on the finished surface after 24–48 hours, weather depending." },
      { q: "Can resin be laid over my existing driveway?", a: "Sometimes. Sound concrete or tarmac can act as the base after cleaning and priming. If the existing surface is cracked or failing, we'll recommend a new base — we'll tell you straight at the survey." },
      { q: "Is resin slippery?", a: "No — we add a fine anti-slip aggregate scatter to the surface as standard." },
    ],
  },
  {
    slug: "tarmac",
    name: "Tarmac Driveways",
    short: "Hard-wearing tarmacadam driveways, roads and hardstandings.",
    h1: "Tarmac in Trowbridge",
    description:
      "Tarmac driveways, hardstandings and access tracks in Trowbridge and Wiltshire, machine-laid in binder and surface courses. Red or black. Free quotes.",
    intro:
      "Tarmac is the workhorse of driveway surfacing: fast to lay, extremely durable, and the most cost-effective way to cover larger areas. We machine-lay binder and surface courses to the correct depths and compact them properly, so the finish stays smooth and doesn't rut.",
    involvesHeading: "What a tarmac job involves",
    steps: [
      { title: "Excavation", text: "The old surface is broken out and the area dug to depth." },
      { title: "Sub-base", text: "A compacted stone sub-base is laid and levelled to the falls the drive needs." },
      { title: "Edging", text: "Kerbs, edging blocks or timber are set to contain the tarmac." },
      { title: "Binder course", text: "The lower, structural layer of tarmac is laid and rolled." },
      { title: "Surface course", text: "The finer top layer goes on and is rolled to a smooth, sealed finish." },
    ],
    body: [
      "We install both red and black tarmacadam, with block-paved borders and aprons available if you want to lift the look. Edges are contained with kerbs, edging blocks or timber depending on the site.",
      "As well as domestic driveways we handle larger hardstandings, farm access tracks and car park areas across Wiltshire and Somerset.",
    ],
    benefits: [
      { title: "Best value for large areas", text: "Tarmac covers big driveways and hardstandings at a lower cost per square metre than most alternatives." },
      { title: "Fast installation", text: "Most domestic tarmac driveways are excavated, based and surfaced within 3–5 days." },
      { title: "Proven durability", text: "Laid at the right depth over a compacted base, tarmac handles daily vehicle traffic for 15–20 years or more." },
    ],
    cost: [
      FREE_QUOTE,
      "Tarmac is priced on area, the depth of excavation and sub-base, black or red surface course, and edging. Because it's machine-laid, larger areas tend to work out more economical per square metre.",
    ],
    faqs: [
      { q: "How much does tarmac cost?", a: "It depends on the area, how much digging and sub-base is needed, red or black tarmac, and the edging. We give you a fixed written price after a free site visit." },
      { q: "How long does a tarmac driveway take?", a: "Most domestic tarmac driveways are excavated, based and surfaced within 3–5 days. Bigger hardstandings and tracks take longer, and your quote sets out the schedule." },
      { q: "Red or black tarmac?", a: "Black is the classic and slightly cheaper; red gives a warmer look and pairs well with block borders. We bring photos of both to the survey." },
      { q: "Will it soften in summer?", a: "Modern surface courses are designed for UK summers. Very hot spells can temporarily soften any tarmac, but correct depth and compaction prevent marking in normal use." },
    ],
  },
  {
    slug: "driveway-repairs",
    name: "Driveway Repairs",
    short: "Sunken blocks, potholes, cracks and loose edging put right without a full rebuild.",
    h1: "Driveway Repairs in Trowbridge",
    description:
      "Driveway repairs in Trowbridge and Wiltshire — sunken block paving relaid, tarmac potholes patched, cracks filled and loose edging reset. Honest repair-or-replace advice.",
    intro:
      "Not every tired driveway needs replacing. Sunken blocks, a pothole by the gate, cracks across the tarmac or edging that's come loose can usually be put right on their own — and we'll tell you honestly when a repair will last and when it won't.",
    involvesHeading: "What driveway repairs involve",
    steps: [
      { title: "Finding the cause", text: "We look at why the drive has failed — a soft patch of sub-base, a leaking drain, tree roots or water running across it — because fixing the surface alone won't last." },
      { title: "Cutting out the damage", text: "The failed area is lifted or cut back to sound material." },
      { title: "Rebuilding below", text: "The sub-base is dug out, replaced and compacted where it has given way." },
      { title: "Reinstating the surface", text: "Blocks are relaid, tarmac is patched with a sealed edge, or cracks are cleaned out and filled." },
    ],
    body: [
      "Block paving is the easiest surface to repair: sunken or stained blocks can be lifted, the bed made good and the same blocks relaid, so the repair blends in. Tarmac repairs are cut square and sealed at the joints so water can't get under the patch. Cracks in tarmac and concrete are cleaned out and filled so frost can't open them further.",
      "Where the problem is water — a puddle that never drains, or run-off heading for the house — the repair often includes a channel drain or a soakaway. If the damage is widespread and the base has failed across the whole drive, we'll say so, and price a replacement alongside the repair so you can compare.",
    ],
    benefits: [
      { title: "Repair or replace, straight answer", text: "We won't sell you a new drive when a repair will do the job." },
      { title: "Cause fixed, not just the symptom", text: "Sub-base, drainage and edging problems are put right beneath the patch." },
      { title: "Repairs that blend in", text: "Original blocks relaid where possible, and tarmac patches cut neat and square." },
    ],
    cost: [
      FREE_QUOTE,
      "Repair costs depend on how much of the drive is affected, the surface type, and whether the base or drainage underneath needs rebuilding. Small, local repairs are a fraction of the work of a replacement; we price exactly what's needed.",
    ],
    faqs: [
      { q: "How much do driveway repairs cost?", a: "It depends on how big the damaged area is, the surface, and whether the base or drainage underneath has to be rebuilt. We look first and give you a fixed written price — free." },
      { q: "How long do driveway repairs take?", a: "Most repairs are much shorter jobs than a new driveway. We'll tell you how long yours will take when we quote." },
      { q: "Can you fill cracks in my tarmac or concrete drive?", a: "Yes. We clean out the cracks and fill them so water and frost can't widen them. If the cracking is a sign the base has failed, we'll explain that and what it would take to fix properly." },
      { q: "Should I repair or replace my driveway?", a: "If the damage is local and the base is mostly sound, a repair is usually the sensible choice. If the drive has sunk or broken up across most of its area, replacement is better value in the long run. We'll price both if it's borderline." },
    ],
  },
  {
    slug: "driveway-sealing",
    name: "Driveway Sealing",
    short: "Block paving and driveways cleaned, re-sanded and sealed to keep weeds and stains out.",
    h1: "Driveway Sealing in Trowbridge",
    description:
      "Driveway and block paving sealing in Trowbridge and Wiltshire — deep cleaned, joints re-sanded and sealed to lock out weeds, oil and moss. Free quotes.",
    intro:
      "A good seal keeps a driveway looking new for longer. We deep-clean the surface, put back the jointing sand that washing and weather have taken out, and apply a sealer that locks the joints, resists oil and stains, and slows down weeds and moss.",
    involvesHeading: "What driveway sealing involves",
    steps: [
      { title: "Weed and moss treatment", text: "Growth is treated and cleared from the joints and surface." },
      { title: "Deep clean", text: "The whole surface is pressure-cleaned to lift dirt, algae and as much staining as possible." },
      { title: "Re-sanding", text: "On block paving, kiln-dried sand is brushed back into the joints once the surface is dry." },
      { title: "Sealing", text: "The sealer is applied evenly across the drive and left to cure." },
    ],
    body: [
      "Sealing suits block paving best, where the joints are the weak point: once the sand washes out, blocks loosen and weeds move in. A joint-stabilising sealer binds the sand in place. We also seal other paved surfaces where it will genuinely help.",
      "Sealing needs dry weather, so we book it for a settled spell. If cleaning shows sunken or broken areas, we'll point them out — it's worth relaying those before the drive is sealed rather than sealing them in.",
    ],
    benefits: [
      { title: "Joints locked in", text: "Stabilised sand stops blocks shifting and makes it harder for weeds to root." },
      { title: "Easier to keep clean", text: "Oil, leaf stains and algae sit on the surface instead of soaking in." },
      { title: "Done in the right weather", text: "Booked for dry days so the seal cures properly." },
    ],
    cost: [
      FREE_QUOTE,
      "Sealing is priced on the area, the surface, how much cleaning and weed treatment it needs first, and whether any blocks need relaying before the seal goes on.",
    ],
    faqs: [
      { q: "How much does driveway sealing cost?", a: "It depends on the size of the drive, its condition and how much cleaning and re-sanding it needs first. We'll look and give you a fixed written price — free." },
      { q: "How long does driveway sealing take?", a: "Cleaning, re-sanding and sealing is a much shorter job than any new-build work, but it does need dry weather either side. We'll tell you how long yours will take, and how soon you can use the drive, when we quote." },
      { q: "Does block paving need sealing?", a: "It doesn't have to be sealed, but sealing keeps the jointing sand in place, cuts down weeds and makes stains easier to clean. It's most worthwhile on drives that get a lot of use or sit under trees." },
      { q: "Do resin driveways need sealing?", a: "No. A properly laid resin-bound surface with UV-stable resin doesn't need sealing — an occasional sweep and wash is enough." },
    ],
  },
  {
    slug: "patio-paving",
    name: "Patio Paving",
    short: "Indian sandstone, porcelain and slab patios, laid level and true.",
    h1: "Patio Paving in Trowbridge",
    description:
      "Patio paving in Trowbridge and Wiltshire — porcelain, Indian sandstone and slab patios laid on a full mortar bed with proper falls and drainage. Free quotes.",
    intro:
      "A good patio is the foundation of a garden you actually use. We build patios in porcelain, Indian sandstone, limestone and concrete slabs — laid on a full mortar bed over a compacted base, with falls set so water runs away from your house, never toward it.",
    involvesHeading: "What patio paving involves",
    steps: [
      { title: "Layout and materials", text: "We mark out the patio, agree levels against the house and help you choose slabs from samples." },
      { title: "Digging out", text: "The area is excavated and the spoil removed." },
      { title: "Base and falls", text: "A compacted sub-base is laid with a designed fall so rainwater runs away from the house." },
      { title: "Laying on a full bed", text: "Every slab is bedded on solid mortar, with steps, edging and drainage built in as we go." },
      { title: "Jointing", text: "Joints are filled with a brush-in or epoxy compound, or pointed, to finish." },
    ],
    body: [
      "Porcelain has become our most-requested patio material: it doesn't stain, doesn't fade, and shrugs off moss and algae. Natural stone gives a softer, classic look. We'll talk you through the trade-offs honestly and price both if you're undecided.",
      "We handle the whole job: excavation, drainage, steps, brick edging and retaining details, and jointing with brush-in or sleek epoxy compounds.",
    ],
    benefits: [
      { title: "Full mortar bed", text: "Every slab is bedded solid — no dabs, no rocking corners, no slabs coming loose in two winters." },
      { title: "Correct falls", text: "Patios are laid with a designed fall and drainage so rainwater never sits against your walls." },
      { title: "Materials for every budget", text: "From value concrete slabs to premium porcelain, with samples you can see before you decide." },
    ],
    cost: [
      FREE_QUOTE,
      "Patio prices depend on the area, the slab (porcelain, sandstone, limestone or concrete), how level the ground is, and extras such as steps, walls, drainage and the jointing finish you choose.",
    ],
    faqs: [
      { q: "How much does patio paving cost?", a: "It depends on the size, the slabs you choose, how much levelling the ground needs and any steps or walls. We give you a fixed written price after a free site visit." },
      { q: "How long does patio paving take?", a: "It depends on the size, the material and how much the ground needs levelling. Your written quote includes a start date and expected duration." },
      { q: "Porcelain or natural stone?", a: "Porcelain is harder-wearing and almost maintenance-free; sandstone is cheaper and looks more traditional. We install both and will quote either way." },
      { q: "Can you build steps and raised areas?", a: "Yes — steps, retaining walls, raised beds and split-level patios are all part of what we do." },
    ],
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    short: "Full garden transformations — levels, lawns, planting areas and more.",
    h1: "Garden Landscaping in Trowbridge",
    description:
      "Garden landscaping in Trowbridge and Wiltshire — levels, walls, patios, paths, lawns, fencing and planting beds, built by one in-house team. Free quotes.",
    intro:
      "From tired plot to finished garden: we re-level ground, build retaining walls, lay lawns, create planting beds and tie it all together with paths, patios and fencing. One team, one plan, one point of contact from first sketch to final sweep-up.",
    involvesHeading: "What a landscaping project involves",
    steps: [
      { title: "Plan and price", text: "We talk through how you want to use the garden and agree a layout and a fixed written price." },
      { title: "Clearance and levels", text: "The site is cleared and the ground re-levelled, with retaining walls where levels change." },
      { title: "Hard landscaping", text: "Patios, paths, steps, walls and edging go in on proper foundations." },
      { title: "Boundaries and structures", text: "Fencing, gates and decking are built." },
      { title: "Finishing", text: "Lawns, artificial grass and planting beds are laid, and the whole garden is cleaned up." },
    ],
    body: [
      "Most of our landscaping projects combine several trades — groundworks, brickwork, paving, turfing, fencing and decking. Because we do all of it in-house, you're not juggling three contractors or waiting on someone else's schedule.",
      "We're happy working from your ideas, a designer's plan, or a blank slate. Tell us how you want to use the garden and we'll propose a layout and a fixed written price.",
    ],
    benefits: [
      { title: "One team for everything", text: "Groundworks to planting handled in-house — no gaps between trades, no finger-pointing." },
      { title: "Fixed written quotes", text: "A clear scope and price before we start, so the budget doesn't drift." },
      { title: "Built to last", text: "Proper foundations under every wall, path and patio — the same standard we build driveways to." },
    ],
    cost: [
      FREE_QUOTE,
      "Landscaping is priced from the layout you agree: how much ground has to move, how many hard features (patios, walls, steps, paths) there are, the materials, and access for machinery and waste.",
    ],
    faqs: [
      { q: "How much does garden landscaping cost?", a: "It depends entirely on what's in the plan — the amount of groundwork, the hard features and the materials. We agree a layout with you and give you a fixed written price, free." },
      { q: "How long does a landscaping project take?", a: "It depends on the size of the garden and what's being built. Your written quote includes the schedule, and big projects can be split into stages." },
      { q: "Do you do garden design?", a: "We're builders first, but we produce layout proposals for most projects and work happily from professional designs too." },
      { q: "Can you work in stages?", a: "Yes — many clients phase a big garden over two or three visits to spread the cost. We'll plan the stages so nothing gets built twice." },
    ],
  },
  {
    slug: "fencing",
    name: "Fencing",
    short: "Closeboard, panel and decorative fencing with concrete or timber posts.",
    h1: "Fencing in Trowbridge",
    description:
      "Fencing in Trowbridge and Wiltshire — closeboard, panel and slatted fences and gates, with posts set deep in concrete and gravel boards as standard. Free quotes.",
    intro:
      "Straight lines, solid posts, gates that close properly. We install closeboard, lap panel, slatted and decorative fencing, with concrete or timber posts set deep in postcrete — built to face down a Wiltshire winter gale.",
    involvesHeading: "What a fencing job involves",
    steps: [
      { title: "Measure and agree the line", text: "We measure the run, check the boundary and agree heights and style." },
      { title: "Taking down the old fence", text: "Old panels and posts are removed and taken away." },
      { title: "Setting posts", text: "Post holes are dug to depth and posts set in concrete, plumb and in line." },
      { title: "Boards, panels and gates", text: "Gravel boards go in first, then panels or boards, then gates are hung." },
    ],
    body: [
      "Closeboard (featheredge) is our recommendation where strength and privacy matter most; panel fencing suits tighter budgets; contemporary slatted screens work beautifully around patios and seating areas.",
      "We also build and hang matching gates, replace individual storm-damaged sections, and install trellis toppers and gravel boards to keep timber off wet ground.",
    ],
    benefits: [
      { title: "Posts set properly", text: "Concreted to the correct depth for the fence height — the difference between a fence and firewood after a storm." },
      { title: "Gravel boards as standard", text: "Timber kept off wet ground so panels don't rot from the bottom up." },
      { title: "Gates that fit", text: "Made and hung to suit the opening, with quality hinges and latches." },
    ],
    cost: [
      FREE_QUOTE,
      "Fencing is priced on the length of the run, the height, the style (closeboard, panel or slatted), concrete or timber posts, any gates, and whether an old fence has to come down first.",
    ],
    faqs: [
      { q: "How much does fencing cost?", a: "It depends on the length and height, the style of fence, the posts and any gates. We measure up and give you a fixed written price — free." },
      { q: "How long does fencing take?", a: "It depends on the length of the run and whether an old fence has to come out first. We'll tell you how long when we quote." },
      { q: "Concrete or timber posts?", a: "Concrete posts last longest and panels slot in for easy future replacement. Timber looks softer and suits closeboard runs. We'll price your preference." },
      { q: "Whose fence is it anyway?", a: "Deeds usually show boundary ownership with a 'T' mark. If it's unclear, we recommend agreeing with your neighbour before work starts — we're happy to advise." },
    ],
  },
  {
    slug: "all-aspects-of-decking",
    name: "Decking",
    short: "Timber and composite decking, from ground-level platforms to raised terraces.",
    h1: "All aspects of decking in Trowbridge",
    description:
      "Decking in Trowbridge and Wiltshire — composite and timber decks, raised terraces, steps, balustrades and repairs, built on properly spaced structural frames.",
    intro:
      "We build decking that doesn't bounce, rot or turn into a slide in winter: properly spaced joists on solid foundations, with composite or pressure-treated timber boards fixed down correctly.",
    involvesHeading: "What a decking job involves",
    steps: [
      { title: "Design and materials", text: "We agree the size, height and shape, and compare composite and timber boards with you." },
      { title: "Ground preparation", text: "The ground is cleared, levelled and covered with a weed membrane." },
      { title: "Foundations and frame", text: "Footings go in and a frame of treated structural timber is built with airflow underneath." },
      { title: "Boards", text: "Boards are fixed down with the correct gaps for drainage and movement." },
      { title: "Details", text: "Steps, balustrades, skirting and lighting are fitted to finish." },
    ],
    body: [
      "Composite decking has transformed what a deck can be — no annual staining, no splinters, and far better slip resistance. We install leading composite systems alongside traditional treated softwood and hardwood decks.",
      "Raised decks, balustrades, steps, lighting and integrated seating are all within scope. Every frame is built from treated structural timber with proper airflow underneath.",
    ],
    benefits: [
      { title: "Composite or timber", text: "We install both and will give you an honest cost-versus-maintenance comparison." },
      { title: "Structural frames", text: "Joists sized and spaced to structural spans — a deck that feels solid underfoot for decades." },
      { title: "Details included", text: "Steps, balustrades, skirting and lighting designed in, not bolted on afterwards." },
    ],
    cost: [
      FREE_QUOTE,
      "Decking is priced on the area, the height (raised decks need more frame and balustrading), composite or timber boards, and extras such as steps, lighting and built-in seating.",
    ],
    faqs: [
      { q: "How much does decking cost?", a: "It depends on the size and height of the deck, the boards you choose and any steps, balustrades or lighting. We give you a fixed written price after a free site visit." },
      { q: "How long does decking take?", a: "It depends on the size, the height and the details. Your written quote includes the schedule." },
      { q: "How much more is composite than timber?", a: "Typically 40–80% more on materials, but with almost zero maintenance. Over ten years the costs often even out." },
      { q: "Do decks need planning permission?", a: "Only if raised more than 30cm or covering over half the garden, in most cases. We'll flag it at the survey if your design needs approval." },
    ],
  },
  {
    slug: "artificial-grass",
    name: "Artificial Grass",
    short: "Realistic artificial lawns on a proper free-draining base.",
    h1: "Artificial Grass in Trowbridge",
    description:
      "Artificial grass in Trowbridge and Wiltshire, laid on an excavated, free-draining base so the lawn stays flat and drains. Pet- and family-friendly options. Free quotes.",
    intro:
      "A lawn that's green in February and mud-free all year. We install premium artificial grass over an excavated, free-draining aggregate base with a compacted grano layer — the preparation that separates a lawn that lasts 15 years from one that wrinkles in two.",
    involvesHeading: "What an artificial lawn involves",
    steps: [
      { title: "Choosing the grass", text: "We bring samples in different pile heights and blends." },
      { title: "Excavation", text: "The old lawn and soil are dug out and taken away." },
      { title: "Edging and base", text: "Edging is fixed, then membrane, aggregate and a compacted grano layer go down." },
      { title: "Laying and seaming", text: "The grass is rolled out, joined invisibly and fixed at the edges." },
      { title: "Dressing", text: "The lawn is dressed and brushed so the pile stands naturally." },
    ],
    body: [
      "We offer a range of pile heights and blends so the grass suits your garden and budget, including softer piles for families and pet-friendly systems with extra drainage.",
      "Edges are fixed to treated timber or steel edging, joints are seamed invisibly, and the finished lawn is dressed and brushed so the pile stands naturally.",
    ],
    benefits: [
      { title: "Proper sub-base", text: "Excavation, membrane, aggregate and grano — the groundwork that keeps the lawn flat and draining." },
      { title: "Pet & family friendly", text: "Free-draining systems that rinse clean, with soft piles safe for children." },
      { title: "Zero mowing", text: "No mud, no mowing, no brown patches — just an occasional brush." },
    ],
    cost: [
      FREE_QUOTE,
      "Artificial grass is priced on the area, the grass you choose, how much needs digging out, the edging, and access for taking the old lawn away.",
    ],
    faqs: [
      { q: "How much does artificial grass cost?", a: "It depends on the area, the grass and how much preparation the ground needs. We give you a fixed written price after a free site visit." },
      { q: "How long does artificial grass installation take?", a: "It depends on the size of the lawn and the access. We'll give you the schedule in your quote." },
      { q: "Does artificial grass drain?", a: "Yes — the backing is perforated and our aggregate base carries water away, so it drains faster than most real lawns." },
      { q: "How long does it last?", a: "Quality grass on a proper base looks good for 12–15 years or more. Cheap grass on poor preparation fails in 2–3, which is why we don't cut corners on the base." },
    ],
  },
  {
    slug: "brickwork-and-blockwork",
    name: "Brickwork & Blockwork",
    short: "Garden walls, retaining walls, piers and general masonry.",
    h1: "Brickwork & blockwork in Trowbridge",
    description:
      "Brickwork and blockwork in Trowbridge and Wiltshire — garden and retaining walls, gate piers, steps and repairs, built on proper concrete footings. Free quotes.",
    intro:
      "Garden walls, retaining walls, gate piers, steps and repairs — built off proper concrete footings with neat, consistent pointing. Our bricklayers match existing brickwork closely on extensions to walls and repairs, so new work doesn't shout.",
    involvesHeading: "What brickwork and blockwork involves",
    steps: [
      { title: "Design and materials", text: "We agree the line, height and finish, and source bricks or blocks to suit — including matching existing work." },
      { title: "Footings", text: "A trench is dug and a concrete footing poured, sized for the wall's height and load." },
      { title: "Building", text: "Blockwork cores or brick courses are laid true and level, with reinforcement where loads demand it." },
      { title: "Drainage and coping", text: "Retaining walls get weep holes and gravel backfill; walls are finished with copings or caps." },
      { title: "Pointing", text: "Joints are pointed neatly and the work cleaned down." },
    ],
    body: [
      "Retaining walls get particular care: correct footing sizes, engineering blocks or reinforced cores where loads demand it, and drainage behind the wall so water pressure never builds up.",
      "Blockwork does the structural jobs — retaining cores, rendered garden walls, bases for raised beds and outbuildings — while facing brick gives the finish. We build the masonry that supports our other work too: patio steps, raised planters, barbecue areas and the piers and dwarf walls that frame fences and railings.",
    ],
    benefits: [
      { title: "Proper footings", text: "Every wall starts with a concrete footing sized for its height and load — never laid straight on soil." },
      { title: "Drainage behind retaining walls", text: "Weep holes and gravel backfill as standard, so walls don't crack under water pressure." },
      { title: "Brick matching", text: "We source bricks to match existing work for repairs and extensions to walls." },
    ],
    cost: [
      FREE_QUOTE,
      "Masonry is priced on the length and height of the wall, the footing it needs, brick or block (and whether bricks must be matched), whether it's retaining ground, and the finish — copings, render or pointing style.",
    ],
    faqs: [
      { q: "How much does brickwork and blockwork cost?", a: "It depends on the size of the wall, the footing, the materials and whether it's holding back ground. We give you a fixed written price after a free site visit." },
      { q: "How long does brickwork and blockwork take?", a: "It depends on the length and height of the wall and whether footings need digging. Your quote includes the schedule." },
      { q: "How high can a garden wall be?", a: "Up to 2 metres (1 metre next to a highway) without planning permission in most cases. Retaining walls holding significant ground may need building control input — we'll advise." },
    ],
  },
  {
    slug: "concrete-work",
    name: "Concrete Work",
    short: "Concrete bases, slabs, footings, paths and hardstandings, laid level and reinforced where needed.",
    h1: "Concrete Work in Trowbridge",
    description:
      "Concrete work in Trowbridge and Wiltshire — bases for sheds, garages and garden rooms, slabs, footings, paths and hardstandings, laid level on a compacted base.",
    intro:
      "Sheds, garages, garden rooms, hot tubs and hardstandings all start with a concrete base, and a base that's out of level or cracks in its first winter causes trouble for whatever sits on it. We dig, form, reinforce and pour concrete so it's flat, square and the right thickness for the load.",
    involvesHeading: "What concrete work involves",
    steps: [
      { title: "Setting out", text: "We mark the base or path out square and agree the finished level." },
      { title: "Digging and sub-base", text: "The area is excavated and a compacted stone sub-base laid." },
      { title: "Formwork and reinforcement", text: "Timber shuttering is set to level, with mesh reinforcement and a membrane where the job calls for it." },
      { title: "Pouring and finishing", text: "Concrete is placed, compacted and finished — tamped, floated or brushed depending on use." },
      { title: "Curing", text: "The concrete is protected while it cures, and formwork comes off once it's hard." },
    ],
    body: [
      "We pour bases for sheds, workshops, garages, garden rooms and hot tubs; footings for walls; paths and side returns; and hardstandings for vehicles, trailers and bins. Each is built to suit what it has to carry — a shed base and a vehicle hardstanding are not the same job.",
      "Concrete also does a lot of quiet work in our other jobs: haunching the edges of block paving, footings under garden walls and the bases of steps. Because it's all done in-house, the concrete and whatever goes on it are planned together.",
    ],
    benefits: [
      { title: "Sized for the load", text: "Thickness, sub-base and reinforcement matched to what the concrete has to carry." },
      { title: "Level and square", text: "Formwork set accurately, so buildings and frames sit true on the base." },
      { title: "Finish to suit", text: "Brushed for grip outdoors, smooth where something will be built on top." },
    ],
    cost: [
      FREE_QUOTE,
      "Concrete work is priced on the area and thickness, how much excavation is needed, reinforcement, access for the concrete (barrowing or a direct pour) and the finish.",
    ],
    faqs: [
      { q: "How much does concrete work cost?", a: "It depends on the size and thickness of the base or slab, the digging involved, reinforcement and access for pouring. We give you a fixed written price — free." },
      { q: "How long does concrete work take?", a: "Preparation and pouring are often quick, but concrete then needs time to cure before it's built on or driven over. We'll tell you both timescales when we quote." },
      { q: "Can you lay a base for my garden room or shed?", a: "Yes. Tell us the size and what's going on it — garden room suppliers often specify the base they need, and we'll build to that." },
    ],
  },
  {
    slug: "site-preparation",
    name: "Site Preparation",
    short: "Clearance, excavation, levelling and muck-away to get a site ready to build on.",
    h1: "Site Preparation in Trowbridge",
    description:
      "Site preparation in Trowbridge and Wiltshire — clearance, excavation, levelling, sub-base and muck-away for driveways, gardens, garden rooms and extensions.",
    intro:
      "Before anything gets built, the ground has to be ready for it. We clear sites, dig out, level, take the waste away and lay compacted sub-bases — for our own driveways and gardens, and as a standalone job for garden rooms, outbuildings and other projects.",
    involvesHeading: "What site preparation involves",
    steps: [
      { title: "Survey", text: "We check access, levels, what's on the site now and what's being built next." },
      { title: "Clearance", text: "Vegetation, old structures, surfaces and rubbish are cleared." },
      { title: "Excavation and levelling", text: "Ground is dug out or built up to the levels the next stage needs." },
      { title: "Muck-away", text: "Spoil and waste are loaded and taken away." },
      { title: "Sub-base", text: "Where needed, a compacted stone sub-base is laid ready for the next trade." },
    ],
    body: [
      "Good preparation saves money later. A level, compacted, well-drained site means the slab, the paving or the building on top goes in faster and stays put. Getting it wrong is expensive, because it's the part that's hardest to fix once something sits on it.",
      "We handle the awkward parts too — tight access, sloping gardens and ground that needs drainage before it can be built on. If your project needs a base, walls or a driveway afterwards, we can do those as well, so there's no gap between trades.",
    ],
    benefits: [
      { title: "Ready for the next trade", text: "Levels and sub-base finished to what the builder, supplier or our own team needs." },
      { title: "Waste taken away", text: "Spoil and old materials removed as part of the job." },
      { title: "Drainage considered early", text: "Wet ground dealt with before anything is built on it." },
    ],
    cost: [
      FREE_QUOTE,
      "Site preparation is priced on the area, the depth of dig, the volume of waste to take away, access for machinery, and whether a sub-base or drainage is needed.",
    ],
    faqs: [
      { q: "How much does site preparation cost?", a: "It depends on the size of the site, how much has to be dug out and taken away, and access. We look first and give you a fixed written price — free." },
      { q: "How long does site preparation take?", a: "It depends on the area, the depth and how much waste has to go. We'll give you the schedule when we quote." },
      { q: "Can you prepare a site for someone else to build on?", a: "Yes. Tell us what's being built and the levels or base the builder or supplier needs, and we'll prepare the site to that." },
    ],
  },
  {
    slug: "drainage-work",
    name: "Drainage Work",
    short: "Channel drains, soakaways and land drains to deal with standing water and run-off.",
    h1: "Drainage Work in Trowbridge",
    description:
      "Drainage work in Trowbridge and Wiltshire — channel drains, soakaways and land drains for driveways, patios and waterlogged gardens. Free site visits and quotes.",
    intro:
      "Standing water on a drive, a patio that floods against the back door, a lawn that stays boggy all winter — they're all drainage problems, and they don't fix themselves. We find where the water is coming from and where it can go, then install channel drains, soakaways or land drains to carry it away.",
    involvesHeading: "What drainage work involves",
    steps: [
      { title: "Working out the water", text: "We look at where water collects, the falls of the ground and where it can be discharged." },
      { title: "Choosing the solution", text: "A channel drain, soakaway, land drain or a combination, depending on the problem." },
      { title: "Excavation", text: "Trenches or soakaway pits are dug and the spoil taken away." },
      { title: "Installation", text: "Pipes, channels, crates or gravel are installed and connected at the right falls." },
      { title: "Reinstatement", text: "The surface — paving, tarmac or lawn — is put back over the new drainage." },
    ],
    body: [
      "On driveways and patios we usually fit channel drains across the slope where water would otherwise run toward a house or onto the road, connected to a soakaway or existing drainage. For gardens, land drains in gravel-filled trenches pull water out of waterlogged ground.",
      "Drainage is also part of every new driveway we build. Planning rules for front gardens mean surface water usually has to be dealt with within your own boundary, which is why soakaways and permeable surfaces come up so often.",
    ],
    benefits: [
      { title: "Cause first", text: "We find out where the water comes from before deciding how to move it." },
      { title: "Surface put back", text: "Paving, tarmac or turf reinstated neatly over the new drains." },
      { title: "Joined up with your project", text: "Designed in from the start on new driveways and patios." },
    ],
    cost: [
      FREE_QUOTE,
      "Drainage is priced on the length of channel or pipe, the size of any soakaway, how deep we need to dig, and what surface has to be lifted and reinstated.",
    ],
    faqs: [
      { q: "How much does drainage work cost?", a: "It depends on the problem, the length of drain, any soakaway needed and the surface that has to be lifted and put back. We'll look and give you a fixed written price — free." },
      { q: "How long does drainage work take?", a: "It depends on the size of the job and what has to be reinstated afterwards. We'll tell you when we quote." },
      { q: "Why does my driveway flood?", a: "Usually because the surface falls the wrong way, the base has sunk in places, or water from the drive has nowhere to go. A channel drain linked to a soakaway is a common fix; sometimes the surface needs relaying to the right falls." },
    ],
  },
  {
    slug: "dropped-kerbs",
    name: "Dropped Kerbs",
    short: "Council-compliant dropped kerb installation for new driveways.",
    h1: "Dropped Kerbs in Trowbridge",
    description:
      "Dropped kerbs in Trowbridge and Wiltshire — vehicle crossovers built to highway authority specification, with help through the council application. Free quotes.",
    intro:
      "If your new driveway meets the road, you'll need a dropped kerb (vehicle crossover) installed to your local highway authority's specification. We build crossovers to Wiltshire Council requirements and can guide you through the application.",
    involvesHeading: "What a dropped kerb involves",
    steps: [
      { title: "Council application", text: "You apply to the highway authority for a vehicle crossing; we help with the details it needs." },
      { title: "Breaking out the footway", text: "Once approved, the existing pavement and kerbs are taken up." },
      { title: "Rebuilding to spec", text: "The footway is rebuilt to a heavier-duty specification so it can take vehicles." },
      { title: "Kerbs and transitions", text: "Dropped kerbs are laid, with transition kerbs either side at the correct heights." },
    ],
    body: [
      "A compliant crossover involves more than lowering a few kerb stones: the footway has to be excavated and rebuilt to a heavier-duty specification so it can carry vehicles, with kerbs re-laid at the correct transition heights.",
      "We often combine dropped kerb work with a new block paving, resin or tarmac driveway, handling the whole project — application guidance, crossover and driveway — as one job.",
    ],
    benefits: [
      { title: "Built to council spec", text: "Footway construction depths and kerb transitions that pass highway authority inspection." },
      { title: "Application guidance", text: "We'll point you through Wiltshire Council's vehicle crossing application so nothing stalls the job." },
      { title: "One contractor, whole job", text: "Crossover and driveway built together, matched and finished as one." },
    ],
    cost: [
      FREE_QUOTE,
      "A dropped kerb is priced on the width of the crossing, the depth of footway to rebuild, and what's under the pavement. The council's own application fee is separate and paid to them.",
    ],
    faqs: [
      { q: "How much does a dropped kerb cost?", a: "It depends on the width of the crossing and how much footway has to be rebuilt. We give you a fixed written price for the work; the council's application fee is separate." },
      { q: "How long does a dropped kerb take?", a: "The council application comes first and takes however long the highway authority needs. Once approved, we'll tell you how long the build will take when we quote." },
      { q: "Do I need permission for a dropped kerb?", a: "Yes — a vehicle crossing application to your highway authority (Wiltshire Council for most of our area). We'll help you with the details it needs." },
      { q: "Can I just drive over the kerb?", a: "No — it damages the footway and services beneath it, and the council can require you to stop or pay for repairs. A proper crossover protects you." },
    ],
  },
  {
    slug: "parking-lot-repair-and-maintenance",
    name: "Car Park Repair & Maintenance",
    short: "Potholes, worn surfaces and failed edging repaired on private and business car parks.",
    h1: "Parking Lot Repair And Maintenance in Trowbridge",
    description:
      "Car park repair and maintenance in Trowbridge and Wiltshire — potholes patched, worn tarmac resurfaced, kerbs and drainage put right. Free site visits and quotes.",
    intro:
      "Car parks take a hammering — turning wheels, heavy vehicles and standing water break up the surface faster than any driveway. We repair potholes, patch and resurface worn areas, reset kerbs and sort the drainage on business and private car parks.",
    involvesHeading: "What car park repair involves",
    steps: [
      { title: "Survey", text: "We walk the car park, mark up the failed areas and look at where water is sitting." },
      { title: "Planning around you", text: "Work is phased so the site can stay open where possible." },
      { title: "Cutting out", text: "Damaged areas are cut back square to sound material." },
      { title: "Base and surface", text: "Failed base is replaced and compacted, then new tarmac is laid and rolled, with joints sealed." },
      { title: "Kerbs and drainage", text: "Loose kerbs are reset and gullies or channels cleared or added where water ponds." },
    ],
    body: [
      "Potholes almost always start as small cracks that let water into the base. Catching them early — patching and sealing before they spread — is far cheaper than resurfacing a whole car park later, so we'll tell you which areas need doing now and which can wait.",
      "Where the surface is worn out across large areas, resurfacing makes more sense than patching. We'll price both so you can decide, and plan the work around your opening hours.",
    ],
    benefits: [
      { title: "Repairs that last", text: "Cut square, rebuilt below and sealed at the joints — not just filled." },
      { title: "Phased to keep you open", text: "Areas done in sections where the site needs to stay in use." },
      { title: "Honest priorities", text: "What needs fixing now and what can wait, so you can budget." },
    ],
    cost: [
      FREE_QUOTE,
      "Car park repairs are priced on the area to be repaired or resurfaced, how much base has failed, kerbing and drainage work, and any phasing needed to keep the site open.",
    ],
    faqs: [
      { q: "How much does car park repair cost?", a: "It depends on how much of the surface has failed, whether the base needs rebuilding, and any kerb or drainage work. We survey the site and give you a fixed written price — free." },
      { q: "How long does car park repair take?", a: "It depends on the area and whether the work has to be phased around the site staying open. We'll agree a schedule with you when we quote." },
      { q: "Can you work while our car park stays open?", a: "Usually, yes. We can split the work into sections so part of the car park stays in use while we repair the rest." },
    ],
  },
  {
    slug: "road-construction",
    name: "Road Construction",
    short: "Private roads, shared drives and access tracks built on a proper foundation.",
    h1: "Road Construction in Trowbridge",
    description:
      "Private road and access track construction in Trowbridge and Wiltshire — shared drives, farm tracks and hardstandings built on a compacted base and surfaced in tarmac.",
    intro:
      "Private roads, shared driveways and access tracks carry more traffic — and heavier vehicles — than a house drive, so they need more under them. We excavate, build a deep compacted base, install kerbs and drainage, and surface in tarmac or a hard-wearing alternative to suit how the road will be used.",
    involvesHeading: "What road construction involves",
    steps: [
      { title: "Survey and specification", text: "We look at the route, the ground, the traffic it will carry and where water will go." },
      { title: "Excavation", text: "The route is dug out to formation level and the spoil taken away." },
      { title: "Base", text: "A deep stone base is laid and compacted in layers." },
      { title: "Kerbs and drainage", text: "Kerbs or edging are set, and drainage put in so water runs off the road, not along it." },
      { title: "Surfacing", text: "Binder and surface courses of tarmac are laid and rolled, or a tracked surface finished for farm use." },
    ],
    body: [
      "We build private roads and shared drives for small developments and groups of houses, farm and estate access tracks, yards and large hardstandings. The specification is set by what will use it: a lane serving a few cars and a farm track taking tractors and lorries need very different foundations.",
      "Drainage is half the job on a road. Water left to run along the surface or soak into the base is what breaks roads up, so cambers, kerbs, channels and soakaways are designed in from the start.",
    ],
    benefits: [
      { title: "Built for the traffic", text: "Base depth and surface chosen for what will actually drive on it." },
      { title: "Drainage designed in", text: "Falls, kerbs and channels that keep water off and out of the road." },
      { title: "One team, start to finish", text: "Excavation, base, kerbs and surfacing all done in-house." },
    ],
    cost: [
      FREE_QUOTE,
      "Roads and tracks are priced on length and width, the depth of base the traffic needs, kerbing, drainage, the surface, and how much material has to be brought in and taken away.",
    ],
    faqs: [
      { q: "How much does road construction cost?", a: "It depends on the length and width, the depth of base needed for the traffic, kerbs and drainage, and the surface. We survey the route and give you a fixed written price — free." },
      { q: "How long does road construction take?", a: "It depends on the length of the road and how much excavation and drainage is involved. We'll give you a schedule with your quote." },
      { q: "Do you build farm and access tracks?", a: "Yes — farm tracks, estate roads, yards and hardstandings, surfaced in tarmac or a hard-wearing tracked finish depending on use." },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const BUSINESS = {
  name: "R & B Landscapes and Driveways",
  legalName: "R&b landscapes and driveways",
  phone: "01225 267063",
  phoneHref: "+441225267063",
  email: "Rblandscapesanddriveways@hotmail.com",
  address: {
    street: "24 Pitman Drive",
    locality: "Trowbridge",
    region: "Wiltshire",
    postcode: "BA14 0BX",
    country: "GB",
  },
  // Google Business Profile listing and review link.
  hasMap: "https://maps.google.com/maps?cid=2777185625217826947",
  reviewLink: "https://search.google.com/local/writereview?placeid=ChIJB_DUlwrABKkRgwBuqpyLiiY",
  // As listed on the Google profile: every day, 00:00–23:45.
  hours: { days: DAYS, opens: "00:00", closes: "23:45" },
  tagline: "When we build, we build to last.",
};
