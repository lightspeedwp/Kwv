/**
 * Shop Brand Data
 * 
 * Data definitions for Handcrafted Wines product collections.
 * As a boutique family farm, we organize our products by type (Wines, Spirits, Cheese)
 * rather than separate "brands."
 * 
 * @typedef {Object} CollectionData
 * @property {string} id - Unique identifier for the collection.
 * @property {string} name - Display name.
 * @property {'wines'|'spirits'|'cheese'|'gifts'} category - Main category.
 * @property {string} tagline - Short catchy phrase.
 * @property {string} description - Brief description.
 * @property {string} heroImage - URL to high-res hero image.
 * @property {string} story - Longer brand narrative.
 * @property {string[]} features - List of key selling points.
 * @property {string} shopLink - URL to the filtered shop page.
 */
export interface CollectionData {
  id: string;
  name: string;
  category: 'wines' | 'spirits' | 'cheese' | 'gifts';
  tagline: string;
  description: string;
  heroImage: string;
  story: string;
  features: string[];
  shopLink: string;
}

/**
 * Handcrafted Wines Collections
 * 
 * Our product collections organized by category. Each collection represents
 * a different aspect of our farm's offerings - from estate wines to artisan
 * spirits and farmstead cheese.
 */
export const SHOP_BRANDS_DATA: Record<string, CollectionData> = {
  'estate-wines': {
    id: 'estate-wines',
    name: 'Estate Wines',
    category: 'wines',
    tagline: 'Small-batch wines from our Paarl Mountain vineyard.',
    description: 'Handcrafted wines from grapes grown on our family estate. Every bottle tells the story of our terroir.',
    heroImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    story: 'Our vineyard has been in the family for four generations, with vines planted as early as 1918. We focus on small-batch production, allowing us to give each barrel the attention it deserves. From our flagship Shiraz to our elegant Chenin Blanc, every wine is a reflection of the Paarl Mountain terroir and our family\'s dedication to quality.',
    features: [
      'Estate-grown grapes',
      'Small-batch production (500-2,000 bottles per vintage)',
      'Minimal intervention winemaking',
      'Family winemaking since 1918'
    ],
    shopLink: '/shop/wines'
  },
  
  'craft-spirits': {
    id: 'craft-spirits',
    name: 'Craft Spirits',
    category: 'spirits',
    tagline: 'Handcrafted grappa and brandy from our on-farm distillery.',
    description: 'Low-quantity, high-quality spirits distilled from our grape pomace and aged wine.',
    heroImage: 'https://images.unsplash.com/photo-1599309066463-b88307db3536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    story: 'Our distillery is housed in a converted barn built in 1952. Hennie, our fourth-generation distiller, learned the craft from his grandfather. We produce grappa from our grape pomace after each harvest and age brandies in French oak barrels. Production is limited—we only distill what we can personally oversee.',
    features: [
      'On-farm copper pot still distillation',
      'French oak barrel aging',
      'Limited quantities (200-500 bottles annually)',
      'Traditional family recipes'
    ],
    shopLink: '/shop/spirits'
  },
  
  'farmstead-cheese': {
    id: 'farmstead-cheese',
    name: 'Farmstead Cheese',
    category: 'cheese',
    tagline: 'Artisan cheese made from milk from our own goat dairy.',
    description: 'Award-winning chèvre crafted in small batches using milk from our Saanen goat herd.',
    heroImage: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    story: 'Annelie started our goat dairy in 2003 with just six Saanen goats. Today, our herd has grown to 30, and our cheese has won awards across South Africa. We make fresh chèvre daily, and our aged varieties are matured in the same cellar where we age our wines. Every cheese is handcrafted—you might even meet the goats during your farm visit.',
    features: [
      'Made from our own goat milk',
      'Handcrafted in small batches',
      '8 Gold medals (SA Dairy Championships)',
      'Fresh daily production'
    ],
    shopLink: '/shop/cheese'
  },
  
  'curated-gifts': {
    id: 'curated-gifts',
    name: 'Curated Gift Sets',
    category: 'gifts',
    tagline: 'Thoughtfully paired collections for every occasion.',
    description: 'Hand-selected combinations of our wines, spirits, and cheese—perfect for gifting or enjoying at home.',
    heroImage: 'https://images.unsplash.com/photo-1549488497-69a0cd444a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    story: 'We created these gift sets based on what we\'d want to receive ourselves. Each pairing has been carefully considered—the Tasting Trio introduces you to our core wines, while the Cheese & Wine Pairing matches our best chèvres with complementary bottles. These aren\'t corporate gift boxes; they\'re personal selections from our family to yours.',
    features: [
      'Hand-selected pairings',
      'Premium gift packaging',
      'Tasting notes included',
      'Ships across South Africa'
    ],
    shopLink: '/shop/gifts'
  },
  
  'wine-club-exclusive': {
    id: 'wine-club-exclusive',
    name: 'Wine Club Exclusives',
    category: 'wines',
    tagline: 'Limited releases available only to Wine Box members.',
    description: 'Our smallest production runs and experimental vintages, reserved for club members.',
    heroImage: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    story: 'As a Wine Box member, you get first access to our experimental wines and ultra-limited releases. These are the bottles we make just for fun—testing new blends, aging techniques, or vineyard blocks. Production is tiny (sometimes as few as 50 bottles), and they never make it to the general shop. It\'s our way of saying thank you to our most loyal supporters.',
    features: [
      'Members-only releases',
      'Limited to 50-200 bottles',
      'Experimental blends & techniques',
      'First access to new vintages'
    ],
    shopLink: '/wine-club'
  }
};
