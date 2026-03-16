/**
 * Tastings & Experiences Data (DEPRECATED)
 * 
 * ⚠️ **DEPRECATED:** This file is no longer used in the application.
 * 
 * **Status:** Archived as of 2026-03-15
 * **Reason:** Replaced by farmStory.experiences in `/data/farmStory.ts`
 * 
 * **Replacement:** Use `/data/farmStory.ts` → `farmStory.experiences`
 * 
 * All tasting/experience data is now centralized in farmStory.ts:
 * - Wine Tasting (R75)
 * - Cheese & Wine Pairing (R120)  
 * - Farm Tour (R150)
 * - Harvest Experience (R250)
 * - Private Tasting (Custom pricing)
 * 
 * **Action Required:** Delete this file after confirming no external dependencies
 * 
 * ---
 * 
 * All tasting experiences, pairings, and tour information for Handcrafted Wines.
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

export const TASTINGS = {
  wine: [
    {
      name: 'ESSENTIAL WINE TASTING',
      price: 'R70',
      description: 'ESTATE COLLECTION',
      subItems: ['Sauvignon Blanc', 'Chardonnay', 'Pinotage', 'Shiraz', 'Cabernet Sauvignon']
    },
    {
      name: 'CHEESE & WINE PAIRING',
      price: 'R85',
      description: 'THREE WINES WITH FARMSTEAD CHEESE',
      subItems: ['Fresh Chèvre', 'Aged Tomme', 'Herb-Crusted Feta', 'Paired with three estate wines']
    },
    {
      name: 'RESERVE TASTING',
      price: 'R90',
      description: 'WINEMAKER\'S SELECTION',
      subItems: ['Reserve Chenin Blanc', 'Grenache Blanc', 'Petit Verdot', 'Canvas Red Blend', 'Orchestra Reserve']
    },
    {
      name: 'CRAFT SPIRITS TASTING',
      price: 'R110',
      description: 'HOUSE OF FIRE COLLECTION',
      subItems: ['10 Year Grappa', '12 Year Brandy', '15 Year Brandy', '20 Year Premium Brandy']
    }
  ],

  pairings: [
    {
      name: 'WINE & ARTISAN CHEESE',
      price: 'R200',
      description: 'Three estate wines paired with our signature farmstead goat cheese. Reserve Chenin Blanc with Fresh Chèvre. Orchestra Red Blend with Aged Tomme. Cape Tawny with Apple Crumble Cheese.'
    },
    {
      name: 'BRANDY & BELGIAN CHOCOLATES',
      price: 'R200',
      description: '10 Year Brandy with Milk Chocolate. 12 Year Brandy with Hazelnut Praline. 15 Year Brandy with Dark Chocolate. 20 Year Brandy with Dark Orange Chocolate.'
    },
    {
      name: 'VINEYARD PICNIC',
      price: 'R350',
      description: 'Gourmet picnic basket with artisan cheeses, charcuterie, fresh bread, and a bottle of estate wine. Enjoy under the oaks overlooking Paarl Mountain.'
    }
  ],

  tours: [
    {
      name: 'CELLAR TOUR',
      duration: '60 minutes',
      price: 'R150',
      description: 'Walk through our historic wine cellars and learn about our winemaking process from grape to bottle.',
      includes: ['Barrel tasting', 'Cellar master Q&A', 'Complimentary glass of wine']
    },
    {
      name: 'DISTILLERY EXPERIENCE',
      duration: '90 minutes',
      price: 'R180',
      description: 'Tour our copper pot stills at the House of Fire distillery and discover the art of craft brandy making.',
      includes: ['Distillery tour', 'Brandy tasting (4 aged spirits)', 'Meet the master distiller']
    },
    {
      name: 'FARM-TO-TABLE TOUR',
      duration: '2 hours',
      price: 'R250',
      description: 'Complete farm experience including vineyard walk, goat dairy visit, and cheese-making demonstration.',
      includes: ['Vineyard tour', 'Meet our goats', 'Cheese tasting', 'Wine tasting', 'Light lunch']
    }
  ]
};

export default TASTINGS;