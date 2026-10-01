import { BUSINESS } from "./services";

export type Area = {
  slug: string;
  name: string; // as listed on our Google profile, e.g. "Frome BA11"
  town: string;
  authority: string; // highway authority for dropped kerbs
  intro: string;
  local: string[];
  places: string[];
  route: string; // how we reach it from Trowbridge
  featured: { slug: string; note: string }[];
};

export const AREA_PAGES: Area[] = [
  {
    slug: "trowbridge-ba14",
    name: "Trowbridge BA14",
    town: "Trowbridge",
    authority: "Wiltshire Council",
    intro:
      "Trowbridge is home. We're based in BA14, so this is the town we know street by street — and the easiest place for us to call round, measure up and price a job.",
    local: [
      "BA14 is a mix that keeps the work varied: Victorian and Edwardian terraces near the town centre with small front gardens and on-street parking, post-war semis with long concrete drives that have reached the end of their life, and the newer estates out towards Paxcroft Mead and Hilperton where the builder's standard tarmac strip is often the first thing owners want to widen.",
      "The same postcode takes in the villages around the town — Hilperton, Staverton, North Bradley, Southwick, West Ashton and Steeple Ashton — where the jobs tend to be bigger: gravel drives being upgraded, shared accesses, and gardens with enough room for a proper patio and landscaping scheme.",
    ],
    places: ["Hilperton", "Staverton", "Paxcroft Mead", "North Bradley", "Southwick", "West Ashton", "Steeple Ashton", "Semington"],
    route: "We're based in Trowbridge, so there's no travelling to speak of.",
    featured: [
      { slug: "driveway-replacement", note: "For the long post-war concrete drives around town that have cracked and settled." },
      { slug: "block-paving", note: "A good match for the town's brick terraces and semis, and repairable if utilities ever dig it up." },
      { slug: "dropped-kerbs", note: "For front gardens being turned into parking — built to Wiltshire Council's crossover specification." },
      { slug: "patios", note: "Porcelain and sandstone patios for the larger village gardens around the town." },
    ],
  },
  {
    slug: "bradford-on-avon-ba15",
    name: "Bradford-on-Avon BA15",
    town: "Bradford-on-Avon",
    authority: "Wiltshire Council",
    intro:
      "Bradford-on-Avon is the next town along from us, and about as different from Trowbridge as a neighbour can be: steep, tightly built and almost entirely Bath stone.",
    local: [
      "Much of the town climbs the hillside above the river in terraces, with narrow lanes, stepped paths and very little room to park, let alone bring in a digger. Work here is often a job for small plant and barrows, and takes planning: where materials are dropped, how spoil gets out, and how neighbours keep their access while we work.",
      "The centre is a conservation area with a great many listed buildings, so materials need choosing with care — natural stone, buff and honey-toned paving and resin blends sit comfortably next to Bath stone where a hard grey block would not. On sloping plots, retaining walls and drainage usually matter as much as the surface itself. Out of the valley, in Winsley, Westwood and the villages towards Monkton Farleigh, plots open up and access is far easier.",
    ],
    places: ["Winsley", "Westwood", "Turleigh", "Monkton Farleigh", "South Wraxall", "Bradford Leigh"],
    route: "It's the next town up the A363 from our Trowbridge base.",
    featured: [
      { slug: "brickwork", note: "Retaining walls and steps for hillside gardens, with drainage behind them." },
      { slug: "patios", note: "Natural stone and stone-toned porcelain that sit well against Bath stone houses." },
      { slug: "drainage-work", note: "On a slope, where the water goes is the first question, not the last." },
      { slug: "resin-driveways", note: "Buff and gold aggregate blends for a permeable drive that suits the town's stone." },
    ],
  },
  {
    slug: "melksham-sn12",
    name: "Melksham SN12",
    town: "Melksham",
    authority: "Wiltshire Council",
    intro:
      "Melksham is a short run up the A350 from us and, unlike its hillier neighbours, sits on flat ground beside the Avon — which shapes almost every job we do there.",
    local: [
      "Flat ground is easy to work on and awkward to drain. With little natural fall to play with, driveways and patios in Melksham need their levels set carefully and, more often than not, a channel drain and soakaway or a permeable surface so rainwater has somewhere to go.",
      "The town has grown quickly, with large modern estates to the east and south at Bowerhill and Berryfield. The usual improvements there are widening a single-width drive to take a second car and replacing builder's turf with a patio or artificial grass. The older streets near the centre and the villages around — Shaw, Whitley, Atworth, Seend and Broughton Gifford — bring more replacement drives and garden work.",
    ],
    places: ["Bowerhill", "Berryfield", "Shaw", "Whitley", "Atworth", "Seend", "Broughton Gifford"],
    route: "Melksham is the next town north of Trowbridge on the A350.",
    featured: [
      { slug: "drainage-work", note: "Channel drains and soakaways for level plots where water has nowhere to run." },
      { slug: "driveway-installation", note: "Widening single-width estate driveways to fit a second car." },
      { slug: "artificial-grass", note: "For small new-build gardens that stay wet through winter." },
      { slug: "fencing", note: "Replacing developer panel fencing with something that stands up to the wind." },
    ],
  },
  {
    slug: "westbury-ba13",
    name: "Westbury BA13",
    town: "Westbury",
    authority: "Wiltshire Council",
    intro:
      "Westbury sits under the White Horse at the foot of the Salisbury Plain escarpment, a few miles south of us down the A350.",
    local: [
      "The town rises from low ground around the station up towards the chalk downs, so plots vary a good deal: level, heavier ground on the Trowbridge side and sloping gardens towards Bratton Road and the hill. The villages strung along the foot of the scarp — Bratton and Edington — have the same pattern of drives that climb from the road.",
      "Housing runs from the Georgian centre round the Market Place through streets of older brick houses to the newer estates on the edge of town and at Westbury Leigh and Dilton Marsh. Driveway replacements and tarmac suit the town streets; on the more exposed plots nearer the downs, fencing needs its posts set properly to cope with the wind.",
    ],
    places: ["Westbury Leigh", "Dilton Marsh", "Bratton", "Edington", "Heywood", "Chapmanslade"],
    route: "Westbury is a short drive south of Trowbridge on the A350.",
    featured: [
      { slug: "tarmac", note: "A hard-wearing, economical choice for the longer sloping drives under the hill." },
      { slug: "fencing", note: "Concrete posts and gravel boards for exposed plots near the downs." },
      { slug: "driveway-replacement", note: "Taking out failed concrete and tarmac on the town's older streets." },
      { slug: "block-paving", note: "With proper edge restraint, a good surface for drives on a gradient." },
    ],
  },
  {
    slug: "warminster-ba12",
    name: "Warminster BA12",
    town: "Warminster",
    authority: "Wiltshire Council",
    intro:
      "Warminster lies on the western edge of Salisbury Plain, beyond Westbury on the A350, and BA12 stretches a long way past the town itself.",
    local: [
      "It's a garrison town with a broad mix of housing: the old coaching-town centre along the High Street and Market Place, substantial older houses with long drives, and large residential estates on both sides of town. Chalk is never far below the surface here, which generally drains well — good news for soakaways and permeable driveways.",
      "The postcode also covers the Wylye valley villages such as Sutton Veny, Heytesbury and Codford, and runs out through the Deverills towards Mere. Jobs in the villages are often on a different scale: long gravel or tarmac drives, farm and yard accesses, and private lanes shared between a handful of houses.",
    ],
    places: ["Sutton Veny", "Heytesbury", "Codford", "Longbridge Deverill", "Crockerton", "Corsley", "Mere"],
    route: "We reach Warminster down the A350 through Westbury.",
    featured: [
      { slug: "road-construction", note: "Shared private lanes and farm accesses in the Wylye valley and Deverills." },
      { slug: "tarmac", note: "The practical surface for the long drives common around Warminster." },
      { slug: "resin-driveways", note: "Permeable resin works well over the area's free-draining chalk." },
      { slug: "landscaping", note: "Full garden schemes for larger village plots." },
    ],
  },
  {
    slug: "frome-ba11",
    name: "Frome BA11",
    town: "Frome",
    authority: "Somerset Council",
    intro:
      "Frome is just over the county boundary in Somerset, down the A361 from Trowbridge — a hill town of stone houses, steep streets and some very tight access.",
    local: [
      "The old centre is one of the most intact in the county: cobbled Catherine Hill, Cheap Street with its open water channel, and street after street of listed stone cottages in the Trinity area. Working here means respecting that. Many properties are listed or in the conservation area, so we talk through materials and any permissions before a design is settled, and we favour natural stone and warm-toned paving that belong alongside the local stone.",
      "Away from the centre the town has large twentieth-century and modern estates where the work is more straightforward: driveway replacements, patios and fencing. Because Frome is in Somerset, dropped kerb applications go to Somerset Council rather than Wiltshire. BA11 also takes in villages such as Beckington, Rode, Nunney, Mells and Great Elm.",
    ],
    places: ["Beckington", "Rode", "Nunney", "Mells", "Great Elm", "Buckland Dinham", "Berkley"],
    route: "Frome is a straight run down the A361 from our Trowbridge base.",
    featured: [
      { slug: "patios", note: "Sandstone and limestone patios that suit Frome's stone cottages." },
      { slug: "brickwork", note: "Walls, steps and retaining work for the town's sloping gardens." },
      { slug: "dropped-kerbs", note: "Built to Somerset Council's requirements — a different authority from our Wiltshire jobs." },
      { slug: "driveway-replacement", note: "Worn-out drives on the estates around the edge of town." },
    ],
  },
  {
    slug: "bath-ba2",
    name: "Bath BA2",
    town: "Bath",
    authority: "Bath & North East Somerset Council",
    intro:
      "BA2 is the southern half of Bath — from Bathwick and Widcombe up over the hills to Combe Down and Odd Down — together with the villages beyond, out to Peasedown St John.",
    local: [
      "Two things define work in Bath. The first is the hills: Bear Flat, Lyncombe, Widcombe and Combe Down are steep, so drives need real thought about falls, drainage and edge restraint, and gardens often need retaining walls and steps before anything else can happen. The second is that the city is a World Heritage Site, with a large conservation area and thousands of listed buildings. Bath stone sets the palette, and the wrong surface in front of a Georgian or Victorian house looks wrong for decades.",
      "Further out, Oldfield Park's terraces have small front gardens and scarce parking, while Odd Down, Southdown and Twerton have more twentieth-century housing with conventional drives. Dropped kerbs here are a matter for Bath & North East Somerset Council. The same postcode reaches the villages of the Limpley Stoke valley and south to Peasedown St John and Timsbury.",
    ],
    places: ["Combe Down", "Odd Down", "Widcombe", "Bathwick", "Oldfield Park", "Twerton", "Southdown", "Peasedown St John", "Limpley Stoke", "Freshford"],
    route: "We come into the south side of Bath from Trowbridge via Bradford-on-Avon or the A36.",
    featured: [
      { slug: "resin-driveways", note: "Buff aggregate blends that tone with Bath stone, and permeable for hillside run-off." },
      { slug: "brickwork", note: "Retaining walls and steps — on Bath's slopes, often the first part of the job." },
      { slug: "drainage-work", note: "Stopping water running down a steep drive into the garage or the road." },
      { slug: "patios", note: "Natural stone terraces for sloping city gardens." },
    ],
  },
  {
    slug: "batheaston-bath-ba1-8eg",
    name: "Batheaston, Bath BA1 8EG",
    town: "Batheaston",
    authority: "Bath & North East Somerset Council",
    intro:
      "Batheaston is the village on the eastern edge of Bath, strung along the old London Road beside the Avon, with lanes climbing north into the St Catherine's valley.",
    local: [
      "It feels like a village rather than a suburb: a long High Street of Bath stone houses, then steep lanes up through Northend with cottages set into the hillside. Parking is tight and many properties sit well above or below the road, so the work is often about making a usable space where there wasn't one — cutting in a parking bay, building the retaining wall that holds it, and draining it properly.",
      "The village is within the Cotswolds National Landscape and close to the edge of the Bath World Heritage Site, and much of it is conservation area, so we stay with stone-toned materials and check what consents apply before anything is fixed. Bathford and Bathampton are just across the river and we cover those too.",
    ],
    places: ["Northend", "St Catherine", "Bathford", "Bathampton", "Bailbrook"],
    route: "From Trowbridge we take the A363 through Bradford-on-Avon to Bathford — Batheaston is the first part of Bath we reach.",
    featured: [
      { slug: "brickwork", note: "Retaining walls for parking bays and terraces cut into the hillside." },
      { slug: "site-preparation", note: "Excavation with small plant where lanes and gateways are narrow." },
      { slug: "block-paving", note: "Stone-toned blocks suited to steep drives and a conservation setting." },
      { slug: "drainage-work", note: "Channels and soakaways for drives that fall towards the house or the lane." },
    ],
  },
  {
    slug: "corsham-sn13",
    name: "Corsham SN13",
    town: "Corsham",
    authority: "Wiltshire Council",
    intro:
      "Corsham sits on the A4 between Bath and Chippenham, and is the town Bath stone came out of — it was quarried from the ground beneath it.",
    local: [
      "The High Street is one of the best-preserved in Wiltshire, lined with stone houses and weavers' cottages, and the centre is a conservation area. Around it are stone-built villages — Box, Neston, Gastard and Rudloe — and a good deal of post-war and newer housing, much of it built for the military sites in the area.",
      "So the work divides in two. In the old centre and the villages we're matching local stone: walling, natural stone paving and resin or block in warm buff tones. On the estates it's practical improvement — replacing worn drives, widening for another car, patios and fencing. Box, on the hillside towards Bath, brings the sloping plots and retaining work you'd expect.",
    ],
    places: ["Box", "Neston", "Gastard", "Rudloe", "Pickwick", "Westwells"],
    route: "We reach Corsham from Trowbridge by heading north through Melksham.",
    featured: [
      { slug: "brickwork", note: "Stone and block walling in a town built from its own quarries." },
      { slug: "patios", note: "Natural stone paving that matches the local buildings." },
      { slug: "driveway-installation", note: "Widened and renewed drives on Corsham's estates." },
      { slug: "resin-driveways", note: "Warm-toned blends that sit comfortably against Bath stone." },
    ],
  },
  {
    slug: "chippenham-sn14",
    name: "Chippenham SN14",
    town: "Chippenham",
    authority: "Wiltshire Council",
    intro:
      "SN14 is the western side of Chippenham — Cepen Park, Frogwell and Hardenhuish — and the villages out towards the Cotswold edge, including Castle Combe.",
    local: [
      "West Chippenham is largely late twentieth-century estate housing: Cepen Park North and South in particular are streets of detached and semi-detached homes with a garage and a single-width drive. The obvious improvement is turning part of the front garden into extra parking, which usually means new block paving or resin, drainage to keep the water on your side of the boundary, and sometimes a wider dropped kerb.",
      "Head west and it changes completely. Yatton Keynell, Biddestone, Castle Combe, Colerne and Marshfield are Cotswold stone villages, many within the Cotswolds National Landscape, where the brief is natural materials, dry-stone-style walling and surfaces that don't look out of place beside a limestone cottage.",
    ],
    places: ["Cepen Park", "Frogwell", "Hardenhuish", "Yatton Keynell", "Biddestone", "Castle Combe", "Colerne", "Kington St Michael"],
    route: "Chippenham is straight up the A350 from Trowbridge, and SN14 is the side of town we reach first.",
    featured: [
      { slug: "block-paving", note: "Front-garden parking for the Cepen Park estates." },
      { slug: "dropped-kerbs", note: "Wider crossovers to go with a wider drive, to Wiltshire Council's specification." },
      { slug: "resin-driveways", note: "Cotswold-toned blends for the stone villages to the west." },
      { slug: "landscaping", note: "Garden schemes in natural materials for village properties." },
    ],
  },
  {
    slug: "chippenham-sn15",
    name: "Chippenham SN15",
    town: "Chippenham",
    authority: "Wiltshire Council",
    intro:
      "SN15 covers Chippenham's town centre and its eastern and southern side — Monkton Park, Pewsham and the streets around the station — plus villages from Lacock up to Sutton Benger.",
    local: [
      "This is the older half of the town. Close to the centre and the railway are Victorian terraces and villas, many with small front gardens and original boundary walls; Monkton Park and Pewsham are later estates with more conventional drives. On the older streets the work is as likely to be repairing or rebuilding walls and relaying paths as building drives, and space for skips and materials has to be planned.",
      "The Avon runs through this side of town, and low-lying plots near it need careful drainage. Outside Chippenham, SN15 takes in Lacock — a National Trust village where almost nothing can be changed without consent — along with Bremhill, Christian Malford, Sutton Benger and Lyneham.",
    ],
    places: ["Monkton Park", "Pewsham", "Lacock", "Bremhill", "Christian Malford", "Sutton Benger", "Lyneham"],
    route: "We take the A350 north from Trowbridge and come into this side of Chippenham past Lacock.",
    featured: [
      { slug: "brickwork", note: "Rebuilding and matching the front walls of Chippenham's Victorian streets." },
      { slug: "driveway-repairs", note: "Sunken and broken sections put right on older drives." },
      { slug: "drainage-work", note: "For low-lying plots near the river." },
      { slug: "patios", note: "Making the most of long, narrow terrace gardens." },
    ],
  },
  {
    slug: "calne-sn11",
    name: "Calne SN11",
    town: "Calne",
    authority: "Wiltshire Council",
    intro:
      "Calne is on the A4 east of Chippenham, where the clay vale starts to rise towards the Marlborough Downs and the Cherhill White Horse.",
    local: [
      "The town has an old stone centre around the church and The Green, but most of its homes are newer: Calne has grown a great deal, with large estates on its northern and eastern edges. That means plenty of young gardens and builder-finish driveways, where the useful jobs are widening the drive, a proper patio, better fencing and replacing a waterlogged lawn.",
      "East of the town the land climbs onto chalk at Cherhill and Compton Bassett, inside the North Wessex Downs National Landscape, while Derry Hill and Studley to the west sit on the edge of the Bowood estate. Village jobs here tend towards longer drives and bigger gardens, with materials chosen to suit a rural setting.",
    ],
    places: ["Derry Hill", "Studley", "Cherhill", "Compton Bassett", "Quemerford", "Hilmarton", "Heddington"],
    route: "We get to Calne from Trowbridge via Melksham and the A3102.",
    featured: [
      { slug: "driveway-installation", note: "Extending builder-finish drives on Calne's newer estates." },
      { slug: "patios", note: "A first proper patio for a new-build garden." },
      { slug: "artificial-grass", note: "An answer to new lawns laid on compacted clay." },
      { slug: "tarmac", note: "For the longer drives in the villages around the town." },
    ],
  },
  {
    slug: "malmesbury-sn16",
    name: "Malmesbury SN16",
    town: "Malmesbury",
    authority: "Wiltshire Council",
    intro:
      "Malmesbury is the northern edge of our patch: a hilltop town wrapped by two branches of the Avon, on the fringe of the Cotswolds.",
    local: [
      "The old town is compact and steep-sided, built in Cotswold limestone around the abbey, with narrow streets and little room for vehicles. Access and material handling need planning, and nearly everything in the centre falls within the conservation area. Newer housing has been built around the edges of the town, where sites are far more open.",
      "This is Cotswold stone country, and it sets the tone for materials: buff and cream paving, gravel-toned resin, and stone walling rather than red brick. The surrounding villages — Sherston, Crudwell, Charlton, Lea and Great Somerford — have many period houses and converted farm buildings with long drives and courtyards.",
    ],
    places: ["Sherston", "Crudwell", "Charlton", "Lea", "Great Somerford", "Corston", "Milbourne"],
    route: "Malmesbury is up the A350 to Chippenham and on past the M4 on the A429.",
    featured: [
      { slug: "resin-driveways", note: "Cotswold-gravel colours without the loose stone." },
      { slug: "brickwork", note: "Walling and steps to sit alongside Cotswold limestone." },
      { slug: "road-construction", note: "Courtyards, farm accesses and shared drives in the villages." },
      { slug: "patios", note: "Cream and buff natural stone terraces." },
    ],
  },
  {
    slug: "swindon-sn3",
    name: "Swindon SN3",
    town: "Swindon",
    authority: "Swindon Borough Council",
    intro:
      "SN3 is the eastern side of Swindon — Walcot, Park North and Park South, Covingham, Nythe, Eldene and Liden — along with Stratton St Margaret and the Lawn and Broome Manor side of Old Town.",
    local: [
      "East Swindon was built largely as planned estates in the decades after the war. The houses are solid and the plots are reasonable, but many were laid out when a household had one car or none, so front gardens are steadily being converted to parking. That's the typical SN3 job: a new drive across the front, drained within the boundary, and a dropped kerb to reach it.",
      "Swindon is a separate highway authority, so crossover applications go to Swindon Borough Council, not Wiltshire. Many original drives and paths here are concrete that has cracked and settled over the decades, and replacing them is the other obvious job.",
    ],
    places: ["Walcot", "Park North", "Park South", "Covingham", "Nythe", "Eldene", "Liden", "Stratton St Margaret", "Lawn"],
    route: "We reach east Swindon from Trowbridge by the A350 and the M4.",
    featured: [
      { slug: "dropped-kerbs", note: "Crossovers to Swindon Borough Council's requirements for new front-garden parking." },
      { slug: "block-paving", note: "The usual choice for a full-width front drive on the east Swindon estates." },
      { slug: "driveway-replacement", note: "Breaking out and replacing tired original concrete." },
      { slug: "drainage-work", note: "Keeping a newly paved front garden's rainwater off the pavement." },
    ],
  },
  {
    slug: "swindon-sn2-1dz",
    name: "Swindon SN2 1DZ",
    town: "Swindon",
    authority: "Swindon Borough Council",
    intro:
      "SN2 is north Swindon's older ground: Gorse Hill, Pinehurst, Rodbourne, Moredon, Penhill and Upper Stratton, on the far side of the railway from the town centre.",
    local: [
      "The housing here is older and denser than east Swindon. Gorse Hill and Rodbourne are streets of red-brick terraces built for the railway works, mostly with no front drive at all and rear access by back lane — so the work is back-garden paving, small patios, garden walls and hardstandings off the lane. Access is usually through the house or down a narrow alley, which we plan for.",
      "Pinehurst, Penhill and Moredon are inter-war and post-war estates with front gardens deep enough to park on, and there the job is usually a new driveway with a dropped kerb, applied for through Swindon Borough Council. Red brick is the local material, so brick-toned block paving and matching walls tend to look most at home.",
    ],
    places: ["Gorse Hill", "Pinehurst", "Rodbourne", "Moredon", "Penhill", "Upper Stratton", "Cheney Manor"],
    route: "North Swindon is the far corner of our area from Trowbridge, reached by the A350 and M4.",
    featured: [
      { slug: "patios", note: "Compact back-garden patios for terraced houses." },
      { slug: "brickwork", note: "Red-brick garden walls rebuilt and matched." },
      { slug: "concrete-work", note: "Hardstandings and bases off the back lanes." },
      { slug: "block-paving", note: "Front-garden drives on the Pinehurst, Penhill and Moredon estates." },
    ],
  },
  {
    slug: "radstock-ba3",
    name: "Radstock BA3",
    town: "Radstock",
    authority: "Bath & North East Somerset Council",
    intro:
      "Radstock, with Midsomer Norton next door, is the heart of the old Somerset coalfield — steep-sided valleys lined with miners' terraces in pale local stone.",
    local: [
      "The terraces climb the valley sides in long rows, often with a front garden well above or below the road and the only vehicle access from a lane at the back. Creating parking here usually means excavation and a retaining wall, and getting drainage right on the slope. Midsomer Norton and Westfield have more recent estates on flatter ground where drives and patios are simpler.",
      "BA3 is split between two councils. Radstock, Midsomer Norton and Westfield come under Bath & North East Somerset, while villages to the south such as Chilcompton, Stratton-on-the-Fosse, Holcombe and Coleford are in Somerset — which matters when a dropped kerb application is needed. We'll confirm which authority covers your address.",
    ],
    places: ["Midsomer Norton", "Westfield", "Writhlington", "Kilmersdon", "Chilcompton", "Stratton-on-the-Fosse", "Holcombe", "Coleford"],
    route: "We head west from Trowbridge through Norton St Philip to reach Radstock.",
    featured: [
      { slug: "site-preparation", note: "Excavating parking space out of a sloping terrace plot." },
      { slug: "brickwork", note: "The retaining walls that make that parking possible." },
      { slug: "drainage-work", note: "Essential on valley-side plots." },
      { slug: "tarmac", note: "A cost-effective surface for rear hardstandings and shared back lanes." },
    ],
  },
  {
    slug: "shepton-mallet-ba4",
    name: "Shepton Mallet BA4",
    town: "Shepton Mallet",
    authority: "Somerset Council",
    intro:
      "Shepton Mallet lies in a valley on the southern flank of the Mendips, on the A361 beyond Frome — the south-western end of the area we cover.",
    local: [
      "The town is built of grey-gold local limestone; Doulting stone, quarried just to the east, has been used here for centuries. The centre is tightly packed along the valley of the River Sheppey with steep lanes on either side, while newer housing sits on higher, more level ground around the edge.",
      "BA4 is mostly rural beyond the town: Doulting, Cranmore, Pilton and Evercreech, with farms, barn conversions and houses reached by long private drives. Typical work out here is resurfacing farm and yard accesses and shared lanes, and replacing loose gravel drives with something that stays put. Dropped kerbs here are handled by Somerset Council.",
    ],
    places: ["Doulting", "Cranmore", "Pilton", "Evercreech", "Prestleigh", "Downside"],
    route: "We follow the A361 from Trowbridge through Frome to Shepton Mallet.",
    featured: [
      { slug: "road-construction", note: "Farm tracks, yards and private lanes around the Mendip villages." },
      { slug: "tarmac", note: "For long rural drives where gravel keeps migrating." },
      { slug: "patios", note: "Limestone paving that suits the local stone." },
      { slug: "concrete-work", note: "Yard slabs and bases for outbuildings." },
    ],
  },
  {
    slug: "wells-ba5",
    name: "Wells BA5",
    town: "Wells",
    authority: "Somerset Council",
    intro:
      "Wells is England's smallest city, tucked under the Mendip Hills beyond Shepton Mallet, and the furthest west we cover.",
    local: [
      "The medieval centre around the cathedral, the Bishop's Palace and Vicars' Close is as protected as anywhere in the country, and the conservation area extends well beyond it. For properties in or near it we expect to work with natural stone and traditional details, and to check listed-building and conservation requirements before pricing a design.",
      "Most homes in Wells, though, are in the residential streets and estates that spread south and west of the centre onto flatter ground, where the work is the familiar kind: replacement driveways, patios, fencing. To the north the land rises sharply onto the Mendips, and villages like Wookey Hole, Westbury-sub-Mendip and Dinder have sloping plots and stone boundary walls. Wells is in Somerset, so highway matters go to Somerset Council.",
    ],
    places: ["Wookey", "Wookey Hole", "Coxley", "Dinder", "Westbury-sub-Mendip", "Croscombe"],
    route: "Wells is at the end of our run down the A361 and A371, through Frome and Shepton Mallet.",
    featured: [
      { slug: "patios", note: "Natural stone paving in keeping with the city's limestone buildings." },
      { slug: "brickwork", note: "Stone and block boundary walls repaired and rebuilt." },
      { slug: "driveway-replacement", note: "Renewing worn drives on the city's residential estates." },
      { slug: "resin-driveways", note: "A permeable, low-maintenance surface in stone-toned blends." },
    ],
  },
];

export function getArea(slug: string) {
  return AREA_PAGES.find((a) => a.slug === slug);
}

export function areaFaqs(area: Area) {
  return [
    {
      q: `Do you charge extra to come to ${area.name}?`,
      a: `The survey and written quote are free in ${area.town}, as they are everywhere we cover. ${area.route} Your quote is a fixed price for the whole job, so everything it costs to build at your address is in that one figure.`,
    },
    {
      q: `How soon can you get to ${area.name}?`,
      a: `That depends on what we already have booked, so the honest answer is to call ${BUSINESS.phone} or send the quote form and we'll offer you the next survey slot in ${area.town}. Once you've accepted a quote, we agree a start date with you and put it in writing.`,
    },
  ];
}
