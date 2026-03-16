/**
 * Brand Data (DEPRECATED)
 * 
 * ⚠️ **DEPRECATED:** This file contains legacy KWV corporate brand data.
 * 
 * **Status:** Archived as of 2026-03-15
 * **Reason:** Handcrafted Wines is a boutique family farm, not a corporate distributor.
 *            The /brands route is orphaned (not in main navigation).
 * 
 * **Replacement:** Use `/data/shopBrands.ts` for product collections:
 *   - Estate Wines
 *   - Craft Spirits
 *   - Farmstead Cheese
 *   - Curated Gift Sets
 *   - Wine Club Exclusives
 * 
 * **Routes:**
 *   - /brands (DEPRECATED, not in navigation)
 *   - /brands/:id (DEPRECATED, not in navigation)
 * 
 * **Replacement Routes:**
 *   - /shop/brands (Active - uses shopBrands.ts)
 *   - /shop/brands/:slug (Active - uses shopBrands.ts)
 * 
 * **Action Required:** Remove /brands routes from routes.tsx
 * 
 * ---
 * 
 * Central repository of all Corporate Brands.
 * Used in Brand Grid, Brand Listings, and Filtering.
 * 
 * @typedef {Object} Brand
 * @property {string} id - Unique identifier for the brand.
 * @property {string} name - Display name of the brand.
 * @property {string} category - Category (Wine, Spirits, RTD, Non-alcoholic).
 * @property {string} image - URL to the brand's representative image.
 * @property {string} desc - Short description/tagline for the brand.
 */
export const BRAND_DATA = [
  // Wines
  {
    id: 'kwv-wines-classic-collection',
    name: 'KWV Classic Collection',
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Engineered to offer a great taste experience, the KWV Classic Collection offers a range of wines that are vibrant and fruitful.'
  },
  {
    id: 'kwv-fortified-wines',
    name: 'KWV Fortified Wines',
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'A range of fortified wines that showcase the rich heritage and tradition of South African winemaking.'
  },
  {
    id: 'roodeberg',
    name: 'Roodeberg',
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'The Legendary Red. Roodeberg has been a part of the fabric of South African culture for over 70 years.'
  },
  {
    id: 'laborie',
    name: 'Laborie',
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'La Grande Vie. Wines and Cap Classique that celebrate the good life, inspired by our French heritage.'
  },
  {
    id: 'the-mentors',
    name: 'The Mentors',
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Strictly Limited. Small batch, premium wines that showcase the absolute pinnacle of our winemaking capabilities.'
  },
  {
    id: 'pearly-bay',
    name: 'Pearly Bay',
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1572569878853-377495464fa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Easy drinking wines for everyday enjoyment.'
  },
  {
    id: 'cathedral-cellar',
    name: 'Cathedral Cellar',
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1504279577054-9234796147a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Monumental Wine. Wines with a sense of place, aged in our historic Cathedral Cellar with its vaulted ceilings.'
  },
  {
    id: 'annabelle',
    name: 'Annabelle',
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'A delightful sparkling wine range.'
  },
  {
    id: 'golden-kaan',
    name: 'Golden Kaan',
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Wines that capture the spirit of South Africa.'
  },
  {
    id: 'african-passion',
    name: 'African Passion',
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Wines that embody the passion and vibrancy of Africa.'
  },
  {
    id: 'cafe-culture',
    name: 'Café Culture',
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'A distinctively coffee-flavoured Pinotage.'
  },
  {
    id: 'bonne-esperance',
    name: 'Bonne Espérance',
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1528823872057-9c018a7a7553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Wines of Good Hope. A reliable and accessible range.'
  },
  {
    id: 'big-bill',
    name: 'Big Bill',
    category: 'Wine',
    image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Larger than life wines named after William "Big Bill" Millar.'
  },

  // Spirits
  {
    id: 'kwv-brandy',
    name: 'KWV Brandy',
    category: 'Spirits',
    image: 'https://images.unsplash.com/photo-1599309066463-b88307db3536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'World Class. Consistently crowned the best brandy in the world. A testament to patience and craftsmanship.'
  },
  {
    id: 'centenary',
    name: 'Centenary',
    category: 'Spirits',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'A celebration of 100 years of excellence.'
  },
  {
    id: 'cruxland-gin',
    name: 'Cruxland Gin',
    category: 'Spirits',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Kalahari Truffles. The world\'s first gin infused with rare Kalahari truffles. A taste of the African wilderness.'
  },
  {
    id: 'imoya',
    name: 'Imoya',
    category: 'Spirits',
    image: 'https://images.unsplash.com/photo-1609325331523-2e2a388676b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'A premium brandy known for its smoothness and depth of character.'
  },
  {
    id: 'ponchos-tequila',
    name: 'Ponchos Tequila',
    category: 'Spirits',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'A premium tequila range.'
  },
  {
    id: 'wild-africa',
    name: 'Wild Africa',
    category: 'Spirits',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Cream liqueurs inspired by the African sunset.'
  },
  {
    id: 'sally-williams',
    name: 'Sally Williams',
    category: 'Spirits',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Nougat cream liqueur.'
  },
  {
    id: 'carvo-vodka-infusions',
    name: 'Carvo',
    category: 'Spirits',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Premium vodka infusions with decadent flavours.'
  },
  {
    id: 'sour-monkey',
    name: 'Sour Monkey',
    category: 'Spirits',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Low alcohol sour shooters.'
  },
  {
    id: 'bug',
    name: 'Bug',
    category: 'Spirits',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Fun and quirky shooters.'
  },
  {
    id: 'imagin-gin',
    name: 'Imagin Gin',
    category: 'Spirits',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Hand-crafted gin.'
  },
  {
    id: 'paddys-whiskey',
    name: 'Paddy\'s Whiskey',
    category: 'Spirits',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'A classic whiskey.'
  },
  {
    id: 'red-heart',
    name: 'Red Heart',
    category: 'Spirits',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'A rum with a bold heart.'
  },
  {
    id: 'bacardi',
    name: 'Bacardi',
    category: 'Spirits',
    image: 'https://images.unsplash.com/photo-1614313511387-1436a4480ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'The world\'s most awarded rum.'
  },

  // Ready to Drink
  {
    id: 'ciao',
    name: 'Ciao',
    category: 'Ready to Drink',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Sparkling cocktails in a can.'
  },
  {
    id: 'hooch',
    name: 'Hooch',
    category: 'Ready to Drink',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'The original cooler.'
  },
  {
    id: 'brandy-cola',
    name: 'Brandy & Cola',
    category: 'Ready to Drink',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Convenient pre-mixed brandy and cola.'
  },

  // Non-alcoholic
  {
    id: 'fruit-lagoon',
    name: 'Fruit Lagoon',
    category: 'Non-alcoholic',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Delicious fruit cocktail bases.'
  }
];