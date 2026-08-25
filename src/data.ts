import { AmenityItem, FloorPlanUnit, CommuteDestination } from "./types";

export const amenitiesData: AmenityItem[] = [
  {
    id: "clubhouse",
    title: "Grand Clubhouse & Lifestyle",
    level: "Clubhouse",
    levelNumber: "01",
    description: "60,000 sq.ft. signature clubhouse and expansive outdoor amenities designed for fitness, leisure, and community connection.",
    imageUrl: "/am1.webp",
    images: [
      "/am1.webp",
      "/am2.webp",
      "/am3.webp",
      "/am4.webp",
      "/am5.webp",
      "/am6.webp",
      "/am7.webp",
      "/am8.webp"
    ],
    bullets: [
      "Grand Swimming Pool & Sun Deck",
      "Badminton, Tennis & Multi-purpose Sports Courts",
      "High-Performance Gymnasium & Yoga Pavilions",
      "Themed Landscapes, Children's Play Zones & Pet Parks"
    ]
  }
];

export const locationsData = [
  {
    id: "devanahalli",
    name: "Devanahalli Business Park",
    icon: "business"
  },
  {
    id: "kiadb",
    name: "KIADB Park",
    icon: "apartment"
  },
  {
    id: "strr",
    name: "Satellite Town Ring Road",
    icon: "alt_route"
  },
  {
    id: "prr",
    name: "Peripheral Ring Road",
    icon: "route"
  },
  {
    id: "metro",
    name: "Metro Connectivity",
    icon: "train"
  },
  {
    id: "bial",
    name: "BIAL IT investment corridor",
    icon: "flight_takeoff"
  }
];

export const floorPlansData: FloorPlanUnit[] = [
  {
    id: "ground",
    title: "Master Plan — Adarsh Savana",
    type: "Master Plan",
    area: "24 Acres",
    imageUrl: "/master-plan.png",
    bedrooms: 0,
    bathrooms: 0,
    balconies: 0,
    highlights: [
      "250+ Premium Plots",
      "24-Acre Master Planned Layout",
      "Sapphire (30 x 40 Ft)",
      "Ruby (30 x 50 Ft)",
      "Diamond (40 x 60 Ft)",
      "Platinum (50 x 80 Ft)",
      "Premium Custom Sized Plots",
      "Landscaped Parks & Walking Trails",
      "Grand Clubhouse & Lifestyle Amenities",
      "Multi-purpose Sports Courts & Zones",
      "Amphitheatre & Social Gathering Spaces",
      "Underground Cabling & Wide Avenues"
    ]
  }
];

export const projectSnapshot = {
  landArea: "121 Acres Total (24 Acres Phase 2)",
  totalUnits: "250+ Plots",
  configuration: "Premium Plots (1200 Sq.Ft. Onwards)",
  possession: "Ready / In-Progress",
  plotSizes: "1200 Sq.Ft. Onwards",
  builtUp: "Customizable Villa Designs",
  cost: "₹99.99 Lakhs Onwards*",
  structure: "Plotted Development",
  rera: "Phase 1: EX/PRM/KA/RERA/1250/303/PR/221219/003613",
  developer: "Adarsh Developers / Adarsh Group",
  locationName: "Yelahanka Extension, North Bengaluru",
  address: "Sy. No.100, Chapparkallu Main Road, Hegganahalli, Devanahalli, Bengaluru - 562110"
};
