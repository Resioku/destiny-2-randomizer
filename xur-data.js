// ---------------------------------------------------------
// XUR INVENTORY - TEMPORARY STOPGAP
// ---------------------------------------------------------
// This is a manual placeholder, NOT live data. Real automation (pulling
// this straight from Bungie's API, zero typing required) needs a small
// backend piece that isn't built yet. Until then, this file is how the
// Weeklies tab knows what Xur has this week - update it by hand while
// he's around, or just leave it empty and the page will say inventory
// isn't available yet instead of showing anything stale/wrong.
//
// Format for each item:
//   {
//     name: "Item Name",
//     type: "Exotic Hand Cannon",     // or "Exotic Helmet", etc.
//     forClass: null,                  // "Titan" / "Hunter" / "Warlock" for armor, null for weapons/anything universal
//     stats: [
//       { label: "Impact", value: 84 },
//       { label: "Range", value: 71 },
//     ],
//     perk: "Short description of what makes it special.",
//   }
//
// Leave stats as an empty array [] if you don't want to type them out -
// the item will still show up, just without a hover breakdown.
// ---------------------------------------------------------

const XUR_INVENTORY = [
];
