/**
 * Handcrafted Wines Product Catalog
 * 
 * Complete product data for wines, spirits, and cheese.
 * All handcrafted on Paarl Mountain farm.
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'wine' | 'spirit' | 'cheese' | 'gift';
  subcategory?: string;
  price: number;
  salePrice?: number;
  description: string;
  tastingNotes: string[];
  pairing: string;
  vintage?: string;
  alcohol?: string;
  volume?: string;
  awards?: string[];
  inStock: boolean;
  featured?: boolean;
  image: string;
  winemaker?: string;
}

export const products: Product[] = [
  // === WINES ===
  {
    id: 'estate-shiraz-2020',
    slug: 'estate-shiraz-2020',
    name: 'Estate Shiraz 2020',
    category: 'wine',
    subcategory: 'Red Wine',
    price: 285,
    description: 'Our flagship Shiraz from vines planted by my great-grandfather in 1918. Bold, structured, and deeply expressive of Paarl Mountain terroir. This is what over a century of winemaking knowledge tastes like.',
    tastingNotes: ['Dark cherry', 'Blackberry', 'White pepper', 'Leather', 'Mountain fynbos'],
    pairing: 'Grilled lamb chops, aged cheddar, or our wine-washed rind cheese',
    vintage: '2020',
    alcohol: '14.5%',
    volume: '750ml',
    awards: ['Double Gold Medal - Paarl Wine Show 2023'],
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80',
    winemaker: 'Pieter van der Berg'
  },
  {
    id: 'reserve-cabernet-2019',
    slug: 'reserve-cabernet-2019',
    name: 'Reserve Cabernet Sauvignon 2019',
    category: 'wine',
    subcategory: 'Red Wine',
    price: 340,
    description: 'Our Cabernet spends 18 months in French oak -  - no shortcuts, no rushing. The result is a wine with backbone, elegance, and enough structure to age for a decade. Pieter\'s personal favorite.',
    tastingNotes: ['Cassis', 'Cedar', 'Dark chocolate', 'Tobacco', 'Violets'],
    pairing: 'Ribeye steak, aged goat cheese, dark chocolate',
    vintage: '2019',
    alcohol: '14%',
    volume: '750ml',
    awards: ['Gold Medal - Michelangelo International Wine Awards 2022'],
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80',
    winemaker: 'Pieter van der Berg'
  },
  {
    id: 'chenin-blanc-2022',
    slug: 'chenin-blanc-2022',
    name: 'Chenin Blanc 2022',
    category: 'wine',
    subcategory: 'White Wine',
    price: 195,
    description: 'Chenin Blanc is South Africa\'s signature grape, and we\'ve been growing it since 1918. Crisp, refreshing, and food-friendly. This is what we drink on the porch after a long day in the vineyard.',
    tastingNotes: ['Green apple', 'Honeysuckle', 'Citrus zest', 'Wet stone', 'Fresh pear'],
    pairing: 'Fresh chèvre, grilled fish, summer salads',
    vintage: '2022',
    alcohol: '13%',
    volume: '750ml',
    awards: ['Five Stars - Platter\'s Wine Guide 2021'],
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1695048475495-6535686c473c?auto=format&fit=crop&q=80',
    winemaker: 'Pieter van der Berg'
  },
  {
    id: 'chardonnay-2021',
    slug: 'chardonnay-2021',
    name: 'Chardonnay 2021',
    category: 'wine',
    subcategory: 'White Wine',
    price: 240,
    description: 'We ferment our Chardonnay in French oak barrels and let it rest on the lees for six months. The result is creamy, complex, and utterly delicious. This is not your average Chardonnay.',
    tastingNotes: ['Ripe peach', 'Toasted almond', 'Vanilla', 'Butter', 'Citrus blossom'],
    pairing: 'Roast chicken, creamy pasta, our aged goat cheese',
    vintage: '2021',
    alcohol: '13.5%',
    volume: '750ml',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1597843797221-e0e1f74dd7e2?auto=format&fit=crop&q=80',
    winemaker: 'Pieter van der Berg'
  },
  {
    id: 'rose-2023',
    slug: 'rose-2023',
    name: 'Rosé 2023',
    category: 'wine',
    subcategory: 'Rosé',
    price: 165,
    description: 'Made from Shiraz grapes with just a few hours of skin contact. Dry, crisp, and perfect for summer afternoons. We drink a lot of this on the farm.',
    tastingNotes: ['Strawberry', 'Watermelon', 'Rose petals', 'Citrus', 'Minerality'],
    pairing: 'Fresh chèvre, charcuterie, grilled vegetables',
    vintage: '2023',
    alcohol: '12.5%',
    volume: '750ml',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80',
    winemaker: 'Pieter van der Berg'
  },
  {
    id: 'red-blend-2020',
    slug: 'red-blend-2020',
    name: 'Mountain Red Blend 2020',
    category: 'wine',
    subcategory: 'Red Wine',
    price: 220,
    description: 'A blend of Shiraz, Cabernet Sauvignon, and Merlot. This is our everyday red -  - approachable, food-friendly, and absolutely delicious. Perfect for family dinners.',
    tastingNotes: ['Red berries', 'Plum', 'Spice', 'Smooth tannins', 'Long finish'],
    pairing: 'Pizza, pasta, BBQ, anything grilled',
    vintage: '2020',
    alcohol: '14%',
    volume: '750ml',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80',
    winemaker: 'Pieter van der Berg'
  },

  // === SPIRITS ===
  {
    id: 'estate-grappa',
    slug: 'estate-grappa',
    name: 'Estate Grappa',
    category: 'spirit',
    subcategory: 'Grappa',
    price: 380,
    description: 'After we press the grapes for wine, the skins still have magic in them. Hennie distills them in our copper pot stills to create this aromatic, smooth grappa. It\'s not for everyone -  - but if you love it, you really love it.',
    tastingNotes: ['Grape skins', 'Floral notes', 'White pepper', 'Citrus peel', 'Smooth finish'],
    pairing: 'After-dinner digestif, dark chocolate, espresso',
    alcohol: '40%',
    volume: '500ml',
    awards: ['Silver Medal - World Grappa Awards 2021'],
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1613325245242-1c5069a82383?auto=format&fit=crop&q=80',
    winemaker: 'Hendrik van der Berg'
  },
  {
    id: '5-year-brandy',
    slug: '5-year-brandy',
    name: '5 Year Aged Brandy',
    category: 'spirit',
    subcategory: 'Brandy',
    price: 450,
    description: 'Our entry-level brandy, but don\'t let that fool you. Five years in French oak creates incredible depth and smoothness. Hennie checks every barrel personally.',
    tastingNotes: ['Vanilla', 'Dried fruit', 'Oak', 'Honey', 'Warm spice'],
    pairing: 'Cigar, dark chocolate, by the fireplace',
    alcohol: '43%',
    volume: '750ml',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1757694907428-5ef2f3ff7854?auto=format&fit=crop&q=80',
    winemaker: 'Hendrik van der Berg'
  },
  {
    id: '10-year-brandy',
    slug: '10-year-brandy',
    name: '10 Year Reserve Brandy',
    category: 'spirit',
    subcategory: 'Brandy',
    price: 850,
    description: 'A decade in oak. This is Hennie\'s masterpiece -  - complex, elegant, and absolutely worth the wait. We only make 200 bottles a year.',
    tastingNotes: ['Caramel', 'Dried apricot', 'Leather', 'Coffee', 'Silky smooth'],
    pairing: 'Special occasions, contemplative sipping',
    alcohol: '43%',
    volume: '750ml',
    awards: ['Best South African Brandy - International Spirits Challenge 2023'],
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1757694907428-5ef2f3ff7854?auto=format&fit=crop&q=80',
    winemaker: 'Hendrik van der Berg'
  },

  // === CHEESE ===
  {
    id: 'fresh-chevre',
    slug: 'fresh-chevre',
    name: 'Fresh Chèvre',
    category: 'cheese',
    subcategory: 'Fresh Cheese',
    price: 95,
    description: 'Made fresh every morning with milk from our goats. Creamy, tangy, and incredibly versatile. Annelie makes this by hand in our dairy.',
    tastingNotes: ['Tangy', 'Creamy', 'Fresh milk', 'Lemon zest', 'Light'],
    pairing: 'Chenin Blanc, Rosé, fresh bread, honey',
    volume: '200g',
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80',
    winemaker: 'Annelie van der Berg'
  },
  {
    id: 'herbed-chevre',
    slug: 'herbed-chevre',
    name: 'Herbed Chèvre',
    category: 'cheese',
    subcategory: 'Fresh Cheese',
    price: 110,
    description: 'Our fresh chèvre rolled in herbs from our garden -  - rosemary, thyme, and black pepper. Perfect on crackers or melted on warm bread.',
    tastingNotes: ['Tangy goat cheese', 'Fresh herbs', 'Black pepper', 'Creamy', 'Aromatic'],
    pairing: 'Chardonnay, Chenin Blanc, crusty bread',
    volume: '200g',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80',
    winemaker: 'Annelie van der Berg'
  },
  {
    id: 'aged-goat-cheese',
    slug: 'aged-goat-cheese',
    name: 'Aged Goat Cheese (6 Month)',
    category: 'cheese',
    subcategory: 'Aged Cheese',
    price: 180,
    description: 'We age this cheese for six months in our cellar, developing a firm texture and complex, nutty flavor. It\'s a labor of love and absolutely worth it.',
    tastingNotes: ['Nutty', 'Sharp', 'Crystalline texture', 'Caramel notes', 'Long finish'],
    pairing: 'Cabernet Sauvignon, Shiraz, walnuts, fig jam',
    volume: '250g',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?auto=format&fit=crop&q=80',
    winemaker: 'Annelie van der Berg'
  },
  {
    id: 'wine-washed-rind',
    slug: 'wine-washed-rind',
    name: 'Wine-Washed Rind Cheese',
    category: 'cheese',
    subcategory: 'Aged Cheese',
    price: 220,
    description: 'Our most adventurous cheese. We wash the rind in our Shiraz during aging, creating an orange crust and incredibly complex flavor. This won Best Artisan Cheese in 2021.',
    tastingNotes: ['Earthy', 'Mushroom', 'Wine-soaked', 'Creamy interior', 'Bold flavor'],
    pairing: 'Estate Shiraz, crusty bread, adventure',
    volume: '250g',
    awards: ['Best Artisan Cheese - SA Dairy Championships 2021'],
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80',
    winemaker: 'Annelie van der Berg'
  },

  // === GIFT SETS ===
  {
    id: 'tasting-trio',
    slug: 'tasting-trio',
    name: 'Tasting Trio Gift Set',
    category: 'gift',
    price: 650,
    description: 'Three of our most popular wines in a beautiful gift box. Perfect for introducing someone to Handcrafted Wines.',
    tastingNotes: ['Shiraz 2020', 'Chenin Blanc 2022', 'Rosé 2023'],
    pairing: 'Perfect gift for wine lovers',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80'
  },
  {
    id: 'cheese-wine-pairing-box',
    slug: 'cheese-wine-pairing-box',
    name: 'Cheese & Wine Pairing Box',
    category: 'gift',
    price: 850,
    description: 'Two wines and two cheeses, perfectly paired. Includes tasting notes and pairing guide from Annelie.',
    tastingNotes: ['Chenin Blanc + Fresh Chèvre', 'Shiraz + Wine-Washed Rind'],
    pairing: 'Ultimate gift for foodies',
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1543252764-d14e4c0a3d58?auto=format&fit=crop&q=80'
  },
  {
    id: 'brandy-chocolate-set',
    slug: 'brandy-chocolate-set',
    name: 'Brandy & Chocolate Gift Set',
    category: 'gift',
    price: 950,
    description: 'Our 5 Year Brandy paired with artisan dark chocolate. Pure indulgence in a beautiful wooden box.',
    tastingNotes: ['5 Year Brandy', 'South African dark chocolate', 'Gift box'],
    pairing: 'Perfect for special occasions',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80'
  }
];

// Category helpers
export const productCategories = {
  wine: {
    name: 'Wines',
    description: 'Handcrafted wines from our Paarl Mountain vineyard',
    subcategories: ['Red Wine', 'White Wine', 'Rosé']
  },
  spirit: {
    name: 'Spirits',
    description: 'Small-batch grappa and brandy from our distillery',
    subcategories: ['Grappa', 'Brandy']
  },
  cheese: {
    name: 'Cheese',
    description: 'Farmstead cheese made from our goat dairy',
    subcategories: ['Fresh Cheese', 'Aged Cheese']
  },
  gift: {
    name: 'Gift Sets',
    description: 'Curated gift boxes for every occasion',
    subcategories: []
  }
};

// Featured products
export const featuredProducts = products.filter(p => p.featured);

// Filter helpers
export const getProductsByCategory = (category: string) => 
  products.filter(p => p.category === category);

export const getProductsBySubcategory = (subcategory: string) =>
  products.filter(p => p.subcategory === subcategory);

export const getProductById = (id: string) =>
  products.find(p => p.id === id);

export const getProductBySlug = (slug: string) =>
  products.find(p => p.slug === slug);