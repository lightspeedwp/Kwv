/**
 * Handcrafted Wines Farm Story & Content
 * 
 * Complete content for the boutique wine farm established 1918.
 * Hand-drawn aesthetic, personal, family-oriented voice.
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

export const farmStory = {
  brandName: "Handcrafted Wines",
  tagline: "A Century of Family Winemaking on Paarl Mountain",
  established: 1918,
  
  // Core Story
  story: {
    short: "For over 100 years, our family has been crafting exceptional wines, spirits, and cheese on our Paarl Mountain farm. Every bottle tells a story of tradition, passion, and the timeless beauty of handmade things.",
    
    full: `It all started in 1918 when my great-grandfather, Johannes van der Berg, planted the first vines on this rocky slope of Paarl Mountain. He was a dreamer who believed that great wine comes from love, patience, and a deep respect for the land.

Four generations later, we're still here—still tending these same vines, still making wine the old way, by hand. My grandfather built the original cellar in 1952, using stone quarried from the mountain itself. My father added the distillery in 1987, where we now craft small batches of grappa and brandy. And in 2003, my mother started our goat dairy, turning fresh milk into artisan cheese that pairs perfectly with our wines.

We're not a big operation. We never wanted to be. We believe the best things in life are made slowly, with care, by people who love what they do. Every grape is hand-picked. Every barrel is carefully chosen. Every bottle is filled with four generations of passion.

This isn't just our farm—it's our home. And when you visit, we want you to feel like you're coming home too.`,
    
    timeline: [
      {
        year: 1918,
        title: "The First Vines",
        description: "Johannes van der Berg plants Shiraz and Chenin Blanc on Paarl Mountain's rocky slopes",
        image: "timeline-1918.jpg"
      },
      {
        year: 1952,
        title: "The Stone Cellar",
        description: "Second generation builds the original cellar using mountain stone",
        image: "timeline-1952.jpg"
      },
      {
        year: 1987,
        title: "Distillery Dreams",
        description: "Third generation adds copper pot stills for grappa and brandy",
        image: "timeline-1987.jpg"
      },
      {
        year: 2003,
        title: "The Goat Dairy",
        description: "Farm expands to include artisan cheese production",
        image: "timeline-2003.jpg"
      },
      {
        year: 2015,
        title: "New Generation",
        description: "Fourth generation takes over, honoring tradition while embracing innovation",
        image: "timeline-2015.jpg"
      }
    ]
  },

  // Family Members
  team: [
    {
      name: "Pieter van der Berg",
      role: "Head Winemaker & Owner (4th Generation)",
      bio: "I grew up playing hide-and-seek in the barrel room and helping my grandfather harvest grapes. After studying winemaking in Stellenbosch and working vintages in Burgundy, I came home to carry on our family's tradition. Every day, I'm honored to craft wines that my great-grandfather would be proud of.",
      quote: "Great wine isn't made in the cellar—it's grown in the vineyard. We're just here to guide it along.",
      image: "team-pieter.jpg",
      email: "pieter@handcraftedwines.co.za"
    },
    {
      name: "Annelie van der Berg",
      role: "Cheesemaker & Hospitality Manager",
      bio: "I married into this wonderful family twenty years ago, and fell in love with everything about farm life. Our goat dairy produces milk so fresh and sweet, it was only natural to start making cheese. Now our chèvre and aged varieties are as loved as our wines.",
      quote: "Cheese and wine are soulmates. I love helping people discover their perfect pairing.",
      image: "team-annelie.jpg",
      email: "annelie@handcraftedwines.co.za"
    },
    {
      name: "Hendrik (Hennie) van der Berg",
      role: "Master Distiller (3rd Generation)",
      bio: "At 78, I'm officially retired, but you'll still find me in the distillery most mornings. I've been making grappa and brandy for nearly 40 years, and there's something magical about transforming grape pomace into liquid gold. The young folks let me tinker, and I couldn't be happier.",
      quote: "Good brandy needs time and patience. Just like family.",
      image: "team-hennie.jpg"
    },
    {
      name: "Liezl van der Berg",
      role: "Vineyard Manager & Environmental Steward",
      bio: "I'm Pieter's younger sister, and while he gets all the glory for making the wine, I'm the one who grows the grapes! I studied viticulture and environmental science because I believe we have a responsibility to farm in harmony with nature. Our vines are happy, and so is Paarl Mountain.",
      quote: "Healthy soil makes healthy vines. Healthy vines make extraordinary wine.",
      image: "team-liezl.jpg"
    }
  ],

  // What We Make
  products: {
    wines: {
      title: "Handcrafted Wines",
      description: "Every bottle is a love letter to Paarl Mountain. We grow everything ourselves, harvest by hand, and age our wines in French oak with patience and care. Small batches. Big heart.",
      varieties: ["Shiraz", "Cabernet Sauvignon", "Chenin Blanc", "Chardonnay", "Red Blend", "Rosé"],
      approach: "Old-world techniques meet new-world passion. We don't chase trends—we make wines we'd want to drink with family."
    },
    spirits: {
      title: "Craft Spirits",
      description: "After the wine is pressed, the grape skins still have magic in them. Our grappa captures that essence—fruity, aromatic, and unbelievably smooth. Our brandy? That takes five years in oak, but it's worth every patient day.",
      offerings: ["Estate Grappa", "Aged Brandy (5 Year)", "Limited Reserve Brandy (10 Year)"],
      approach: "We distill in small copper pot stills, the same way my father taught me. No shortcuts, no rush."
    },
    cheese: {
      title: "Farmstead Cheese",
      description: "Our goats have the best job on the farm—they graze mountain slopes and get spoiled rotten. Their milk makes the creamiest, most flavorful cheese you've ever tasted. Fresh chèvre, aged wheels, even a wine-washed rind that'll blow your mind.",
      offerings: ["Fresh Chèvre", "Herbed Chèvre", "Aged Goat Cheese (6 Month)", "Wine-Washed Rind"],
      approach: "Made fresh every morning with milk from our own dairy. Farm to table doesn't get more literal than this."
    }
  },

  // Values
  values: [
    {
      title: "Handmade with Love",
      description: "No industrial machinery, no mass production. Everything we make is touched by human hands and shaped by generations of knowledge.",
      icon: "heart"
    },
    {
      title: "Four Generations Strong",
      description: "Since 1918, our family has poured heart and soul into this land. We're stewards of tradition and caretakers of the future.",
      icon: "users"
    },
    {
      title: "Sustainable by Nature",
      description: "We farm organically because it's the right thing to do. Our vines, goats, and the mountain itself all thrive together.",
      icon: "leaf"
    },
    {
      title: "Quality Over Quantity",
      description: "We'll never be the biggest, and that's exactly the point. Small batches mean every detail matters.",
      icon: "award"
    }
  ],

  // Awards & Recognition
  awards: {
    total: 58,
    byCategory: {
      wines: 32,
      spirits: 18,
      cheese: 8
    },
    notable: [
      {
        year: 2023,
        product: "Estate Shiraz 2020",
        award: "Double Gold Medal",
        competition: "Paarl Wine Show"
      },
      {
        year: 2023,
        product: "10 Year Reserve Brandy",
        award: "Best South African Brandy",
        competition: "International Spirits Challenge"
      },
      {
        year: 2022,
        product: "Reserve Cabernet Sauvignon 2019",
        award: "Gold Medal",
        competition: "Michelangelo International Wine Awards"
      },
      {
        year: 2022,
        product: "Wine-Washed Rind Cheese",
        award: "Best Artisan Cheese",
        competition: "SA Dairy Championships"
      },
      {
        year: 2021,
        product: "Chenin Blanc 2019",
        award: "Five Stars",
        competition: "Platter's Wine Guide"
      },
      {
        year: 2021,
        product: "Estate Grappa",
        award: "Silver Medal",
        competition: "World Grappa Awards"
      }
    ]
  },

  // Sustainability
  sustainability: {
    commitment: "We don't own this farm—we're just taking care of it for the next generation. Everything we do is guided by one question: Will our grandchildren be able to farm this land the same way we do?",
    practices: [
      "Organic farming—no synthetic pesticides or herbicides",
      "Drip irrigation and rainwater harvesting to conserve water",
      "Solar panels generate 80% of our electricity",
      "Natural composting and cover crops enrich the soil",
      "Free-range goats graze on mountain fynbos",
      "Hand-harvesting protects vines and ensures quality",
      "Local sourcing for all packaging and materials"
    ]
  },

  // Experiences & Visits
  experiences: {
    intro: "Come visit our farm on Paarl Mountain. Taste wines in our cellar, meet the goats, walk the vineyard, and see where four generations of passion comes to life.",
    
    offerings: [
      {
        id: "wine-tasting",
        title: "Wine Tasting",
        tagline: "Taste the Terroir",
        description: "Sit in our stone cellar and taste five of our handcrafted wines. Pieter or Liezl will guide you through each glass, sharing stories about the vineyard, the vintage, and what makes Paarl Mountain special.",
        duration: "60 minutes",
        price: "R150 per person",
        includes: [
          "Tasting of 5 estate wines",
          "Cellar tour (optional)",
          "Souvenir tasting glass",
          "10% discount on wine purchases"
        ],
        availability: "Daily at 11:00 AM, 1:00 PM, and 3:00 PM",
        bookingRequired: true
      },
      {
        id: "cheese-pairing",
        title: "Cheese & Wine Pairing",
        tagline: "Perfect Partners",
        description: "Annelie will introduce you to our farmstead cheeses paired with our wines. Learn why fresh chèvre loves Chenin Blanc and how our wine-washed rind transforms when matched with Shiraz.",
        duration: "75 minutes",
        price: "R220 per person",
        includes: [
          "4 artisan cheeses with 4 paired wines",
          "Meet the goats (if they're home)",
          "Cheese-making insights from Annelie",
          "Take-home pairing guide"
        ],
        availability: "Wednesday - Sunday at 12:00 PM and 2:30 PM",
        bookingRequired: true
      },
      {
        id: "farm-tour",
        title: "Full Farm Tour",
        tagline: "See It All",
        description: "Walk the vineyard with Liezl, visit the distillery with Hennie, meet the goats in the dairy, and taste wines in the cellar. This is the complete farm experience—two hours of family stories, mountain views, and handcrafted goodness.",
        duration: "2 hours",
        price: "R350 per person",
        includes: [
          "Vineyard walk",
          "Distillery visit",
          "Goat dairy tour",
          "Wine tasting (5 wines)",
          "Light refreshments",
          "Take-home gift bag"
        ],
        availability: "Daily at 10:00 AM and 2:00 PM",
        bookingRequired: true,
        minGuests: 4
      },
      {
        id: "harvest-experience",
        title: "Harvest Day Experience",
        tagline: "Get Your Hands Dirty",
        description: "Join us during harvest season (February-March) and pick grapes alongside our team. Help sort fruit, crush grapes with your feet (yes, really), and enjoy a harvest lunch. Available only during vintage.",
        duration: "Half day (4 hours)",
        price: "R450 per person",
        includes: [
          "Grape picking in the vineyard",
          "Sorting and crushing experience",
          "Traditional harvest lunch",
          "Wine tasting",
          "Complimentary bottle of the vintage you helped harvest (released 2 years later)"
        ],
        availability: "February - March only, weekends",
        bookingRequired: true,
        seasonal: true
      },
      {
        id: "private-tasting",
        title: "Private Tasting & Tour",
        tagline: "Just for You",
        description: "Book the cellar for your group. Whether it's a birthday, anniversary, or corporate outing, we'll create a custom experience with wines, cheese, and personalized attention from the family.",
        duration: "2-3 hours (flexible)",
        price: "R500 per person (min 8 guests)",
        includes: [
          "Private cellar booking",
          "Customized tasting menu",
          "Cheese & charcuterie platter",
          "Personalized tour with family member",
          "Special occasion arrangements (if requested)"
        ],
        availability: "By appointment",
        bookingRequired: true,
        minGuests: 8
      }
    ],
    
    policies: {
      booking: "All experiences require advance booking. Email visit@handcraftedwines.co.za or call +27 21 807 3007",
      cancellation: "Free cancellation up to 48 hours before your visit",
      children: "Children under 18 are welcome (with non-alcoholic grape juice tastings)",
      accessibility: "The farm has gravel paths and stairs. Please contact us to discuss accessibility needs.",
      groups: "Groups of 15+ qualify for special group rates"
    }
  },

  // Location
  location: {
    farm: "Nestled against Paarl Mountain in the heart of South Africa's Cape Winelands",
    address: "Mountain View Road, Paarl, Western Cape 7646, South Africa",
    region: "Paarl, Cape Winelands, Western Cape, South Africa",
    directions: "Just 45 minutes from Cape Town, our farm is easy to reach but feels a world away. Follow the winding mountain road until you see our hand-painted sign.",
    gps: {
      lat: "-33.762694",
      lng: "18.966389"
    }
  },

  // Contact
  contact: {
    general: "hello@handcraftedwines.co.za",
    reservations: "visit@handcraftedwines.co.za",
    events: "events@handcraftedwines.co.za",
    wineclub: "wineclub@handcraftedwines.co.za",
    phone: "+27 21 807 3007",
    whatsapp: "+27 82 345 6789"
  },

  // Hours
  hours: {
    tastingRoom: {
      weekdays: "Monday - Saturday: 9:00 AM - 5:00 PM",
      weekend: "Sunday: 10:00 AM - 4:00 PM",
      holidays: "Closed on public holidays"
    },
    tours: {
      schedule: "Daily at 11:00 AM and 2:30 PM",
      booking: "Reservations required 48 hours in advance",
      duration: "Approximately 90 minutes"
    }
  },

  // Social Media
  social: {
    instagram: "@handcraftedwines_paarl",
    facebook: "/handcraftedwinespaarl",
    pinterest: "/handcraftedwines"
  },

  // Hand Drawn Elements
  handDrawnElements: {
    style: "Organic, sketched, personal—like you're flipping through our family's recipe book",
    elements: [
      "Hand-drawn vine illustrations",
      "Sketched wine bottles and glasses",
      "Rough-edged borders and frames",
      "Handwritten-style headings (sparingly)",
      "Watercolor-style background washes",
      "Imperfect circles and organic shapes",
      "Scribbled underlines and flourishes"
    ],
    colors: "Warm earth tones—wine stains, grape skins, mountain stone, sunset gold"
  }
};