export type Area = {
  slug: string;
  name: string;
  h1: string;
  description: string;
  intro: string;
  working: string[];
  nearby: string[];
  council: string;
  // Services most relevant to this area, with the local reason why.
  focus: { slug: string; text: string }[];
  faqs: { q: string; a: string }[];
};

/* Every place listed on the Google Business Profile, exactly as listed.
   Used for areaServed in structured data. */
export const AREAS_SERVED = [
  "Trowbridge",
  "Bath BA1",
  "Bath BA2",
  "Wells BA5",
  "Calne SN11",
  "Frome BA11",
  "Swindon SN3",
  "Bath BA1 7JD",
  "Corsham SN13",
  "Radstock BA3",
  "Melksham SN12",
  "Westbury BA13",
  "Chippenham SN14",
  "Chippenham SN15",
  "Malmesbury SN16",
  "Swindon SN2 1DZ",
  "Trowbridge BA14",
  "Warminster BA12",
  "Shepton Mallet BA4",
  "Bradford-on-Avon BA15",
  "Batheaston, Bath BA1 8EG",
];

/* Area pages, nearest to Trowbridge first. Single-postcode listings
   (BA1 7JD, BA1 8EG, SN2 1DZ) and Trowbridge BA14 redirect to the page
   that covers them — see next.config.mjs. */
export const AREAS: Area[] = [
  {
    slug: "bradford-on-avon-ba15",
    name: "Bradford-on-Avon BA15",
    h1: "Landscaper in Bradford-on-Avon BA15",
    description:
      "Driveways, patios, walls and landscaping in Bradford-on-Avon and the BA15 villages — Winsley, Westwood, Monkton Farleigh — from a team three miles away in Trowbridge.",
    intro:
      "Bradford-on-Avon is our nearest neighbour — about 3 miles from our Trowbridge base along the A363. BA15 also takes in the villages around the town: Winsley, Westwood, Turleigh, Monkton Farleigh and South Wraxall.",
    working: [
      "The town is built almost entirely of Bath stone, climbing steeply up the north side of the river from the Town Bridge, and much of it is a conservation area with a lot of listed buildings. Work on boundaries and frontages in the old town has to sit well with that stone, and some changes need consent first — we'll flag it at the site visit.",
      "Access is the other thing we look at early. The narrow lanes and stepped streets on the hillside mean some jobs need smaller machines and more barrowing, and gardens up there are often small, steep and terraced, so walls, steps and patios have to work with the levels rather than against them.",
      "Away from the old centre, the newer streets on the edges of town and the surrounding villages have more room at the front of the house, which is where new driveways and dropped kerbs come in.",
    ],
    nearby: ["Winsley", "Westwood", "Turleigh", "Monkton Farleigh", "South Wraxall"],
    council: "Wiltshire Council",
    focus: [
      { slug: "brickwork-and-blockwork", text: "Walls and steps that hold up steep, terraced hillside gardens." },
      { slug: "patio-paving", text: "Patios laid to the levels of small, sloping town gardens." },
      { slug: "driveway-installation", text: "New drives on the edges of town and in the villages, where there's room." },
      { slug: "fencing", text: "Boundaries and gates for village and town plots." },
    ],
    faqs: [
      { q: "Do you charge extra to come to Bradford-on-Avon BA15?", a: "No. Bradford-on-Avon is just up the A363 from us, and the site visit and written quote are free. The price on your quote is the price for the job." },
      { q: "How soon can you get to Bradford-on-Avon BA15?", a: "It's about 3 miles from our base, so getting there is never the hold-up. Call or send the form and we'll arrange a visit at a time that suits you — we usually reply the same working day." },
    ],
  },
  {
    slug: "westbury-ba13",
    name: "Westbury BA13",
    h1: "Landscaper in Westbury BA13",
    description:
      "Driveways, repairs, fencing and gardens in Westbury and the BA13 villages — Dilton Marsh, Bratton, Edington, Heywood — from our base 5 miles away in Trowbridge.",
    intro:
      "Westbury is about 5 miles south of Trowbridge, below the White Horse on Bratton Down. BA13 also covers the villages of Dilton Marsh, Bratton, Edington and Heywood.",
    working: [
      "Westbury has an older centre around the Market Place and a lot of newer housing on its edges. On the newer estates the front of the house is often a small plot that owners want to turn into extra parking, or a drive that has started to sink — both jobs where the groundwork underneath matters more than the surface on top.",
      "The villages along the foot of the downs, Bratton and Edington especially, sit on sloping ground with older brick and stone cottages. There, paving and fencing usually go hand in hand with retaining walls, steps and getting water to drain away from the house.",
      "Being so close to Trowbridge, Westbury is an easy trip for smaller jobs as well as big ones — a few sunken blocks or a storm-damaged fence panel are worth a call.",
    ],
    nearby: ["Dilton Marsh", "Bratton", "Edington", "Heywood"],
    council: "Wiltshire Council",
    focus: [
      { slug: "driveway-repairs", text: "Sunken or cracked drives on newer estates, put right at the base." },
      { slug: "driveway-installation", text: "Front gardens turned into off-street parking." },
      { slug: "drainage-work", text: "Run-off on the sloping village plots below the downs." },
      { slug: "fencing", text: "Boundaries and gates, including storm-damaged sections." },
    ],
    faqs: [
      { q: "Do you charge extra to come to Westbury BA13?", a: "No. Westbury is one of our closest towns and there's no charge for the site visit or the written quote. The price we quote is the price for the job." },
      { q: "How soon can you get to Westbury BA13?", a: "Westbury is about 5 miles from our Trowbridge base. Get in touch and we'll arrange a visit at a time that suits you — we usually reply the same working day." },
    ],
  },
  {
    slug: "melksham-sn12",
    name: "Melksham SN12",
    h1: "Landscaper in Melksham SN12",
    description:
      "Driveways, drainage, patios and gardens in Melksham, Bowerhill, Shaw, Atworth and Seend — built with the flat, low-lying ground in mind. Free quotes from Trowbridge.",
    intro:
      "Melksham is about 7 miles north of Trowbridge. SN12 covers the town, including Bowerhill and Berryfield, and the villages around it — Shaw, Whitley and Atworth to the west, and Seend to the east.",
    working: [
      "Melksham sits low by the River Avon and is flatter than most of the towns we cover. That makes access easy, but it also means water has fewer places to go. On driveways and patios here the falls and drainage need thinking through properly, and before relying on a soakaway we check how well the ground actually drains.",
      "Much of the town's housing is post-war or newer, including large estates such as Bowerhill, where front gardens often suit conversion into off-street parking. A conversion like that usually means a dropped kerb application to Wiltshire Council and a surface that drains within your boundary.",
      "Out at Shaw, Whitley and Atworth, on the road towards Corsham, and at Seend near the Kennet & Avon Canal, plots are more varied — from cottage gardens to longer rural drives.",
    ],
    nearby: ["Bowerhill", "Berryfield", "Shaw", "Whitley", "Atworth", "Seend"],
    council: "Wiltshire Council",
    focus: [
      { slug: "drainage-work", text: "Channel drains and soakaways where flat ground leaves water standing." },
      { slug: "driveway-installation", text: "Estate front gardens converted into parking." },
      { slug: "resin", text: "A permeable surface that drains straight through on level sites." },
      { slug: "patio-paving", text: "Patios laid with a designed fall so water runs away from the house." },
    ],
    faqs: [
      { q: "Do you charge extra to come to Melksham SN12?", a: "No. The site visit and written quote are free in Melksham, and the price on the quote is the full price for the job — nothing is added for travel." },
      { q: "How soon can you get to Melksham SN12?", a: "Melksham is about 7 miles up the road from our Trowbridge base. Call or send the form and we'll arrange a visit — we usually reply the same working day." },
    ],
  },
  {
    slug: "frome-ba11",
    name: "Frome BA11",
    h1: "Landscaper in Frome BA11",
    description:
      "Driveways, walls, patios and dropped kerbs in Frome and the BA11 villages — Beckington, Rode, Nunney, Mells. We know the Somerset Council process. Free quotes.",
    intro:
      "Frome is about 9 miles south-west of Trowbridge along the A361, just over the border in Somerset. BA11 also covers villages including Beckington, Rode, Nunney and Mells.",
    working: [
      "Frome's old town is hilly and closely built, from steep streets like Catherine Hill to the 17th- and 18th-century terraces of the Trinity area. Much of it is a conservation area with many listed buildings, so we check what needs consent before changing front boundaries or surfaces, and plan access for machinery carefully on the narrow streets.",
      "Because Frome is in Somerset, a dropped kerb here is approved by Somerset Council, not Wiltshire Council, and goes through their own vehicle crossing process. We'll make sure you're applying to the right authority before the driveway is planned around it.",
      "The villages beyond the town have more space and a lot of older stone buildings, where new drives, walls and gates need to look as if they belong.",
    ],
    nearby: ["Beckington", "Rode", "Nunney", "Mells"],
    council: "Somerset Council",
    focus: [
      { slug: "dropped-kerbs", text: "Vehicle crossings built for Somerset Council approval." },
      { slug: "brickwork-and-blockwork", text: "Walls and piers that suit Frome's older stone streets." },
      { slug: "patio-paving", text: "Patios and steps for steep, closely built town gardens." },
      { slug: "driveway-installation", text: "New drives in the villages, where there's room at the front." },
    ],
    faqs: [
      { q: "Do you charge extra to come to Frome BA11?", a: "No. Frome is a straightforward run down the A361, and the site visit and written quote are free. Your quote is the full price for the job." },
      { q: "How soon can you get to Frome BA11?", a: "Frome is about 9 miles from our Trowbridge base. Get in touch and we'll arrange a visit at a time that suits you — we usually reply the same working day." },
    ],
  },
  {
    slug: "warminster-ba12",
    name: "Warminster BA12",
    h1: "Landscaper in Warminster BA12",
    description:
      "Driveways, fencing, patios and access tracks in Warminster and the BA12 villages — Sutton Veny, Heytesbury, Corsley, Horningsham. Free quotes from Trowbridge.",
    intro:
      "Warminster is about 9 miles south of Trowbridge, on the western edge of Salisbury Plain with the Longleat estate just beyond. BA12 also covers villages including Sutton Veny, Heytesbury, Corsley and Horningsham.",
    working: [
      "Warminster is a garrison town with a historic centre and a lot of housing built around it over the last century. For homes in town, the usual jobs are drives, patios and fencing for family houses with modest front and back gardens.",
      "Sitting next to high, open ground, Warminster gets its share of wind. Fence posts set deep in concrete, gravel boards to keep timber off wet ground and gates built to suit the opening all earn their keep here.",
      "Out in the Wylye valley villages and towards Longleat, properties often have longer drives, bigger gardens and rural access — tarmac and well-built access tracks make more sense there than paving every metre.",
    ],
    nearby: ["Sutton Veny", "Heytesbury", "Corsley", "Horningsham"],
    council: "Wiltshire Council",
    focus: [
      { slug: "fencing", text: "Fences and gates built to stand up to wind off the Plain." },
      { slug: "tarmac", text: "Longer village and rural drives, where tarmac is the economical surface." },
      { slug: "road-construction", text: "Access tracks for rural properties around the Wylye valley." },
      { slug: "patio-paving", text: "Patios and garden paving for homes in town." },
    ],
    faqs: [
      { q: "Do you charge extra to come to Warminster BA12?", a: "No. There's no charge for the site visit or the written quote in Warminster or the surrounding villages, and the price we quote is the price for the job." },
      { q: "How soon can you get to Warminster BA12?", a: "Warminster is about 9 miles from our Trowbridge base. Call or send the form and we'll arrange a visit that suits you — we usually reply the same working day." },
    ],
  },
  {
    slug: "corsham-sn13",
    name: "Corsham SN13",
    h1: "Landscaper in Corsham SN13",
    description:
      "Driveways, stone-friendly walls, patios and gardens in Corsham, Box, Rudloe, Neston and Gastard. Built to suit Bath stone country. Free quotes from Trowbridge.",
    intro:
      "Corsham is about 10 miles north of Trowbridge, between Bath and Chippenham just off the A4. SN13 also takes in Box, Rudloe, Neston, Gastard and Pickwick.",
    working: [
      "Corsham is Bath stone country — the stone was mined from beneath the town and around Box — and the high street and the streets around Corsham Court are lined with stone buildings in a conservation area. New walls, piers and frontages in the older parts of town need materials and detailing that sit comfortably next to that stone.",
      "Outside the old centre there's a good deal of newer housing, where front gardens are often converted into parking and back gardens are ready for a patio or a lower-maintenance lawn.",
      "Box sits in a steep valley on the A4 towards Bath, with sloping gardens that call for walls and steps, while Gastard and Neston to the south have more room for longer drives and bigger gardens.",
    ],
    nearby: ["Box", "Rudloe", "Neston", "Gastard", "Pickwick"],
    council: "Wiltshire Council",
    focus: [
      { slug: "brickwork-and-blockwork", text: "Walls and piers that sit comfortably beside Corsham's stone." },
      { slug: "driveway-installation", text: "Front gardens on newer streets turned into parking." },
      { slug: "resin", text: "A smooth, permeable finish that suits stone-built frontages." },
      { slug: "landscaping", text: "Walls, steps and levels for the sloping gardens in Box." },
    ],
    faqs: [
      { q: "Do you charge extra to come to Corsham SN13?", a: "No. The site visit and written quote are free in Corsham and Box, and the price on your quote is the full price for the job." },
      { q: "How soon can you get to Corsham SN13?", a: "Corsham is about 10 miles from our Trowbridge base. Get in touch and we'll arrange a visit at a time that suits you — we usually reply the same working day." },
    ],
  },
  {
    slug: "bath-ba1",
    name: "Bath BA1",
    h1: "Landscaper in Bath BA1",
    description:
      "Patios, walls, driveways and dropped kerbs in central and north Bath — Lansdown, Weston, Larkhall, Batheaston, Bathford. Planned around Bath's slopes and stone.",
    intro:
      "BA1 takes in the centre of Bath and the north side of the city — Lansdown, Weston, Newbridge, Larkhall, Fairfield Park and Swainswick — and out along the A4 to Batheaston and Bathford. It's about 12 miles from our Trowbridge base, up the A363 through Bradford-on-Avon.",
    working: [
      "Bath is a World Heritage city, and much of BA1 lies in a conservation area with a high number of listed buildings. That shapes how outdoor work is planned: changes to front boundaries, railings and surfaces at listed properties can need consent, and materials have to sit well beside Bath stone. We'll flag anything that needs checking with Bath & North East Somerset Council before work is booked.",
      "Then there are the hills. Much of north Bath is built on steep slopes, so gardens on Lansdown, Larkhall and Fairfield Park are often terraced, with steps and retaining walls doing a lot of the work. Patios there are as much about walls and levels as about paving.",
      "Many of the city's terraced streets have no off-street parking at all. Where a front garden can take a car, the conversion needs a vehicle crossing approved by B&NES and a surface that drains within your boundary. Out at Batheaston and Bathford, east of the city on the A4, there's generally more room at the front of houses for a driveway.",
    ],
    nearby: ["Lansdown", "Weston", "Newbridge", "Larkhall", "Fairfield Park", "Swainswick", "Batheaston", "Bathford"],
    council: "Bath & North East Somerset Council",
    focus: [
      { slug: "brickwork-and-blockwork", text: "Retaining walls and steps for terraced, sloping gardens." },
      { slug: "patio-paving", text: "Patios built into the levels of north Bath's hillsides." },
      { slug: "dropped-kerbs", text: "Vehicle crossings that need approval from B&NES Council." },
      { slug: "resin", text: "A permeable driveway surface that drains within your boundary." },
    ],
    faqs: [
      { q: "Do you charge extra to come to Bath BA1?", a: "No. The site visit and written quote are free in Bath just as they are in Trowbridge, and the price on your quote is the price for the job." },
      { q: "How soon can you get to Bath BA1?", a: "Bath is about 12 miles from our Trowbridge base — an easy trip for a site visit. Call or send the form and we'll arrange a time that suits you; we usually reply the same working day." },
    ],
  },
  {
    slug: "bath-ba2",
    name: "Bath BA2",
    h1: "Landscaper in Bath BA2",
    description:
      "Driveways, patios, walls and gardens in south and east Bath — Combe Down, Odd Down, Oldfield Park, Widcombe, Bathampton — and the Avon valley villages to Freshford.",
    intro:
      "BA2 covers the south and east of Bath — Widcombe, Bear Flat, Oldfield Park, Twerton, Odd Down, Combe Down, Bathwick and Bathampton — plus the Avon valley villages towards Bradford-on-Avon: Claverton, Monkton Combe, Freshford and Limpley Stoke. Those valley villages are the closest part of the Bath postcode to our Trowbridge base.",
    working: [
      "South Bath is a real mix. Oldfield Park and Bear Flat are mostly Victorian terraces where off-street parking is scarce; the post-war and later estates around Odd Down and Twerton often have front gardens that can take a driveway; and Combe Down, up on the hill, is where much of the stone that built Georgian Bath was quarried.",
      "Widcombe and Bathwick sit close to the centre, and much of both is in the city's conservation area. As in BA1, we check what needs consent before planning new boundaries or surfaces at older properties.",
      "One detail worth knowing in the valley villages: Limpley Stoke has a Bath postcode but is in Wiltshire, so a dropped kerb there goes to Wiltshire Council, while Freshford, Monkton Combe and Claverton are in Bath & North East Somerset.",
    ],
    nearby: ["Widcombe", "Bear Flat", "Oldfield Park", "Odd Down", "Combe Down", "Bathampton", "Freshford", "Limpley Stoke"],
    council: "Bath & North East Somerset Council (Limpley Stoke: Wiltshire Council)",
    focus: [
      { slug: "driveway-installation", text: "Estate front gardens around Odd Down and Twerton turned into parking." },
      { slug: "dropped-kerbs", text: "Vehicle crossings through B&NES — or Wiltshire, in Limpley Stoke." },
      { slug: "landscaping", text: "Levels, walls and steps for gardens on the southern hillsides." },
      { slug: "patio-paving", text: "Patios for terrace gardens in Oldfield Park and Bear Flat." },
    ],
    faqs: [
      { q: "Do you charge extra to come to Bath BA2?", a: "No. The site visit and written quote are free across BA2, from Freshford into the city, and the price we quote is the price for the job." },
      { q: "How soon can you get to Bath BA2?", a: "The valley villages such as Freshford are only a few miles from our Trowbridge base, and south Bath is around 12 miles. Get in touch and we'll arrange a visit — we usually reply the same working day." },
    ],
  },
  {
    slug: "radstock-ba3",
    name: "Radstock BA3",
    h1: "Landscaper in Radstock BA3",
    description:
      "Retaining walls, patios, driveways and dropped kerbs in Radstock, Midsomer Norton, Westfield and Writhlington — built for steep valley gardens. Free quotes.",
    intro:
      "Radstock is about 13 miles west of Trowbridge, in the valleys south of Bath. BA3 also covers Midsomer Norton, Westfield and Writhlington.",
    working: [
      "Radstock and Midsomer Norton grew up on the Somerset coalfield, and the mining history shows in the terraces of miners' cottages along the valley sides, with newer estates built around them since the pits closed.",
      "The valleys are steep, so many gardens slope hard to the front or back. Retaining walls, steps and patios with proper drainage are often what turns a slope into a garden you can actually use — and it's the groundwork behind those walls that decides whether they stay up.",
      "Radstock is in Bath & North East Somerset, so dropped kerbs here are approved by B&NES Council, not Somerset or Wiltshire.",
    ],
    nearby: ["Midsomer Norton", "Westfield", "Writhlington"],
    council: "Bath & North East Somerset Council",
    focus: [
      { slug: "brickwork-and-blockwork", text: "Retaining walls with drainage behind them for steep valley gardens." },
      { slug: "patio-paving", text: "Level patios cut into sloping plots." },
      { slug: "dropped-kerbs", text: "Vehicle crossings approved by B&NES Council." },
      { slug: "driveway-installation", text: "Drives on the newer estates around the towns." },
    ],
    faqs: [
      { q: "Do you charge extra to come to Radstock BA3?", a: "No. The site visit and written quote are free in Radstock and Midsomer Norton, and the price on your quote is the full price for the job." },
      { q: "How soon can you get to Radstock BA3?", a: "Radstock is about 13 miles from our Trowbridge base. Call or send the form and we'll arrange a visit at a time that suits you — we usually reply the same working day." },
    ],
  },
  {
    slug: "chippenham-sn15",
    name: "Chippenham SN15",
    h1: "Landscaper in Chippenham SN15",
    description:
      "Driveways, block paving, drainage and fencing in central and east Chippenham, Lacock, Langley Burrell, Christian Malford and Lyneham. Free quotes.",
    intro:
      "SN15 covers the centre and east of Chippenham, about 13 miles north of Trowbridge up the A350, along with villages including Lacock, Langley Burrell, Christian Malford and Lyneham.",
    working: [
      "Chippenham is a market town on the River Avon, with an older centre surrounded by housing built over the past sixty years or so. On those estates, front gardens often suit a driveway, and original drives that have sunk or cracked are worth relaying properly rather than patching.",
      "Lacock is a different proposition: most of the village is owned by the National Trust and closely protected, so any outdoor work there starts with the right permissions.",
      "Low-lying ground along the river, out towards Christian Malford, can hold water after heavy rain, so drainage is worth thinking about at the start of any driveway or patio job rather than after the first puddle.",
    ],
    nearby: ["Lacock", "Langley Burrell", "Christian Malford", "Lyneham"],
    council: "Wiltshire Council",
    focus: [
      { slug: "driveway-installation", text: "New and replacement drives on Chippenham's estates." },
      { slug: "block-paving", text: "A drive that can be repaired block by block if it ever needs it." },
      { slug: "drainage-work", text: "Run-off on low-lying ground near the river." },
      { slug: "fencing", text: "Garden boundaries and gates for family homes." },
    ],
    faqs: [
      { q: "Do you charge extra to come to Chippenham SN15?", a: "No. There's no charge for the site visit or the written quote in Chippenham, and the price on the quote is the full price for the job." },
      { q: "How soon can you get to Chippenham SN15?", a: "Chippenham is about 13 miles from our Trowbridge base, straight up the A350. Get in touch and we'll arrange a visit — we usually reply the same working day." },
    ],
  },
  {
    slug: "chippenham-sn14",
    name: "Chippenham SN14",
    h1: "Landscaper in Chippenham SN14",
    description:
      "Long drives, access tracks, stone walls and fencing in west Chippenham and the SN14 villages — Biddestone, Yatton Keynell, Castle Combe, Colerne, Hullavington.",
    intro:
      "SN14 is the western side of Chippenham and the countryside beyond it, towards the M4 and the southern edge of the Cotswolds — villages such as Biddestone, Yatton Keynell, Castle Combe, Colerne, Hullavington and Grittleton.",
    working: [
      "Out here it's stone villages and farmland. Castle Combe, in the Cotswolds National Landscape, is one of the most protected villages in the county, so walls, gates and surfaces there have to suit the setting and may need consent.",
      "Rural plots bring a different kind of job: longer drives, farm and estate access tracks, yards and field boundaries. On those, tarmac or a hard-wearing tracked surface laid on a deep base usually makes more sense than paving every metre.",
      "On the west side of Chippenham itself, the needs are the same as the rest of town — driveways, patios and fencing for family homes.",
    ],
    nearby: ["Biddestone", "Yatton Keynell", "Castle Combe", "Colerne", "Hullavington", "Grittleton"],
    council: "Wiltshire Council",
    focus: [
      { slug: "road-construction", text: "Farm and estate access tracks built on a deep base." },
      { slug: "tarmac", text: "Long rural drives at an economical cost per square metre." },
      { slug: "brickwork-and-blockwork", text: "Walls and piers that suit the stone villages." },
      { slug: "fencing", text: "Field boundaries, garden fences and gates." },
    ],
    faqs: [
      { q: "Do you charge extra to come to Chippenham SN14?", a: "No. The site visit and written quote are free in west Chippenham and the SN14 villages, and the price we quote is the price for the job." },
      { q: "How soon can you get to Chippenham SN14?", a: "West Chippenham is about 14 miles from our Trowbridge base, with the villages a little further. Call or send the form and we'll arrange a visit — we usually reply the same working day." },
    ],
  },
  {
    slug: "calne-sn11",
    name: "Calne SN11",
    h1: "Landscaper in Calne SN11",
    description:
      "Driveways, wider drives, dropped kerbs, drainage and patios in Calne, Derry Hill, Bremhill, Heddington and Compton Bassett. Free quotes from Trowbridge.",
    intro:
      "Calne is about 17 miles north-east of Trowbridge on the A4, with the Bowood estate to the west and the Cherhill White Horse and Lansdowne Monument on the downs to the east. SN11 also covers Derry Hill, Bremhill, Heddington and Compton Bassett.",
    working: [
      "Calne has grown a great deal around its old centre, with large newer estates on the edges of town. Many newer homes come with a single-width drive, and widening it for a second car usually means extra excavation and edging — and often a wider dropped kerb, which needs Wiltshire Council's approval.",
      "Towards the downs, villages such as Heddington and Compton Bassett sit on sloping ground at the foot of the hills, where run-off after heavy rain is worth planning for on any new drive or patio.",
      "Derry Hill and Bremhill, on the Bowood side, are older villages with a mix of cottages and larger plots.",
    ],
    nearby: ["Derry Hill", "Bremhill", "Heddington", "Compton Bassett"],
    council: "Wiltshire Council",
    focus: [
      { slug: "driveway-installation", text: "Single drives on newer estates widened for a second car." },
      { slug: "dropped-kerbs", text: "Wider crossings to match a wider drive." },
      { slug: "drainage-work", text: "Run-off on sloping village plots below the downs." },
      { slug: "patio-paving", text: "Patios for newer homes with bare back gardens." },
    ],
    faqs: [
      { q: "Do you charge extra to come to Calne SN11?", a: "No. The site visit and written quote are free in Calne, and the price on your quote is the full price for the job — nothing is added for the distance." },
      { q: "How soon can you get to Calne SN11?", a: "Calne is about 17 miles from our Trowbridge base. Get in touch and we'll arrange a visit at a time that suits you — we usually reply the same working day." },
    ],
  },
  {
    slug: "shepton-mallet-ba4",
    name: "Shepton Mallet BA4",
    h1: "Landscaper in Shepton Mallet BA4",
    description:
      "Driveways, yard and access tracks, hardstandings and fencing in Shepton Mallet, Evercreech, Doulting, Pilton and Ditcheat. Free quotes from Trowbridge.",
    intro:
      "Shepton Mallet is about 20 miles west of Trowbridge, out past Frome on the A361 at the foot of the Mendips. BA4 also covers Evercreech, Doulting, Pilton and Ditcheat.",
    working: [
      "Shepton Mallet is an old Mendip stone town, with the Royal Bath & West Showground just to the south and Pilton — home of the Glastonbury Festival — a few miles away.",
      "The country around it is farmland, so farm and yard access, hardstandings and field boundaries are as relevant here as domestic drives and gardens. Those jobs carry heavier vehicles than a house drive and need a deeper base to match.",
      "Shepton Mallet is in Somerset, so dropped kerbs here are approved by Somerset Council rather than Wiltshire Council.",
    ],
    nearby: ["Evercreech", "Doulting", "Pilton", "Ditcheat"],
    council: "Somerset Council",
    focus: [
      { slug: "road-construction", text: "Farm, yard and access tracks built for heavy vehicles." },
      { slug: "tarmac", text: "Hardstandings and long drives." },
      { slug: "fencing", text: "Field boundaries, garden fences and gates." },
      { slug: "driveway-installation", text: "Driveways for homes in town and the villages." },
    ],
    faqs: [
      { q: "Do you charge extra to come to Shepton Mallet BA4?", a: "No. The site visit and written quote are free in Shepton Mallet and the BA4 villages, and the price we quote is the price for the job." },
      { q: "How soon can you get to Shepton Mallet BA4?", a: "Shepton Mallet is about 20 miles from our Trowbridge base. Call or send the form and we'll arrange a visit that suits you — we usually reply the same working day." },
    ],
  },
  {
    slug: "malmesbury-sn16",
    name: "Malmesbury SN16",
    h1: "Landscaper in Malmesbury SN16",
    description:
      "Stone-friendly walls, patios, driveways and access tracks in Malmesbury, Sherston, Crudwell, Lea and Charlton. Free quotes from our Trowbridge base.",
    intro:
      "Malmesbury is in the north of Wiltshire, about 23 miles from Trowbridge — a hilltop town almost encircled by two branches of the River Avon and topped by its medieval abbey. SN16 also covers villages including Sherston, Crudwell, Lea and Charlton.",
    working: [
      "The old town on the hilltop is a conservation area full of stone buildings, with narrow streets where access for machinery and waste needs planning before the job starts.",
      "This is where the Cotswolds begin, and stone walls and natural-stone paving suit the setting far better than anything that shouts. We'll talk you through materials that sit well beside the local stone.",
      "Around the town the villages are rural, with larger plots, longer drives, farm access and field boundaries — the kind of work where a well-built base under a drive or track matters most.",
    ],
    nearby: ["Sherston", "Crudwell", "Lea", "Charlton"],
    council: "Wiltshire Council",
    focus: [
      { slug: "brickwork-and-blockwork", text: "Walls and piers that sit well beside Cotswold stone." },
      { slug: "patio-paving", text: "Natural-stone patios for town and village gardens." },
      { slug: "road-construction", text: "Farm and access tracks in the surrounding countryside." },
      { slug: "fencing", text: "Rural boundaries and gates." },
    ],
    faqs: [
      { q: "Do you charge extra to come to Malmesbury SN16?", a: "No. The site visit and written quote are free in Malmesbury and the SN16 villages, and the price on your quote is the full price for the job." },
      { q: "How soon can you get to Malmesbury SN16?", a: "Malmesbury is about 23 miles from our Trowbridge base. Get in touch and we'll arrange a visit at a time that suits you — we usually reply the same working day." },
    ],
  },
  {
    slug: "wells-ba5",
    name: "Wells BA5",
    h1: "Landscaper in Wells BA5",
    description:
      "Patios, walls, drainage and dropped kerbs in Wells, Wookey, Wookey Hole, Coxley and Croscombe — from the historic centre to the Mendip slopes. Free quotes.",
    intro:
      "Wells is about 25 miles west of Trowbridge — the cathedral city at the foot of the Mendip Hills. BA5 also covers Wookey, Wookey Hole, Coxley and Croscombe.",
    working: [
      "Central Wells is small, historic and protected. The cathedral, the Bishop's Palace and the streets around the Market Place are in a conservation area with many listed buildings, so outdoor work in the centre needs the right consents and materials that suit the stone.",
      "Beyond the centre, the newer suburbs and the villages on the Mendip slopes have more room — but sloping ground means patios, drives and lawns there need retaining walls and drainage planned in from the start.",
      "Wells is in Somerset, so dropped kerbs are approved by Somerset Council rather than Wiltshire Council.",
    ],
    nearby: ["Wookey", "Wookey Hole", "Coxley", "Croscombe"],
    council: "Somerset Council",
    focus: [
      { slug: "patio-paving", text: "Patios laid level on sloping Mendip-side gardens." },
      { slug: "brickwork-and-blockwork", text: "Retaining walls and steps where gardens change level." },
      { slug: "drainage-work", text: "Run-off coming down off the hills." },
      { slug: "dropped-kerbs", text: "Vehicle crossings approved by Somerset Council." },
    ],
    faqs: [
      { q: "Do you charge extra to come to Wells BA5?", a: "No. The site visit and written quote are free in Wells, and the price we quote is the full price for the job — nothing is added for travel." },
      { q: "How soon can you get to Wells BA5?", a: "Wells is about 25 miles from our Trowbridge base. Call or send the form and we'll arrange a visit at a time that suits you — we usually reply the same working day." },
    ],
  },
  {
    slug: "swindon-sn3",
    name: "Swindon SN3",
    h1: "Landscaper in Swindon SN3",
    description:
      "Driveways, block paving, dropped kerbs and fencing in east Swindon — Stratton St Margaret, Covingham, Walcot, Liden, Eldene. Swindon Borough Council crossings.",
    intro:
      "SN3 is east Swindon — Stratton St Margaret, Covingham, Nythe, Walcot, Park North and South, Liden, Eldene and Dorcan. It's the furthest of the areas we cover, about 35 miles from our Trowbridge base, and we cover north Swindon too.",
    working: [
      "Much of east Swindon is estate housing built as the town grew after the war, where turning a front garden into off-street parking, or replacing a drive that has broken up, are the jobs that make the biggest difference.",
      "Swindon is its own council, so a dropped kerb in SN3 is approved by Swindon Borough Council, not Wiltshire Council, with its own process and requirements. It's worth starting that application early, because the driveway is planned around where the crossing can go.",
      "Because Swindon is the furthest we travel, we use the site visit to cover everything — measurements, materials, access and drainage — so your quote is complete first time.",
    ],
    nearby: ["Stratton St Margaret", "Covingham", "Nythe", "Walcot", "Liden", "Eldene", "Dorcan"],
    council: "Swindon Borough Council",
    focus: [
      { slug: "driveway-installation", text: "Front gardens on east Swindon estates turned into parking." },
      { slug: "dropped-kerbs", text: "Vehicle crossings through Swindon Borough Council." },
      { slug: "block-paving", text: "Drives with borders and patterns to lift a plain frontage." },
      { slug: "fencing", text: "Back-garden boundaries and gates." },
    ],
    faqs: [
      { q: "Do you charge extra to come to Swindon SN3?", a: "No. Even though Swindon is the furthest point we cover, the site visit and written quote are free, and the price on the quote is the full price for the job." },
      { q: "How soon can you get to Swindon SN3?", a: "Swindon is about 35 miles from our Trowbridge base. Get in touch and we'll arrange a visit at a time that suits you — we usually reply the same working day." },
    ],
  },
];

export function getArea(slug: string) {
  return AREAS.find((a) => a.slug === slug);
}
