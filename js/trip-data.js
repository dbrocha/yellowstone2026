/* ============================================================
   YELLOWSTONE 2026 — all trip content lives here.
   Edit this file to change anything on the site.
   ============================================================ */

const TRIP = {
  meta: {
    title: "Yellowstone 2026",
    dates: "June 20 – 28, 2026",
    crew: "8 adults · 4 kids · 1 baby",
    flights: [
      { date: "Sat Jun 20", what: "Fly in → Bozeman (BZN)", detail: "Landing morning / early afternoon. Grab cars, brewery lunch, grocery run, then south through Paradise Valley." },
      { date: "Sun Jun 28", what: "Fly out ← Jackson Hole (JAC)", detail: "Early-afternoon departures. Leave the lodge by ~10:30am — JAC is small but summer security lines are real." }
    ],
    dinners: [
      { date: "Tue Jun 23 · 7:30 PM", where: "Grant Village Restaurant", note: "Lakeside dining room. Casual." },
      { date: "Wed Jun 24 · 4:45 PM", where: "Lake Yellowstone Hotel Dining Room", note: "The fancy one — 1891 colonial hotel, string quartet in the sunroom. Collared-shirt-ish." },
      { date: "Sat Jun 27 · 5:15 PM", where: "The Mural Room, Jackson Lake Lodge", note: "3 tables of 4 · sunset on the Tetons through 60-ft windows." }
    ]
  },

  /* ---------- MAP PINS ----------
     cat: hotel | geyser | wildlife | hike | scenic | food | brewery | town | airport */
  locations: [
    { id: "bzn", name: "Bozeman Airport (BZN)", coords: [45.7772, -111.1530], cat: "airport",
      caption: "Wheels down. The adventure starts here.", photo: null, emoji: "🛬" },
    { id: "bozeman", name: "Bozeman, MT", coords: [45.6770, -111.0429], cat: "town",
      caption: "Brewery lunch + the big grocery run.", photo: null, emoji: "🛒",
      note: "Stock up here — groceries in the park are 2x the price and 1/10th the selection." },
    { id: "mapBrewing", name: "MAP Brewing Co.", coords: [45.7104, -111.0347], cat: "brewery",
      caption: "Patio with a pond + mountain view. First beers of the trip.", photo: null, emoji: "🍺" },
    { id: "rooseveltArch", name: "Roosevelt Arch", coords: [45.0299, -110.7058], cat: "scenic",
      caption: "“For the Benefit and Enjoyment of the People” — est. 1903. Mandatory group photo.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/The_Roosevelt_Arch.jpg/330px-The_Roosevelt_Arch.jpg" },
    { id: "mammothHotel", name: "Mammoth Hot Springs Hotel", coords: [44.9772, -110.7022], cat: "hotel",
      caption: "Home base #1 · nights of Jun 20–22. Elk literally hang out on the lawn.", photo: null, emoji: "🏨" },
    { id: "mammothTerraces", name: "Mammoth Terraces", coords: [44.9690, -110.7060], cat: "geyser",
      caption: "Travertine wedding-cake terraces. Boardwalks + Upper Terrace Drive.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Dead_trees_at_Mammoth_Hot_Springs.jpg/330px-Dead_trees_at_Mammoth_Hot_Springs.jpg" },
    { id: "wraithFalls", name: "Wraith Falls", coords: [44.9395, -110.6225], cat: "hike",
      caption: "1 mile round trip, mostly boardwalk. Perfect toddler-legs hike.", photo: null, emoji: "🥾" },
    { id: "bunsenPeak", name: "Bunsen Peak", coords: [44.9305, -110.7330], cat: "hike",
      caption: "4.6 mi RT · 1,300 ft up. Big 360° payoff over Mammoth.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/BunsenPeakMammothYNP12-2009.jpg/330px-BunsenPeakMammothYNP12-2009.jpg" },
    { id: "towerFall", name: "Tower Fall", coords: [44.8921, -110.3872], cat: "scenic",
      caption: "132-ft falls + a general store with ice cream. Easy overlook.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Base_of_Tower_Fall_with_rainbow.JPG/330px-Base_of_Tower_Fall_with_rainbow.JPG" },
    { id: "sloughCreek", name: "Slough Creek", coords: [44.9280, -110.3060], cat: "wildlife",
      caption: "Wolf-watcher HQ. Spotting scopes line the road at dawn.", photo: null, emoji: "🐺" },
    { id: "lamar", name: "Lamar Valley", coords: [44.8980, -110.2240], cat: "wildlife", star: true,
      caption: "The Serengeti of North America. Bison herds, wolves, pronghorn, grizzlies. Dan's sacred ground. ✨",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/LamarRiver1998.jpg/330px-LamarRiver1998.jpg" },
    { id: "troutLake", name: "Trout Lake", coords: [44.8995, -110.1195], cat: "hike",
      caption: "1.2 mi RT, short + steep start. Otters in the lake if you're lucky.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/20190620_084747_HDR-EFFECTS.jpg/330px-20190620_084747_HDR-EFFECTS.jpg" },
    { id: "washburn", name: "Mt. Washburn", coords: [44.7857, -110.4406], cat: "hike",
      caption: "6.2 mi RT · 1,400 ft from Dunraven Pass. Bighorn sheep + fire lookout at 10,243 ft.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/YELLOWSTONE-2014_98.jpg/330px-YELLOWSTONE-2014_98.jpg" },
    { id: "artistPoint", name: "Artist Point", coords: [44.7204, -110.4795], cat: "scenic",
      caption: "THE view of the Grand Canyon of the Yellowstone. Paved + stroller-friendly.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/ViewFromArtistPointYNP.jpg/330px-ViewFromArtistPointYNP.jpg" },
    { id: "brinkLower", name: "Brink of the Lower Falls", coords: [44.7178, -110.4960], cat: "hike",
      caption: "0.7 mi of steep switchbacks down to the lip of a 308-ft waterfall. Worth every step back up.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Grand_Canyon_of_the_Yellowstone_1_%288044058776%29.jpg/330px-Grand_Canyon_of_the_Yellowstone_1_%288044058776%29.jpg" },
    { id: "norris", name: "Norris Geyser Basin", coords: [44.7260, -110.7030], cat: "geyser",
      caption: "Hottest, oldest basin in the park. Home of Steamboat — world's tallest active geyser.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Steamboat_Geyser_at_Norris_Geyser_Basin_in_Yellowstone-750px.JPG/330px-Steamboat_Geyser_at_Norris_Geyser_Basin_in_Yellowstone-750px.JPG" },
    { id: "paintpots", name: "Artists Paintpots", coords: [44.6953, -110.7391], cat: "geyser",
      caption: "1 mi loop of bubbling pastel mud. Kids lose their minds (good way).", photo: null, emoji: "🎨" },
    { id: "gibbonFalls", name: "Gibbon Falls", coords: [44.6535, -110.7710], cat: "scenic",
      caption: "84-ft falls, basically drive-up. Stretch-the-legs stop.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Gibbon_Falls.jpg/330px-Gibbon_Falls.jpg" },
    { id: "midway", name: "Grand Prismatic Spring", coords: [44.5250, -110.8380], cat: "geyser",
      caption: "The rainbow one. Midway boardwalk is 0.8 mi + stroller-OK.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Aerial_image_of_Grand_Prismatic_Spring_%28view_from_the_south%29.jpg/330px-Aerial_image_of_Grand_Prismatic_Spring_%28view_from_the_south%29.jpg" },
    { id: "fairyFalls", name: "Fairy Falls + Prismatic Overlook", coords: [44.5153, -110.8326], cat: "hike",
      caption: "Overlook: 1.2 mi RT — THE Prismatic photo. Fairy Falls: 5.4 mi RT, flat, 200-ft falls.", photo: null, emoji: "🏞️" },
    { id: "oldFaithful", name: "Old Faithful", coords: [44.4605, -110.8281], cat: "geyser",
      caption: "Erupts every ~90 min. Check predictions at the visitor center, grab a bench 10 min early.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Yellowstone_National_Park_%28WY%2C_USA%29%2C_Old_Faithful_Geyser_--_2022_--_2599.jpg/330px-Yellowstone_National_Park_%28WY%2C_USA%29%2C_Old_Faithful_Geyser_--_2022_--_2599.jpg" },
    { id: "ofInn", name: "Old Faithful Inn", coords: [44.4597, -110.8320], cat: "scenic",
      caption: "1904 log-palace lobby, 76 ft tall. Huckleberry ice cream downstairs.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Old_Faithful_Inn_main_facade.jpg/330px-Old_Faithful_Inn_main_facade.jpg" },
    { id: "hayden", name: "Hayden Valley", coords: [44.6440, -110.4570], cat: "wildlife",
      caption: "Dusk wildlife drive — bison jams, grizzly chances. Binoculars out.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/HaydenValley1977JSchmidt.jpg/330px-HaydenValley1977JSchmidt.jpg" },
    { id: "lakeHotel", name: "Lake Yellowstone Hotel", coords: [44.5546, -110.3997], cat: "food",
      caption: "Dinner Jun 24, 4:45pm. Oldest hotel in the park (1891) — big yellow & beautiful.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Lake_Yellowstone_Hotel_portico.JPG/330px-Lake_Yellowstone_Hotel_portico.JPG" },
    { id: "stormPoint", name: "Storm Point", coords: [44.5605, -110.3280], cat: "hike",
      caption: "2.3 mi easy loop to a windy point on Yellowstone Lake. Marmot city.", photo: null, emoji: "🌊" },
    { id: "westThumb", name: "West Thumb Geyser Basin", coords: [44.4163, -110.5732], cat: "geyser",
      caption: "Hot springs spilling right into the lake. 0.6 mi boardwalk, 2 min from Grant.", photo: null, emoji: "♨️" },
    { id: "grant", name: "Grant Village", coords: [44.3930, -110.5580], cat: "hotel",
      caption: "Home base #2 · nights of Jun 23–24. On the West Thumb of Yellowstone Lake.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grant_Village_lodging_YNP1.jpg/330px-Grant_Village_lodging_YNP1.jpg" },
    { id: "lewisFalls", name: "Lewis Falls", coords: [44.2782, -110.6318], cat: "scenic",
      caption: "Quick roadside falls on the drive south. 30-second photo op.", photo: null, emoji: "📸" },
    { id: "jll", name: "Jackson Lake Lodge", coords: [43.8800, -110.5740], cat: "hotel",
      caption: "Home base #3 · nights of Jun 25–27. 60-ft windows aimed straight at the Tetons.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Main_Lodge_and_Terrace%2C_Jackson_Lake_Lodge%2C_WY.jpg/330px-Main_Lodge_and_Terrace%2C_Jackson_Lake_Lodge%2C_WY.jpg" },
    { id: "colterBay", name: "Colter Bay", coords: [43.9040, -110.6440], cat: "scenic",
      caption: "Beach day HQ — kids swim Jackson Lake, lakeshore loop is stroller-able.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Colter_bay_boats_20100822_080110_1.jpg/330px-Colter_bay_boats_20100822_080110_1.jpg" },
    { id: "oxbow", name: "Oxbow Bend", coords: [43.8647, -110.5486], cat: "scenic",
      caption: "Mt. Moran mirrored in the Snake River. Best at dawn + dusk. Moose + eagles.", photo: null, emoji: "🌄" },
    { id: "signalMtn", name: "Signal Mountain Summit", coords: [43.8420, -110.5870], cat: "scenic",
      caption: "Drive-up summit — the whole valley at your feet. Great lazy sunset.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Snake_River_Signal_Mountain.jpg/330px-Snake_River_Signal_Mountain.jpg" },
    { id: "jennyLake", name: "Jenny Lake", coords: [43.7510, -110.7220], cat: "scenic",
      caption: "The crown jewel. Boat shuttle across runs all day — kids love it.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Aerial_image_of_Jenny_Lake_%28view_from_the_east%29.jpg/330px-Aerial_image_of_Jenny_Lake_%28view_from_the_east%29.jpg" },
    { id: "hiddenFalls", name: "Hidden Falls + Inspiration Point", coords: [43.7475, -110.7458], cat: "hike",
      caption: "From the boat dock: 0.5 mi to the falls, 1 mi up to Inspiration Point. Kid-doable.", photo: null, emoji: "💦" },
    { id: "cascade", name: "Cascade Canyon", coords: [43.7560, -110.7850], cat: "hike",
      caption: "THE Teton big hike — up to 9–10 mi RT between granite walls. Moose central.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Cascade_Canyon_from_Jackson_Hole.jpg/330px-Cascade_Canyon_from_Jackson_Hole.jpg" },
    { id: "stringLake", name: "String Lake", coords: [43.7846, -110.7273], cat: "scenic",
      caption: "Shallow, (relatively) warm, sandy edges, Teton backdrop. Baby + kid heaven.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Mount_Moran_Reflected_in_String_Lake_-_Grand_Teton_National_Park.jpg/330px-Mount_Moran_Reflected_in_String_Lake_-_Grand_Teton_National_Park.jpg" },
    { id: "taggart", name: "Taggart Lake", coords: [43.6932, -110.7327], cat: "hike",
      caption: "3.8 mi RT, gentle. The family big-ish hike with a swimmable lake at the end.", photo: null, emoji: "⛰️" },
    { id: "schwabacher", name: "Schwabacher Landing", coords: [43.7130, -110.6700], cat: "scenic",
      caption: "Beaver-pond reflections of the whole range. Sunrise photographer magnet.", photo: null, emoji: "🌅" },
    { id: "mormonRow", name: "Mormon Row", coords: [43.6593, -110.6647], cat: "scenic",
      caption: "The Moulton barns — most photographed barns on Earth, Tetons looming behind.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Barns_grand_tetons.jpg/330px-Barns_grand_tetons.jpg" },
    { id: "dornans", name: "Dornan's (Moose)", coords: [43.6557, -110.7100], cat: "food",
      caption: "Pizza + pasta on a deck staring at the Grand. Legendary wine shop. Trading-post grocery.", photo: null, emoji: "🍕" },
    { id: "jacksonTown", name: "Jackson Town Square", coords: [43.4799, -110.7624], cat: "town",
      caption: "Antler arches, boardwalk shops, huckleberry everything.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Downtown_Jackson_Wyoming_USA.JPG/330px-Downtown_Jackson_Wyoming_USA.JPG" },
    { id: "snakeRiverBrew", name: "Snake River Brewing", coords: [43.4744, -110.7691], cat: "brewery",
      caption: "Wyoming's oldest brewery. Beer garden + wood-fired pizza. Very kid-tolerant.", photo: null, emoji: "🍺" },
    { id: "roadhouse", name: "Roadhouse Pub & Eatery", coords: [43.4806, -110.7611], cat: "brewery",
      caption: "20+ taps just off the Town Square. Founded by a chef — the food keeps up.", photo: null, emoji: "🍺" },
    { id: "stillwest", name: "StillWest Brewery & Grill", coords: [43.4677, -110.7561], cat: "brewery",
      caption: "At the base of Snow King. Upscale-ish grill, killer patio.", photo: null, emoji: "🍺" },
    { id: "jac", name: "Jackson Hole Airport (JAC)", coords: [43.6073, -110.7377], cat: "airport",
      caption: "The only commercial airport inside a national park. Fly out with a view.", photo: null, emoji: "🛫" },

    /* --- alternates: medium hikes + bonus sights --- */
    { id: "yellowstoneRiverTrail", name: "Yellowstone River Picnic Trail", coords: [44.9128, -110.3960], cat: "hike",
      caption: "3.7 mi RT along the canyon narrows rim near Tower — Calcite Springs below, bighorn sheep on the cliffs, almost nobody on it.", photo: null, emoji: "🐏" },
    { id: "hellroaring", name: "Hellroaring Creek", coords: [44.9460, -110.4540], cat: "hike",
      caption: "4 mi RT down to a suspension bridge over the Yellowstone. The climb back out earns the name.", photo: null, emoji: "🌉" },
    { id: "undineFalls", name: "Undine Falls", coords: [44.9447, -110.6440], cat: "scenic",
      caption: "60-ft triple-tier falls, basically roadside. Pairs with Wraith Falls next door.", photo: null, emoji: "💧" },
    { id: "mudVolcano", name: "Mud Volcano & Dragon's Mouth", coords: [44.6245, -110.4335], cat: "geyser",
      caption: "0.7 mi boardwalk of burping mud. Dragon's Mouth Spring growls from its cave. Kids: obsessed.", photo: null, emoji: "🌋" },
    { id: "loneStar", name: "Lone Star Geyser", coords: [44.4400, -110.8030], cat: "hike",
      caption: "4.8 mi RT on a flat old service road to a 12-ft cone that erupts every ~3 hours. Time it right and it's a private show.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Lone_Star_Geyser_2016.jpg/330px-Lone_Star_Geyser_2016.jpg" },
    { id: "elephantBack", name: "Elephant Back Mountain", coords: [44.5587, -110.4140], cat: "hike",
      caption: "3.6 mi loop · 800 ft. Summit panorama of Yellowstone Lake, ending steps from the Lake Hotel porch.", photo: null, emoji: "🐘" },
    { id: "delacy", name: "Shoshone Lake (DeLacy Creek)", coords: [44.4920, -110.7180], cat: "hike",
      caption: "3 flat-ish miles of creek meadow each way to the biggest backcountry lake in the lower 48. Moose country.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/ShoshoneLake1989.jpg/330px-ShoshoneLake1989.jpg" },
    { id: "leighLake", name: "Leigh Lake", coords: [43.7990, -110.7310], cat: "scenic",
      caption: "Flat shoreline miles and sandy coves staring straight up Mount Moran. The quiet sibling of String Lake.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leigh_Lake_Grand_Teton_National_Park.jpg/330px-Leigh_Lake_Grand_Teton_National_Park.jpg" },
    { id: "phelpsLake", name: "Phelps Lake · LSR Preserve", coords: [43.6294, -110.7755], cat: "hike",
      caption: "The Rockefellers' old retreat — quiet woods, a green-blue lake, a famous jumping rock. Lot fills by 9am.", photo: null, emoji: "🍃" },
    { id: "grandViewPoint", name: "Grand View Point", coords: [43.9009, -110.5350], cat: "hike",
      caption: "2.2 mi RT · 550 ft, ten minutes from the lodge — the whole range stacked behind Jackson Lake.", photo: null, emoji: "🔭" },
    { id: "jhTram", name: "Aerial Tram · Teton Village", coords: [43.5875, -110.8279], cat: "scenic",
      caption: "Big Red: 12 minutes to 10,450 ft. Waffles at Corbet's Cabin on top. Zero effort, full summit.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Jackson_hole_new_tram.jpg/330px-Jackson_hole_new_tram.jpg" },
    { id: "snakeRiverOverlook", name: "Snake River Overlook", coords: [43.7330, -110.6430], cat: "scenic",
      caption: "The Ansel Adams 1942 shot. The trees have grown but the Tetons haven't moved.", photo: null, emoji: "📷" },
    { id: "surpriseAmphitheater", name: "Surprise & Amphitheater Lakes", coords: [43.7345, -110.7410], cat: "hike",
      caption: "9.6 mi RT · ~3,000 ft of switchbacks to two alpine cirque lakes under the Grand. The earn-it option.",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Amphitheater_Lake.jpg/330px-Amphitheater_Lake.jpg" }
  ],

  /* ---------- DAY-BY-DAY ---------- */
  days: [
    {
      num: 1, date: "Sat · Jun 20", title: "Wheels Down & Westward",
      base: "Mammoth Hot Springs Hotel", baseId: "mammoth",
      drive: "BZN → Mammoth · ~85 mi · 1h 50m through Paradise Valley",
      blurb: "Land in Bozeman, eat, stock up, then one of the prettiest drives in Montana down US-89 to the park's original front door.",
      stops: ["bzn", "mapBrewing", "bozeman", "rooseveltArch", "mammothHotel"],
      options: [
        { tier: "brewery", icon: "🍺", title: "Brewery lunch in Bozeman", body: "MAP Brewing (pond + mountain patio), Bridger Brewing (pizza, near MSU), Mountains Walking (hazies + great kitchen), or Bozeman Brewing taproom. Pick one, fuel up." },
        { tier: "musthave", icon: "🛒", title: "The Big Grocery Run", body: "Costco / Albertsons / Town & Country in Bozeman. Coolers, snacks, baby supplies, road beers (for camp), breakfast stuff. Park stores are pricey and thin — this stop is load-bearing." },
        { tier: "mustsee", icon: "📸", title: "Roosevelt Arch, Gardiner", body: "Group photo under the 1903 arch — “For the Benefit and Enjoyment of the People.” Then 5 min up the hill to Mammoth." },
        { tier: "easy", icon: "🦌", title: "Evening: elk on the lawn", body: "Elk graze the Mammoth parade ground most evenings. Easy stroll around Upper Terrace Drive before dinner. Stay 25 yds back — they're spicy in June." }
      ],
      rendezvous: "Check-in at Mammoth, dinner together at the hotel dining room or Gardiner.",
      fuel: "Mammoth: hotel Dining Room (reserve-ish), Terrace Grill (counter service), Mammoth General Store. Gardiner (5 min): Yellowstone Pizza Co., Wonderland Cafe, Gardiner Market (groceries), gas."
    },
    {
      num: 2, date: "Sun · Jun 21", title: "Lamar Valley Magic", special: "✨ Dan's holy ground — do not skip",
      base: "Mammoth Hot Springs Hotel", baseId: "mammoth",
      drive: "Mammoth → Lamar · ~28 mi · 50 min each way",
      blurb: "The Serengeti of North America. Dawn is when the valley performs: wolves, bison herds with red dogs (June calves!), pronghorn, maybe a grizzly. This is the day the alarm clocks earn their keep.",
      stops: ["mammothHotel", "towerFall", "sloughCreek", "lamar", "troutLake"],
      options: [
        { tier: "mustsee", icon: "🐺", title: "Dawn patrol (leave ~5:30am)", body: "Coffee in thermoses, kids in blankets, drive to Lamar in the half-light. Park at Slough Creek with the wolf-watchers — they'll usually share scopes. Bison jams guaranteed." },
        { tier: "hike", icon: "🦦", title: "Trout Lake", body: "1.2 mi RT, one steep-ish climb, then a perfect lake with otters and cutthroat trout. The best effort-to-magic ratio in the park." },
        { tier: "easy", icon: "👶", title: "Pullout safari (baby-approved)", body: "The entire Lamar road is pullout after pullout. Wildlife watching from camp chairs while the baby naps in the car seat. Binoculars mandatory." },
        { tier: "medium", icon: "🐏", title: "Yellowstone River Picnic Trail", body: "3.7 mi RT along the rim of the canyon narrows near Tower — Calcite Springs steaming below, bighorn sheep on the cliffs, a tenth of the crowds. Wilder cousin next door: Hellroaring (4 mi RT) drops to a suspension bridge over the river — the climb back out is real." },
        { tier: "easy", icon: "🍦", title: "Tower Fall + ice cream", body: "132-ft waterfall, 5-minute overlook walk, general store ice cream. Hits on the drive back. Undine Falls + Wraith Falls (1 mi) are bonus stops near Mammoth, and the Petrified Tree is a 2-minute detour." },
        { tier: "hike", icon: "⛰️", title: "Sleepers-in: Bunsen Peak", body: "For anyone who refuses the 5:30 alarm — 4.6 mi RT / 1,300 ft right out of Mammoth, 360° summit views. Mellower: Beaver Ponds Loop (5 mi) straight from the hotel, or the Terraces boardwalk slow." }
      ],
      rendezvous: "Late lunch back at Mammoth or picnic at Slough Creek. Compare wildlife tallies — winner picks dinner.",
      fuel: "Pack a cooler picnic — there is NOTHING to buy in Lamar (that's the point). Tower Fall General Store for ice cream + snacks. Dinner back at Mammoth/Gardiner."
    },
    {
      num: 3, date: "Mon · Jun 22", title: "The Grand Canyon of the Yellowstone",
      base: "Mammoth Hot Springs Hotel", baseId: "mammoth",
      drive: "Mammoth → Canyon via Dunraven Pass · ~38 mi · 1h 15m (gorgeous)",
      blurb: "A 308-ft waterfall pouring into a canyon painted yellow, pink and orange. Split up by legs, regroup at the rim.",
      stops: ["mammothHotel", "washburn", "brinkLower", "artistPoint"],
      options: [
        { tier: "hike", icon: "🥾", title: "Mt. Washburn", body: "6.2 mi RT · 1,400 ft from Dunraven Pass to a 10,243-ft fire lookout. Bighorn sheep, wildflowers, hundred-mile views. The trip's first Big One. Bring layers — it's windy up top." },
        { tier: "hike", icon: "💪", title: "Brink of the Lower Falls", body: "Only 0.7 mi RT but steep switchbacks — you stand at the LIP of the falls and feel it in your chest. Strong kids OK, not stroller territory." },
        { tier: "medium", icon: "🖼️", title: "South Rim to Point Sublime", body: "From Artist Point keep walking — 2.6 mi RT along the rim to railings hanging over the canyon's wildest stretch. Or loop Clear Lake–Ribbon Lake (5.5 mi) through bubbling backcountry thermal fields. Brink of the Upper Falls is a 5-minute bonus stop." },
        { tier: "easy", icon: "👶", title: "Artist Point + Grand View", body: "Paved, stroller-friendly, and genuinely the best view in the park. The painting-famous one. Hit multiple rim overlooks by car." },
        { tier: "mustsee", icon: "♨️", title: "Norris on the loop home", body: "Porcelain Basin boardwalk (0.8 mi) — hissing, steaming, otherworldly. Home of Steamboat, the world's tallest geyser. Optional if energy allows; otherwise it's tomorrow's first stop." }
      ],
      rendezvous: "Artist Point at 3:00 PM — full-crew canyon photo.",
      fuel: "Canyon Village: Canyon Lodge Eatery (cafeteria, easy with kids), Canyon General Store (old-school lunch counter), gas + groceries-lite."
    },
    {
      num: 4, date: "Tue · Jun 23", title: "South to the Lake", special: "🚚 Moving day → Grant Village",
      base: "Grant Village", baseId: "grant",
      drive: "Mammoth → Grant · ~70 mi · 2h 15m driving + stops all day",
      blurb: "Check out of Mammoth and make a day of the drive south — geyser basins, paint pots and waterfalls all the way down to Yellowstone Lake.",
      stops: ["mammothHotel", "norris", "paintpots", "gibbonFalls", "westThumb", "grant"],
      options: [
        { tier: "mustsee", icon: "♨️", title: "Norris Geyser Basin", body: "If skipped yesterday: the hottest, weirdest basin in the park. Porcelain Basin loop is 0.8 mi of boardwalk through a steaming moonscape." },
        { tier: "medium", icon: "⛰️", title: "Monument Geyser Basin", body: "2 mi RT, short but steep — ghostly old sinter cones on a ridge with the whole Gibbon valley at your feet. Roaring Mountain's hissing slope is a free pullout on the way down from Norris." },
        { tier: "easy", icon: "🎨", title: "Artists Paintpots", body: "1 mi loop, bubbling pastel mud pots that sound like a soup pot. Top-tier kid content. Gibbon Falls is a 30-second stop just down the road." },
        { tier: "easy", icon: "👶", title: "West Thumb at golden hour", body: "0.6 mi boardwalk where hot springs spill into Yellowstone Lake — 2 minutes from Grant. Stroller-OK. Perfect pre-dinner leg-stretch." },
        { tier: "musthave", icon: "🍽️", title: "DINNER: Grant Village Restaurant · 7:30 PM", body: "Booked! Lakeside dining room, casual. Don't be the table that's late because of a bison jam — pad the drive." }
      ],
      rendezvous: "Grant Village Restaurant, 7:30 PM sharp.",
      fuel: "Grant Village: the Restaurant (booked tonight), Lake House Grill (casual, on the water), Grant General Store + mini-store, gas station. This is the southern supply post — top off everything."
    },
    {
      num: 5, date: "Wed · Jun 24", title: "Geyser Royalty",
      base: "Grant Village", baseId: "grant",
      drive: "Grant → Old Faithful · 19 mi · 35 min. OF → Lake Hotel · ~45 mi · 1h.",
      blurb: "The greatest hits day: Old Faithful, the Grand Prismatic rainbow, a log-palace lobby — then dress up(ish) for dinner at the grand old Lake Hotel.",
      stops: ["grant", "oldFaithful", "ofInn", "midway", "fairyFalls", "lakeHotel", "hayden"],
      options: [
        { tier: "mustsee", icon: "⛲", title: "Old Faithful + Upper Geyser Basin", body: "Catch an eruption (every ~90 min — check predictions, grab benches early), then walk the boardwalk past Grand, Castle + Morning Glory Pool. Gawk at the Old Faithful Inn lobby. Huckleberry ice cream downstairs." },
        { tier: "mustsee", icon: "🌈", title: "Grand Prismatic — twice", body: "Midway boardwalk (0.8 mi, stroller-OK) puts you at the steaming rim; the Overlook (1.2 mi RT from Fairy Falls TH) gets you THE photo. Do the overlook if you pick one. ⚠️ Biscuit Basin remains closed (2024 hydrothermal explosion)." },
        { tier: "hike", icon: "🥾", title: "Fairy Falls", body: "5.4 mi RT, dead flat, ends at a lacy 200-ft waterfall. The mellow Big Hike — kids with stamina can do it." },
        { tier: "medium", icon: "🔭", title: "Observation Point + Lone Star", body: "Observation Point (1.6 mi RT) puts Old Faithful's eruption below you instead of in front of you. Lone Star Geyser is 4.8 flat miles RT of old service road to a 12-ft cone that fires every ~3 hours — check the trailhead logbook and time it. Quick bonus stops: Black Sand Basin, Kepler Cascades." },
        { tier: "medium", icon: "🐘", title: "Elephant Back before dinner", body: "3.6 mi loop · 800 ft, topping out on a panorama of Yellowstone Lake — and the trail ends a few steps from the Lake Hotel porch. Earn the 4:45 reservation." },
        { tier: "musthave", icon: "🍽️", title: "DINNER: Lake Yellowstone Hotel · 4:45 PM", body: "Booked! The 1891 grande dame — sunroom, string quartet energy, collared shirts encouraged. Leave the geysers by 3:30." },
        { tier: "easy", icon: "🦬", title: "Hayden Valley dusk drive", body: "After dinner, loop home through Hayden at golden hour — prime bison + grizzly time, all from the car. Baby-proof wildlife viewing." }
      ],
      rendezvous: "Lake Yellowstone Hotel lobby, 4:30 PM, looking respectable.",
      fuel: "Old Faithful area: Inn Dining Room, Bear Paw Deli (grab-and-go), OF Lodge cafeteria, TWO general stores (the Lower Store has a 1950s lunch counter). Fishing Bridge General Store near Lake."
    },
    {
      num: 6, date: "Thu · Jun 25", title: "Two Parks, One Day", special: "🚚 Moving day → Jackson Lake Lodge",
      base: "Jackson Lake Lodge", baseId: "jll",
      drive: "Grant → JLL · ~46 mi · 1h via the South Entrance + Rockefeller Parkway",
      blurb: "Trade geysers for granite. An easy morning on Yellowstone Lake, then south past Lewis Falls into the Tetons — and the lodge with the best lobby view in America.",
      stops: ["grant", "stormPoint", "lewisFalls", "jll", "colterBay", "oxbow"],
      options: [
        { tier: "hike", icon: "🌊", title: "Storm Point loop", body: "2.3 mi easy loop to a blustery point over Yellowstone Lake. Marmots everywhere. Great pre-drive energy burn for the kids." },
        { tier: "medium", icon: "🌲", title: "Shoshone Lake via DeLacy Creek", body: "Before leaving Yellowstone: 3 flat-ish miles of creekside meadow each way to the largest backcountry lake in the lower 48 — moose like it as much as people do. Shorter alt: Yellowstone Lake Overlook from West Thumb, 2 mi RT / 400 ft, the geyser basin and lake from above." },
        { tier: "easy", icon: "🏖️", title: "Colter Bay beach afternoon", body: "Kids + baby swim/splash in Jackson Lake with the Tetons across the water. Lakeshore trail (2 mi) is stroller-able. Leek's Marina pizza on the water for lazy lunch." },
        { tier: "medium", icon: "🔭", title: "Grand View Point at golden hour", body: "Ten minutes north of the lodge: 2.2 mi RT · 550 ft through lodgepole forest to a ledge with Two Ocean Lake below and the whole range stacked behind Jackson Lake." },
        { tier: "easy", icon: "🍹", title: "Lodge arrival ritual", body: "Check in, walk into the lobby, let the 60-ft windows do their thing. Cocktail at the Blue Heron Lounge, kids on the back terrace, Lunch Tree Hill (0.5 mi) for sunset." },
        { tier: "mustsee", icon: "🌄", title: "Oxbow Bend at dusk", body: "5 min from the lodge — Mt. Moran reflected in the Snake River, moose + eagles on patrol. You'll be back at sunrise." }
      ],
      rendezvous: "Blue Heron Lounge terrace, golden hour.",
      fuel: "JLL: Mural Room (booked Sat), Pioneer Grill (1950s diner counter — milkshakes, kid paradise), Blue Heron Lounge. Colter Bay (10 min): Ranch House, café court, and the best general store on the trip."
    },
    {
      num: 7, date: "Fri · Jun 26", title: "Jenny Lake Day",
      base: "Jackson Lake Lodge", baseId: "jll",
      drive: "JLL → Jenny Lake · ~18 mi · 30 min. Go EARLY — lots fill by 9am.",
      blurb: "The Tetons' crown jewel. A boat ride across a glacial lake, a waterfall, a viewpoint, and — for the strong of leg — the canyon between the spires.",
      stops: ["jll", "jennyLake", "hiddenFalls", "cascade", "stringLake", "dornans"],
      options: [
        { tier: "mustsee", icon: "⛴️", title: "Jenny Lake boat → Hidden Falls", body: "Shuttle boats cross all day (kids LOVE it). From the dock: 0.5 mi to Hidden Falls, then 1 mi / 400 ft up to Inspiration Point. Most of the crew can do this one." },
        { tier: "hike", icon: "🥾", title: "Cascade Canyon", body: "Continue past Inspiration Point into the canyon — granite walls, moose ponds, snowfields. Turn around whenever; the forks are ~9–10 mi RT total. THE Teton big hike." },
        { tier: "hike", icon: "🏔️", title: "Alt big: Surprise & Amphitheater Lakes", body: "9.6 mi RT · ~3,000 ft of relentless switchbacks from Lupine Meadows to two alpine cirque lakes tucked under the Grand itself. Trade Cascade Canyon for this if you want the full burn." },
        { tier: "medium", icon: "🛶", title: "Leigh Lake shoreline", body: "Flat 1.8 mi RT from the String Lake lot (keep going as long as legs allow) — sandy coves staring straight up Mount Moran, and far fewer people than Jenny. The mellow-medium counterweight to the boat-dock crowds." },
        { tier: "easy", icon: "👶", title: "String Lake base camp", body: "Shallow, sandy-edged, the warmest water in the park, Mount Moran straight ahead. Set up chairs and let the kids + baby live their best lives. Arrive early for parking." },
        { tier: "brewery", icon: "🍕", title: "Evening: Dornan's in Moose", body: "Pizza + pasta on the deck, the Grand Teton filling the sky, surprisingly great wine shop next door. Casual, loud, perfect for 13 people." }
      ],
      rendezvous: "Dornan's deck, ~5:30 PM.",
      fuel: "Jenny Lake Store at the visitor center (snacks). Dornan's Trading Post in Moose = real grocery + deli. Signal Mountain Lodge (Trapper Grill, nachos the size of a child) is the mid-valley option."
    },
    {
      num: 8, date: "Sat · Jun 27", title: "Split-Up Saturday", special: "🍽️ Mural Room finale · 5:15 PM",
      base: "Jackson Lake Lodge", baseId: "jll",
      drive: "JLL → Jackson town · ~36 mi · 50 min",
      blurb: "Choose your own adventure: dawn photos, a proper summit-ish hike, or a town day with the breweries — then everyone cleans up for the big farewell dinner under the murals.",
      stops: ["jll", "oxbow", "schwabacher", "mormonRow", "taggart", "jacksonTown", "snakeRiverBrew"],
      options: [
        { tier: "mustsee", icon: "🌅", title: "Sunrise photo run", body: "Oxbow Bend → Snake River Overlook (the Ansel Adams shot) → Schwabacher Landing → Mormon Row, all before 8am light. Moulton barns + mirror-pond Tetons. The shots that end up framed." },
        { tier: "hike", icon: "🥾", title: "Taggart Lake (family) or Delta Lake (heroes)", body: "Taggart: 3.8 mi RT, gentle, swimmable lake. Delta: 7.4 mi RT / 2,300 ft, unofficial trail, turquoise glacier lake — strenuous sendoff for the strong hikers only." },
        { tier: "medium", icon: "🍃", title: "Phelps Lake · LSR Preserve", body: "The Rockefeller family's old retreat, gifted to the park — hushed trails to a green-blue lake with a famous jumping rock. 3–7 mi depending on your loop. The tiny lot fills by 9am; worth the alarm." },
        { tier: "mustsee", icon: "🚡", title: "Big Red tram to 10,450 ft", body: "Jackson Hole's aerial tram out of Teton Village: 12 minutes to the top of Rendezvous Peak, waffles at Corbet's Cabin, zero effort for a full summit. Kids think it's a ride. It is. Cunningham Cabin is a quick photo pull on the drive." },
        { tier: "brewery", icon: "🍺", title: "Jackson brewery crawl", body: "Snake River Brewing (WY's oldest — beer garden + wood-fired pizza, kids fine), Roadhouse Pub & Eatery just off the square, StillWest at Snow King with the patio. Pace yourselves — dinner's at 5:15." },
        { tier: "easy", icon: "🤠", title: "Town Square + shops", body: "Antler arches, boardwalks, huckleberry taffy, cowboy kitsch. Stagecoach rides for the kids. Scenic Snake River float trips launch nearby (kids ~4+, book ahead)." },
        { tier: "musthave", icon: "🍽️", title: "DINNER: The Mural Room · 5:15 PM", body: "Booked — 3 tables of 4! Trapper murals, white tablecloths, and the Tetons going gold through the windows. Be back at the lodge by 4:30 to de-trail-dust." }
      ],
      rendezvous: "Mural Room, 5:15 PM. Pack tonight — wheels up tomorrow.",
      fuel: "Jackson has everything: Persephone Bakery (morning), Liberty Burger, Snake River Brewing et al. Albertsons + a liquor store for any last supplies."
    },
    {
      num: 9, date: "Sun · Jun 28", title: "One Last Look",
      base: "Fly out of JAC", baseId: "jll",
      drive: "JLL → JAC · ~28 mi · 40 min. Leave by ~10:30 for early-afternoon flights.",
      blurb: "Slow coffee, one more mountain stare, and the only airport in America inside a national park.",
      stops: ["jll", "oxbow", "jac"],
      options: [
        { tier: "easy", icon: "☕", title: "Coffee at Oxbow Bend", body: "Five minutes from the lodge. Thermos coffee, morning light on Moran, maybe a moose sendoff." },
        { tier: "easy", icon: "👶", title: "Lunch Tree Hill", body: "0.5 mi behind the lodge — where JD Rockefeller decided this view needed protecting. Fitting last walk." },
        { tier: "musthave", icon: "🛫", title: "JAC by ~12:00", body: "Tiny airport, real summer lines. Gas up in Jackson or at Dornan's. Window seats on the left flying south — one last Teton flyby." }
      ],
      rendezvous: "Group hug at the gate. Start the 2027 group chat immediately.",
      fuel: "Pioneer Grill breakfast (milkshake for the road is legal), or Persephone in Jackson if you leave early."
    }
  ],

  /* ---------- HOME BASES: food, stores, weather ---------- */
  bases: [
    {
      id: "mammoth", name: "Mammoth Hot Springs Hotel", nights: "Jun 20 – 23 · 3 nights", locId: "mammothHotel",
      weather: { lat: 44.977, lon: -110.703, elev: "6,200 ft" },
      vibe: "The park's 1936 front-porch HQ. Elk on the lawn, terraces up the hill, Gardiner 5 minutes away.",
      eat: ["Mammoth Dining Room — the sit-down (reservations smart)", "Terrace Grill — burgers/counter service, fast with kids", "Gardiner (5 min): Yellowstone Pizza Co., Wonderland Cafe, Iron Horse Bar & Grill"],
      shop: ["Mammoth General Store — snacks, souvenirs, basics", "Gardiner Market — real grocery store, beer, diapers", "Gas in Mammoth + Gardiner"]
    },
    {
      id: "grant", name: "Grant Village", nights: "Jun 23 – 25 · 2 nights", locId: "grant",
      weather: { lat: 44.393, lon: -110.558, elev: "7,800 ft" },
      vibe: "Quiet lodges in the pines on Yellowstone Lake's West Thumb — geysers on the beach 2 minutes away.",
      eat: ["Grant Village Restaurant — booked Tue 7:30 PM", "Lake House Grill — casual, right on the water", "Old Faithful area (35 min): Bear Paw Deli, Inn Dining Room, geyser-side lunch counters"],
      shop: ["Grant Village General Store + mini-store", "Gas station at Grant", "Fishing Bridge General Store (40 min, near Lake Hotel)"]
    },
    {
      id: "jll", name: "Jackson Lake Lodge", nights: "Jun 25 – 28 · 3 nights", locId: "jll",
      weather: { lat: 43.880, lon: -110.574, elev: "6,800 ft" },
      vibe: "Mid-century grand lodge with 60-foot windows aimed at the Tetons. Moose in the willow flats below.",
      eat: ["The Mural Room — booked Sat 5:15 PM (the finale)", "Pioneer Grill — 1950s diner counter, milkshakes, kids love it", "Blue Heron Lounge — cocktails + that view", "Nearby: Leek's Marina pizza, Signal Mountain's Trapper Grill, Dornan's in Moose"],
      shop: ["Colter Bay General Store (10 min) — best store in the Tetons", "Dornan's Trading Post, Moose — grocery + deli + famous wine shop", "Gas at Colter Bay, Signal Mountain + Moran Junction"]
    }
  ],

  /* ---------- BREWERY LOG ---------- */
  breweries: [
    { name: "MAP Brewing Co.", town: "Bozeman, MT", when: "Day 1 lunch", kid: "Yes — full kitchen",
      desc: "Patio on a pond staring at the Bridgers. The official first-beer-of-the-trip spot." },
    { name: "Bridger Brewing", town: "Bozeman, MT", when: "Day 1 alt", kid: "Yes — pizza place",
      desc: "Artisan pizza + their Vigilante IPA, near MSU campus." },
    { name: "Mountains Walking Brewery", town: "Bozeman, MT", when: "Day 1 alt", kid: "Yes — real food menu",
      desc: "Hazy specialists with a legit kitchen in the northeast arts district." },
    { name: "Bozeman Brewing Co.", town: "Bozeman, MT", when: "Day 1 alt", kid: "Taproom — quick one",
      desc: "The OG of Bozeman (2001). Bozone Amber is the classic." },
    { name: "Snake River Brewing", town: "Jackson, WY", when: "Day 8 lunch", kid: "Very — beer garden + pizza",
      desc: "Wyoming's oldest brewery, twice GABF Small Brewery of the Year. Zonker Stout is the legend." },
    { name: "Roadhouse Pub & Eatery", town: "Jackson, WY", when: "Day 8", kid: "Yes — full restaurant",
      desc: "Chef-founded, 20+ taps, half a block off the Town Square. Mountain Jam hazy is the move." },
    { name: "StillWest Brewery & Grill", town: "Jackson, WY", when: "Day 8", kid: "Yes — upscale grill",
      desc: "Base of Snow King with a patio aimed at the mountain. Brewery + proper restaurant." },
    { name: "Dornan's", town: "Moose, WY", when: "Day 7 dinner", kid: "Extremely",
      desc: "Not a brewery — but the deck, the pizza, the wine shop and the head-on Grand Teton view earn it a coaster here." },
    { name: "Melvin Brewing", town: "Alpine, WY (35 min S of Jackson)", kid: "Yes — brewpub", when: "Wildcard",
      desc: "GABF royalty (2x Brewpub of the Year). Worth it if anyone makes a beer run south." },
    { name: "Grand Teton Brewing", town: "Victor, ID (over Teton Pass)", kid: "Taproom", when: "Wildcard",
      desc: "Old-school mountain brewery — Bitch Creek ESB. Pair with a scenic Teton Pass drive." }
  ],

  /* ---------- WEATHER NOTES ---------- */
  weatherNote: "Late June up here: 70s by day, 30s–40s at night, afternoon thunderstorms that arrive like clockwork around 2pm and leave an hour later. Pack layers, rain shells, and sunscreen — the sun at 7,000 ft does not negotiate.",

  /* ---------- KNOWN CLOSURES (manual; auto-alerts layer on top) ---------- */
  knownClosures: [
    "Biscuit Basin (near Old Faithful) — CLOSED since the July 2024 hydrothermal explosion. The other basins are unaffected.",
    "Boiling River swim area (near Mammoth) — closed since the 2022 floods.",
    "Cell service is basically nonexistent outside the villages. Download offline maps before entering the park."
  ]
};
