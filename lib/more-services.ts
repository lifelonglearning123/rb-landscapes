import type { Service } from "./services";

// Specialist services with their own pages. Kept apart from the core SERVICES list so the
// home page grid, footer and quote wizard stay at the ten headline trades.
export const MORE_SERVICES: Service[] = [
  {
    slug: "driveway-installation",
    name: "Driveway Installation",
    short: "New driveways in block paving, resin or tarmac — surveyed, based and built by one team.",
    headline: "Driveway installation in Trowbridge & Wiltshire",
    intro:
      "A new driveway is mostly a groundworks job with a nice surface on top. We survey the site, help you choose between block paving, resin and tarmac, and build the whole thing — dig-out, sub-base, drainage, edging and surface — with our own team.",
    body: [
      "The right surface depends on the house, the slope and how the drive is used. Block paving suits period streets and is repairable block by block. Resin-bound gives a smooth, permeable finish with no joints. Tarmac is the most economical way to cover a long or wide drive. We'll lay out the trade-offs at the survey rather than steer you to whichever is easiest for us.",
      "Whatever goes on top, the build underneath is the same: excavate to formation level, lay a membrane where the ground needs it, compact a Type 1 sub-base in layers, restrain the edges and set the falls so water goes where it should. That's the part you never see again, and the part that decides whether the drive is still flat in ten years.",
    ],
    steps: [
      { title: "Survey and written quote", text: "We measure up, check levels, drainage and access, talk through surfaces, and send a fixed written price." },
      { title: "Dig-out and sub-base", text: "The old surface and soft ground come out. A compacted sub-base goes in, with edging and any drainage channels or soakaways." },
      { title: "Surface", text: "Blocks laid and jointed, resin trowelled, or tarmac machine-laid and rolled — depending on what you've chosen." },
      { title: "Clear up and walk-through", text: "Waste is taken away, the site is swept, and we walk the finished drive with you before we call it done." },
    ],
    pricing:
      "We don't publish a price per square metre, because the surface is only part of the cost. Your quote is built from the area, how deep we need to dig, what the ground is like, how much drainage the site needs, access for machinery and waste, and the surface you choose. The survey is free and the price you get is written down and fixed.",
    benefits: [
      { title: "One team, start to finish", text: "The people who dig it out are the people who lay it — no handover between a groundworker and a surfacer." },
      { title: "Drainage designed in", text: "Falls, channels and soakaways are planned at the survey so the drive meets SUDS rules and doesn't puddle." },
      { title: "Honest surface advice", text: "We install block paving, resin and tarmac, so we've no reason to push one over the others." },
    ],
    faqs: [
      { q: "How much does driveway installation cost?", a: "It depends on the area, the depth of dig, drainage, access and the surface you choose, so we price every drive from a free site survey rather than a rate card. You get a fixed written quote before any work is booked." },
      { q: "How long does driveway installation take?", a: "It varies with size and surface: the dig-out and sub-base are usually the longest part, and resin and tarmac both need dry weather on the day they're laid. We give you a start date and a programme in your written quote." },
      { q: "Do I need planning permission for a new driveway?", a: "Usually not, provided the surface is permeable or the water drains to a soakaway or border within your own boundary. Listed buildings and conservation areas can be different — we'll flag it at the survey." },
    ],
    related: ["block-paving", "resin-driveways", "tarmac", "dropped-kerbs"],
  },
  {
    slug: "driveway-replacement",
    name: "Driveway Replacement",
    short: "Old drive past repairing? We take it out and rebuild it properly from the base up.",
    headline: "Driveway replacement in Trowbridge & Wiltshire",
    intro:
      "When a driveway has sunk, cracked right through or holds water every time it rains, patching it is money down the drain. We break out and remove the old surface, find out why it failed, and rebuild it from the sub-base up so the same problem doesn't come back.",
    body: [
      "Most failed drives failed underneath. Concrete poured too thin, tarmac laid over soil, block paving on a bed of sand with nothing below it — the surface only shows you the symptom. So a replacement starts with seeing what's actually down there, and the quote reflects it: sometimes the existing base is sound and can stay, more often it needs digging out and doing again.",
      "Replacing a drive is also the moment to fix what always annoyed you about the old one. We can widen it for a second car, change the levels so water stops running at the garage, add a drainage channel at the threshold, or swap a tired concrete slab for block paving, resin or tarmac.",
    ],
    steps: [
      { title: "Survey", text: "We look at how and where the old drive has failed, check the base where we can, and price the replacement in writing." },
      { title: "Break-out and removal", text: "The old surface is broken out and taken away. Any soft or unsuitable base underneath goes with it." },
      { title: "Rebuild the base", text: "New compacted sub-base, edge restraints and drainage, set to falls that actually move water off the drive." },
      { title: "New surface", text: "Your chosen finish laid, then the site cleared and walked through with you." },
    ],
    pricing:
      "The cost of a replacement turns on what has to come out. Thick reinforced concrete takes longer to break and costs more to dispose of than old tarmac or loose blocks, and a base that can be reused saves a good part of the dig. We price from a free survey — area, break-out, disposal, new base, drainage and surface — and give you one fixed written figure.",
    benefits: [
      { title: "The cause gets fixed", text: "We don't lay a new surface over whatever sank the old one." },
      { title: "Waste taken away", text: "Break-out, loading and disposal of the old drive are part of the job and part of the quote." },
      { title: "A chance to improve it", text: "Wider, better drained, different surface — it's far cheaper to change now than later." },
    ],
    faqs: [
      { q: "How much does driveway replacement cost?", a: "It depends on the size of the drive, what the old surface is, whether the base underneath can be kept, and what you want laid in its place. We survey for free and give you a fixed written price that includes break-out and disposal." },
      { q: "How long does driveway replacement take?", a: "Longer than a new drive on clear ground, because the old one has to come out first. Break-out and removal are quick on tarmac and slower on thick concrete. Your quote sets out the programme." },
      { q: "Should I repair or replace my driveway?", a: "If the damage is local — a sunken patch, a few loose blocks, some surface cracks — a repair is usually the sensible answer. If the drive is moving or cracking across most of its area, the base has failed and repairs won't hold. We'll tell you which at the survey." },
    ],
    related: ["driveway-repairs", "driveway-installation", "block-paving", "tarmac"],
  },
  {
    slug: "driveway-repairs",
    name: "Driveway Repairs",
    short: "Sunken blocks, potholes, broken edges and failed patches put right.",
    headline: "Driveway repairs in Trowbridge & Wiltshire",
    intro:
      "Not every tired driveway needs replacing. Sunken areas, potholes, loose or broken blocks, crumbling edges and lifted sections can often be put right for a fraction of the cost of a new drive — as long as the repair deals with the cause, not just the hole.",
    body: [
      "On block paving, we lift the affected area, dig out and re-compact the base beneath, re-screed the bedding and relay the blocks — reusing your originals where they're sound so the repair blends in. On tarmac, we cut the damaged area back to a clean square edge, make good the base and lay new material hot, sealed at the joint. On concrete, broken bays are cut out and re-cast.",
      "We'll also be straight about the limits. A repair in new tarmac will be a different shade to the old surface around it, and if a drive is failing all over, patching is a short-term fix. We'd rather tell you that at the survey than take the money for a patch that won't last.",
    ],
    steps: [
      { title: "Look at the damage", text: "We find out why it's failed — a leaking gully, a soft spot, tree roots, a weak edge — and quote the repair in writing." },
      { title: "Open up", text: "Blocks lifted or the damaged surface cut out square, down to something solid." },
      { title: "Fix the base", text: "Soft material out, new sub-base in and compacted. This is what stops it sinking again." },
      { title: "Reinstate", text: "Blocks relaid and re-sanded, or new tarmac or concrete laid and finished level with the surrounding surface." },
    ],
    pricing:
      "Repairs are priced on what's involved rather than by the metre: the size of the area, how deep the problem goes, and the surface being matched. Send us a couple of photos or call and we'll arrange to look at it. The quote is free and written down.",
    benefits: [
      { title: "Cause first", text: "We fix what made the surface fail, so the repair isn't back on your list next winter." },
      { title: "Block paving reused", text: "Sound original blocks go back down, so the colour matches and the patch doesn't stand out." },
      { title: "Straight advice", text: "If a repair won't last, we'll say so and explain what would." },
    ],
    faqs: [
      { q: "How much do driveway repairs cost?", a: "It depends on the size of the damaged area, the surface, and how far down the fault goes. We look at the job and give you a free written quote — there's no fixed call-out price to quote blind." },
      { q: "How long do driveway repairs take?", a: "A local repair is a much shorter job than a new drive, but it depends on how much base has to be rebuilt. We'll tell you how long to allow when we quote." },
      { q: "Can you repair just part of my block paving?", a: "Yes. That's the main advantage of block paving: an area can be lifted, the base corrected and the same blocks relaid without touching the rest of the drive." },
    ],
    related: ["crack-filling-and-sealing", "driveway-replacement", "block-paving", "tarmac"],
  },
  {
    slug: "crack-filling-and-sealing",
    name: "Crack Filling & Sealing",
    short: "Cracks in tarmac and concrete cleaned out, filled and sealed before water gets in.",
    headline: "Crack filling and sealing in Trowbridge & Wiltshire",
    intro:
      "A crack in tarmac or concrete is a way in for water. Left alone, rain gets under the surface, freezes, lifts it and turns a line you could cover with your thumb into a pothole. Filling and sealing cracks early is the cheapest maintenance a hard surface will ever get.",
    body: [
      "The work is in the preparation. Each crack is cleaned out — weeds, moss, grit and loose material removed — so the filler bonds to sound edges instead of sitting on dirt. It's then filled with a flexible sealant suited to the surface, so the repair can move with the drive through hot and cold weather rather than cracking again alongside.",
      "Crack filling is the right job for narrow, stable cracks in a surface that's otherwise sound. Wide cracks, cracks with one side higher than the other, or a pattern of cracking like crazy paving all point to movement underneath, and need a proper repair instead. We'll tell you which you've got.",
    ],
    steps: [
      { title: "Inspect", text: "We check which cracks are surface-only and which are a sign of something moving underneath." },
      { title: "Clean out", text: "Vegetation and loose material are removed from each crack so the sealant has something sound to grip." },
      { title: "Fill and seal", text: "Cracks are filled with a flexible sealant and finished flush with the surface." },
    ],
    pricing:
      "Crack filling is priced on the length and width of the cracks and the surface they're in. It's often done alongside sealing the whole drive or a patch repair, in which case we quote it as one job. The inspection and quote are free.",
    benefits: [
      { title: "Stops water getting in", text: "Sealed cracks keep rain and frost out of the base — which is what actually breaks a drive up." },
      { title: "Buys the surface years", text: "Small money spent early, instead of a large repair later." },
      { title: "Honest diagnosis", text: "If the cracking means the base has failed, we'll say so rather than fill it and leave." },
    ],
    faqs: [
      { q: "How much does crack filling and sealing cost?", a: "It depends on how many metres of crack there are, how wide they are, and whether the surface is tarmac or concrete. We look first and quote in writing, free of charge." },
      { q: "How long does crack filling and sealing take?", a: "It's a short job compared with any resurfacing work, but it needs a dry surface, so the day is chosen around the weather. We'll tell you how long to keep vehicles off afterwards." },
      { q: "Will the repaired cracks be visible?", a: "Yes, a filled crack shows as a darker line. Sealing the whole surface afterwards evens the colour out and makes the repairs far less noticeable." },
    ],
    related: ["driveway-sealing", "driveway-repairs", "tarmac", "concrete-work"],
  },
  {
    slug: "driveway-sealing",
    name: "Driveway Sealing",
    short: "Protective sealing for tarmac, concrete and patterned driveways.",
    headline: "Driveway sealing in Trowbridge & Wiltshire",
    intro:
      "Sealing puts a protective coat over a driveway so water, oil and weather stay on the surface instead of soaking in. On tarmac it restores the deep colour and slows the surface drying out and fretting; on concrete it resists staining and frost damage.",
    body: [
      "A sealer only performs if the surface under it is clean, dry and sound. So the job starts with a thorough clean, treatment of moss and weeds, and repair of any cracks or loose areas. Sealing over dirt or damp traps it there and the coating peels — which is why we don't seal on a wet forecast or rush the drying time.",
      "Different surfaces take different products. Tarmac is restored with a purpose-made tarmac coating; plain and patterned concrete take a penetrating or film-forming sealer depending on the finish you want. Block paving is a job of its own, because the jointing sand has to be dealt with too — see our paver sealing page for that.",
    ],
    steps: [
      { title: "Clean", text: "The drive is cleaned back to the bare surface and any moss, algae and weeds are treated." },
      { title: "Repair", text: "Cracks are filled and loose or damaged patches made good, so we're sealing a sound surface." },
      { title: "Dry", text: "The surface is left to dry fully. This is the step that gets skipped on rushed jobs." },
      { title: "Seal", text: "Sealer applied evenly in the right number of coats for the product and the surface." },
    ],
    pricing:
      "Sealing is priced on the area, the type of surface, and how much cleaning and repair it needs first. A drive in good order is quick to prepare; one that's green with moss and cracked takes longer. We'll look at it and give you a free written quote.",
    benefits: [
      { title: "Protects against water and frost", text: "Less water in the surface means less freeze-thaw damage over the winter." },
      { title: "Easier to keep clean", text: "Oil and dirt sit on a sealed surface rather than soaking in." },
      { title: "Refreshes the look", text: "Faded grey tarmac comes back to a consistent, deep colour." },
    ],
    faqs: [
      { q: "How much does driveway sealing cost?", a: "It depends on the size of the drive, the surface and how much cleaning and repair it needs before sealing. We quote from a free visit so the price covers the preparation as well as the sealer." },
      { q: "How long does driveway sealing take?", a: "The work itself is quick, but the surface has to dry properly between cleaning and sealing, and the sealer needs time to cure before you drive on it. We plan it around a dry spell and tell you when the drive is back in use." },
      { q: "Can a brand-new tarmac driveway be sealed?", a: "Not straight away. New tarmac needs time to cure and harden before any coating goes on. We'll advise on timing for your drive." },
    ],
    related: ["paver-sealing", "crack-filling-and-sealing", "tarmac", "driveway-repairs"],
  },
  {
    slug: "paver-sealing",
    name: "Paver Sealing",
    short: "Block paving cleaned, re-sanded and sealed to lock the joints and hold the colour.",
    headline: "Paver sealing in Trowbridge & Wiltshire",
    intro:
      "Block paving relies on the sand in its joints. Once pressure washing, rain and ants have taken that sand out, the blocks loosen, weeds move in and the drive starts to look older than it is. Paver sealing puts the sand back and locks it in place.",
    body: [
      "We clean the paving, lift out weeds and moss, and let it dry right through. Kiln-dried sand is then brushed into every joint until they're full, and a sealer is applied that soaks into the sand and the face of the block. Once cured, it binds the top of the joint so the sand stays put and weeds struggle to take hold.",
      "The sealer also slows fading and makes the blocks less absorbent, so oil drips and tyre marks clean off more easily. You can choose a finish that's close to invisible or one that deepens the colour — we'll show you the difference before you decide. If any blocks have sunk or broken, we lift and relay those first; sealing over a dip just preserves the dip.",
    ],
    steps: [
      { title: "Clean and weed", text: "Paving cleaned, weeds and moss removed from the joints." },
      { title: "Repair", text: "Any sunken or damaged blocks lifted, the bed corrected and the blocks relaid." },
      { title: "Dry and re-sand", text: "Once fully dry, kiln-dried sand is brushed in until every joint is full." },
      { title: "Seal", text: "Sealer applied to blocks and joints, then left to cure before the drive is used." },
    ],
    pricing:
      "The price depends on the area, how dirty and weed-grown the paving is, how much sand the joints need and whether any blocks have to be relaid first. We look at the paving and quote in writing, free.",
    benefits: [
      { title: "Joints locked", text: "Bound jointing sand keeps the blocks tight and stops them rocking under wheels." },
      { title: "Fewer weeds", text: "A sealed joint is a much harder place for seeds to root." },
      { title: "Colour protected", text: "The sealer slows weathering and makes stains easier to shift." },
    ],
    faqs: [
      { q: "How much does paver sealing cost?", a: "It depends on the area and the condition of the paving — heavy weed growth, empty joints and sunken blocks all add preparation time. We give a free written quote after seeing it." },
      { q: "How long does paver sealing take?", a: "It's the drying that sets the pace: the paving must be completely dry before sand and sealer go on, so the job is usually spread over more than one visit and booked around dry weather." },
      { q: "Does new block paving need sealing?", a: "It doesn't have to be sealed, and it shouldn't be sealed immediately — new blocks can release a white bloom called efflorescence that needs to weather out first. We'll advise on timing." },
    ],
    related: ["block-paving", "driveway-sealing", "driveway-repairs"],
  },
  {
    slug: "concrete-work",
    name: "Concrete Work",
    short: "Bases, slabs, paths and footings — formed, poured and finished properly.",
    headline: "Concrete work in Trowbridge & Wiltshire",
    intro:
      "Concrete is unforgiving: once it's poured, whatever you got wrong is permanent. We form, pour and finish concrete bases, slabs, paths, hardstandings and footings, with the ground preparation and reinforcement the job actually calls for.",
    body: [
      "Typical work includes shed, garage and garden-room bases, hardstandings for bins and caravans, paths and ramps, and the footings under walls and steps. Each one starts with excavation to firm ground and a compacted sub-base, then formwork set to the right levels and falls. Slabs that will carry vehicles or buildings are reinforced with steel mesh, and larger pours get movement joints so they crack where we want them to — in a neat line — rather than wherever they like.",
      "Finish matters as much as strength. A base for a building wants to be flat and level; a path or hardstanding wants a brushed, non-slip texture and a fall to shed water. We'll agree the finish with you before the mixer arrives.",
    ],
    steps: [
      { title: "Survey and quote", text: "We check the ground, levels and access for a mixer or pump, and give you a written price." },
      { title: "Excavate and base", text: "Dig to firm ground, then lay and compact the sub-base." },
      { title: "Formwork and reinforcement", text: "Shuttering set to level or fall; mesh and membrane placed where the slab needs them." },
      { title: "Pour and finish", text: "Concrete placed, compacted, levelled and finished, then protected while it cures." },
    ],
    pricing:
      "Concrete work is priced on the area and thickness of the slab, how much excavation and sub-base it needs, whether it's reinforced, and how the concrete gets to it — a pour that can be reached by the lorry is simpler than one barrowed or pumped round the back of a house. Free survey, fixed written quote.",
    benefits: [
      { title: "Ground prepared properly", text: "A slab is only as stable as the sub-base under it. We don't pour onto topsoil." },
      { title: "Reinforced where it matters", text: "Mesh and joints specified for the load, so the slab doesn't crack under a car or a building." },
      { title: "Level means level", text: "Bases for sheds, garages and garden rooms finished flat and to the size your supplier asked for." },
    ],
    faqs: [
      { q: "How much does concrete work cost?", a: "It depends on the size and thickness of the slab, the groundwork beneath it, reinforcement and access for the concrete. We measure up and quote in writing for free." },
      { q: "How long does concrete work take?", a: "The preparation takes longer than the pour. After that the concrete needs to cure: it can normally be walked on after a day or two, but it keeps gaining strength for weeks, so vehicles and heavy loads need to wait. We'll give you clear guidance for your slab." },
      { q: "Can you pour concrete in winter?", a: "Yes, with care. Fresh concrete has to be protected from frost while it cures, so in a cold snap we'll cover it or move the pour date rather than risk the surface." },
    ],
    related: ["site-preparation", "brickwork", "drainage-work"],
  },
  {
    slug: "site-preparation",
    name: "Site Preparation",
    short: "Clearance, excavation, levelling and sub-bases — the groundwork before the build.",
    headline: "Site preparation in Trowbridge & Wiltshire",
    intro:
      "Everything we build sits on groundwork, and we do that groundwork ourselves. Site preparation covers clearing the plot, digging out, sorting the levels and laying a compacted base — leaving ground that's ready for a driveway, patio, building base or lawn.",
    body: [
      "A typical job involves stripping vegetation and topsoil, breaking out old concrete or paving, excavating to formation level, and taking the spoil away. Soft spots are dug out and filled. Then the levels are set: cutting high ground, building up low ground, and working out where the water will go once a hard surface is down.",
      "We lay geotextile membrane where the ground needs it and compact a Type 1 sub-base in layers, not in one thick lift, so it's tight all the way through. If you're having another contractor build on it, we'll work to their levels and specification; if we're building on it, it's simply the first week of the job.",
    ],
    steps: [
      { title: "Survey", text: "Levels, ground conditions, access for a digger and lorry, and anything buried that we need to know about." },
      { title: "Clear and excavate", text: "Vegetation, old surfaces and unsuitable ground removed and taken off site." },
      { title: "Levels and drainage", text: "Ground shaped to the right levels and falls, with any drainage runs installed." },
      { title: "Sub-base", text: "Membrane and compacted Type 1 laid, ready to build on." },
    ],
    pricing:
      "Groundwork cost is driven by how much has to be dug out and taken away, how good the access is for machinery, and how much stone goes back in. A level plot with a wide gate is a very different job from a sloping back garden reached through a side passage. We survey for free and price it in writing.",
    benefits: [
      { title: "Done by the team that builds on it", text: "We prepare ground to the standard we'd want to lay our own driveway on." },
      { title: "Spoil removed", text: "Excavated material and broken-out surfaces are loaded and taken away as part of the job." },
      { title: "Levels thought through", text: "Falls and drainage are planned before the base goes down, not discovered afterwards." },
    ],
    faqs: [
      { q: "How much does site preparation cost?", a: "The main factors are the volume to excavate and remove, access for a digger and lorry, and the depth of sub-base needed. We visit, measure and give you a fixed written price at no charge." },
      { q: "How long does site preparation take?", a: "It depends on the size of the area and the access. Open sites that take a machine and a grab lorry move quickly; tight back gardens where spoil has to be barrowed out take longer. The programme is in your quote." },
      { q: "Can you work in a garden with narrow access?", a: "Yes. We use small plant where a full-size digger won't fit, and barrow where nothing will. It takes longer, and we'll be upfront about that in the price." },
    ],
    related: ["drainage-work", "concrete-work", "driveway-installation", "landscaping"],
  },
  {
    slug: "drainage-work",
    name: "Drainage Work",
    short: "Channel drains, soakaways and falls that keep water off drives, patios and walls.",
    headline: "Drainage work in Trowbridge & Wiltshire",
    intro:
      "Water is behind most of the failed driveways and patios we're asked to look at. We install the drainage that stops it: channel drains, gullies, soakaways and land drains, with surfaces laid to falls so rainwater has somewhere to go that isn't your garage or your neighbour's path.",
    body: [
      "On driveways, the rules matter as well as the puddles. A new or replacement drive over five square metres that drains to the road needs planning permission, so we design drives to deal with their own water — a permeable surface, or a channel drain running to a soakaway inside your boundary.",
      "We also sort out drainage problems on existing surfaces and gardens: a channel across a garage threshold, a gully where water ponds against the house, a soakaway for a patio that never dries, or a land drain to take the wet out of a boggy lawn. Behind retaining walls we fit gravel backfill and weep holes so water pressure can't build up and push the wall over.",
    ],
    steps: [
      { title: "Find where the water goes", text: "We look at levels, where water collects and where it could safely be sent, then quote in writing." },
      { title: "Excavate", text: "Trenches and soakaway pits dug, with care around existing services." },
      { title: "Install", text: "Channels, pipework, gullies and soakaway laid to fall and connected." },
      { title: "Reinstate", text: "Trenches backfilled and the surface made good around the new drainage." },
    ],
    pricing:
      "Drainage is priced on the length of channel and pipe, the size of soakaway the ground needs, how deep we have to dig and what surface has to be cut and reinstated. Heavy clay needs a bigger soakaway than free-draining ground, which is why we look at the site before quoting. The survey and quote are free.",
    benefits: [
      { title: "Keeps you within the rules", text: "Driveways drained within your own boundary, so there's no planning problem with run-off to the road." },
      { title: "Protects the build", text: "Water kept out of the sub-base and away from walls is what makes a surface last." },
      { title: "Fixes, not just new work", text: "We retrofit drainage to existing drives, patios and gardens as well as designing it into new ones." },
    ],
    faqs: [
      { q: "How much does drainage work cost?", a: "It depends on how much channel and pipe is needed, the size and depth of the soakaway, and what has to be dug up and put back. We survey for free and give you a fixed written price." },
      { q: "How long does drainage work take?", a: "A single channel drain is a short job; a soakaway with pipe runs across a garden takes longer. We'll give you a programme when we quote." },
      { q: "What is a soakaway?", a: "A pit, set away from the house and filled with crates or clean stone, that collects rainwater and lets it soak gradually into the ground instead of running to the road or the sewer." },
    ],
    related: ["site-preparation", "driveway-installation", "patios", "brickwork"],
  },
  {
    slug: "road-construction",
    name: "Road Construction",
    short: "Private roads, shared access drives, farm tracks and estate roads built and resurfaced.",
    headline: "Road construction in Trowbridge & Wiltshire",
    intro:
      "We build and resurface private roads: shared access drives, lanes to farms and yards, and roads serving small developments and estates. It's the same discipline as a driveway, built deeper and stronger for heavier vehicles and more of them.",
    body: [
      "A road that carries delivery lorries, tractors or a bin wagon needs a thicker sub-base and a proper tarmac build-up — a binder course for strength with a surface course on top — contained by kerbs or edgings so the edges don't break away. Drainage is planned along the whole length, with cambers or crossfalls, gullies and ditches as the site needs, because standing water is what turns a track into potholes.",
      "For unmade lanes and farm tracks, a full tarmac road isn't always the right answer. A well-drained, well-compacted stone track can be the better and cheaper job, and we'll say so. Where several households share a private road, we're happy to quote in a way that makes the cost easy to split.",
    ],
    steps: [
      { title: "Survey", text: "We walk the route, check ground, levels, drainage and what traffic the road has to carry." },
      { title: "Formation", text: "Excavate or regulate the existing surface, deal with soft ground, install drainage and kerbs." },
      { title: "Sub-base", text: "Stone laid and compacted in layers to the depth the traffic calls for." },
      { title: "Surfacing", text: "Tarmac machine-laid and rolled, or a stone surface graded and compacted." },
    ],
    pricing:
      "A road is priced on its length and width, the depth of construction the traffic needs, drainage and kerbing, and whether we're building new or overlaying an existing surface that's still sound. We visit, measure and give a fixed written quote; for shared roads we can set it out per household.",
    benefits: [
      { title: "Built for the traffic", text: "Construction depth chosen for what will actually drive on it, not a domestic driveway spec stretched out." },
      { title: "Drainage along the length", text: "Falls, gullies and ditches designed so water leaves the road instead of sitting on it." },
      { title: "The right answer, not the dearest", text: "Where a stone track will do the job, we'll quote that." },
    ],
    faqs: [
      { q: "How much does road construction cost?", a: "It depends on the length and width of the road, the depth of construction, drainage, kerbs and whether the existing surface can be overlaid. We survey for free and provide a fixed written quote." },
      { q: "How long does road construction take?", a: "That depends on the length of the road and how much groundwork and drainage is involved. We'll agree a programme with you, including how access is kept open for residents while we work." },
      { q: "Can you resurface a private road without rebuilding it?", a: "Often, yes. If the base is sound, potholes and failed areas can be repaired and a new surface course laid over the top. If the road is breaking up from underneath, an overlay won't last and we'll tell you." },
    ],
    related: ["tarmac", "parking-lot-repair-and-maintenance", "site-preparation", "drainage-work"],
  },
  {
    slug: "parking-lot-repair-and-maintenance",
    name: "Car Park Repair & Maintenance",
    short: "Pothole repairs, resurfacing and upkeep for car parks, yards and forecourts.",
    headline: "Car park repair and maintenance in Trowbridge & Wiltshire",
    intro:
      "A car park full of potholes is a trip hazard, a suspension-breaker and the first thing your customers or tenants see. We repair and maintain car parks, forecourts and yards for businesses, landlords and management companies — from a single pothole to a full resurface.",
    body: [
      "Repairs are done properly: the damaged area cut back square to sound material, the base made good, and new tarmac laid hot and sealed at the edges. That's what separates a patch that lasts from cold-lay shovelled into a wet hole. Where the surface is worn all over but the base is sound, we can plane off or overlay and lay a new surface course.",
      "Maintenance is about getting to problems early: filling cracks before water gets under the surface, clearing and repairing gullies and channels so the car park drains, and resetting kerbs and edgings that vehicles have knocked out. We can work in sections so part of the car park stays open, and plan the work around your opening hours.",
    ],
    steps: [
      { title: "Site visit", text: "We walk the car park with you, mark up what needs doing now and what can wait, and quote in writing." },
      { title: "Plan the access", text: "Work phased so vehicles and pedestrians can still get in and out safely." },
      { title: "Repair", text: "Potholes and failed areas cut out and reinstated; cracks filled; kerbs and drainage put right." },
      { title: "Resurface where needed", text: "Worn areas overlaid or resurfaced, then handed back ready to use." },
    ],
    pricing:
      "Car park work is priced from a site visit: the number and size of repairs, the area of any resurfacing, drainage and kerb work, and how the job has to be phased to keep you open. You get a written, itemised quote so you can see what's urgent and what can be budgeted for later.",
    benefits: [
      { title: "Permanent repairs", text: "Cut out, based and laid hot — not a temporary fill that's out again in a month." },
      { title: "Phased to keep you open", text: "Work planned in sections and around your trading hours." },
      { title: "Clear, itemised quotes", text: "Easy to put in front of a landlord, board or management company." },
    ],
    faqs: [
      { q: "How much does car park repair and maintenance cost?", a: "It depends on how many repairs are needed, how much resurfacing is involved and how the work has to be phased. We visit, measure and give you a free itemised quote." },
      { q: "How long does car park repair take?", a: "Individual pothole repairs are quick; resurfacing a whole car park takes longer and is usually done in sections. We'll agree a programme that suits how the site is used." },
      { q: "Can you work outside business hours?", a: "Our lines are open seven days a week, so call and tell us when the car park is quietest — we'll plan the work around it as far as we can." },
    ],
    related: ["tarmac", "road-construction", "crack-filling-and-sealing", "drainage-work"],
  },
];
