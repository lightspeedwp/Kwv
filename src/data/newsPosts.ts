/**
 * News Posts Data
 * 
 * Blog-style news posts for Handcrafted Wines' News & Stories page.
 * Features farm updates, harvest reports, awards, family stories, and behind-the-scenes content.
 * 
 * @typedef {Object} NewsPost
 * @property {string} id - Unique identifier/slug for the post
 * @property {string} title - Post title
 * @property {string} date - Publication date (format: "Month DD, YYYY")
 * @property {string} category - Post category for filtering
 * @property {string} excerpt - Short preview text (1-2 sentences)
 * @property {string} image - Featured image URL
 * @property {boolean} [featured] - Optional flag for hero/featured posts
 * 
 * Categories:
 * - Harvest: Vineyard work, picking season, vintage reports
 * - Awards: Competition wins, accolades, recognition
 * - Farm Life: Day-to-day farm activities, animals, family stories
 * - Winemaking: Technical insights, process, winemaker notes
 * - New Releases: Product launches, special editions
 * - Sustainability: Environmental initiatives, green practices
 * - Behind the Scenes: Distillery, cheese-making, production
 * - Events: Weddings, corporate events, celebrations
 */

export interface NewsPost {
  id: string;
  title: string;
  date: string;
  category: 'Harvest' | 'Awards' | 'Farm Life' | 'Winemaking' | 'New Releases' | 'Sustainability' | 'Behind the Scenes' | 'Events';
  excerpt: string;
  image: string;
  featured?: boolean;
}

/**
 * All News Posts (Sorted chronologically, newest first)
 */
export const NEWS_POSTS: NewsPost[] = [
  {
    id: 'harvest-2026',
    title: 'Harvest Diary 2026: Early Morning Pickings and Family Traditions',
    date: 'March 10, 2026',
    category: 'Harvest',
    excerpt: 'Join us for a behind-the-scenes look at our 2026 harvest. Pieter shares why we still pick grapes by hand at dawn, just like his great-grandfather did in 1918.',
    image: 'https://images.unsplash.com/photo-1597843797221-e0e1f74dd7e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    featured: true
  },
  {
    id: 'cheese-awards-2026',
    title: 'Our Wine-Washed Rind Cheese Wins Gold at SA Dairy Championships',
    date: 'February 28, 2026',
    category: 'Awards',
    excerpt: 'Annelie\'s handcrafted cheese has been recognized! Our wine-washed rind aged in Shiraz won gold—a proud moment for our family dairy.',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'brandy-release-2026',
    title: 'Introducing Our 10-Year Reserve Brandy: A Decade of Patience',
    date: 'February 15, 2026',
    category: 'New Releases',
    excerpt: 'Hennie has been nursing this brandy in French oak for ten years. Only 200 bottles available—each one tells a story of time, care, and tradition.',
    image: 'https://images.unsplash.com/photo-1569529465841-dfecd0758f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'vineyard-winter',
    title: 'Winter in the Vineyard: Pruning Season with Liezl',
    date: 'January 20, 2026',
    category: 'Farm Life',
    excerpt: 'Our vineyard manager shares why winter pruning is the most important work we do all year. Every cut shapes next year\'s harvest.',
    image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'shiraz-trophy-2025',
    title: 'Estate Shiraz 2023 Takes Trophy at Paarl Wine Show',
    date: 'December 15, 2025',
    category: 'Awards',
    excerpt: 'Our flagship Shiraz has won the Best Red Wine trophy! Pieter says it\'s the mountain terroir and old vines—we say it\'s his magic touch.',
    image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'goat-kids-2025',
    title: 'Baby Goats Have Arrived! A Busy Spring at the Dairy',
    date: 'November 28, 2025',
    category: 'Farm Life',
    excerpt: 'It\'s kidding season at our goat dairy. Annelie shares photos and stories of the newest members of our farm family.',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'sustainability-solar',
    title: 'Going Solar: Our Journey to Energy Independence',
    date: 'October 10, 2025',
    category: 'Sustainability',
    excerpt: 'We\'ve installed solar panels on the cellar roof! A big step toward our goal of being 100% renewable by 2028.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'family-recipes',
    title: 'Four Generations of Family Recipes: Ouma\'s Potjiekos Paired with Chenin Blanc',
    date: 'September 22, 2025',
    category: 'Farm Life',
    excerpt: 'Annelie shares her grandmother\'s famous slow-cooked stew recipe and why it pairs perfectly with our Chenin Blanc.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'grappa-workshop',
    title: 'Behind the Copper Stills: Making Grappa the Old-World Way',
    date: 'August 15, 2025',
    category: 'Behind the Scenes',
    excerpt: 'Hennie takes us through the distillery to show how we make small-batch grappa from grape pomace. Tradition meets craftsmanship.',
    image: 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'wedding-season',
    title: 'Wedding Season at the Farm: Love, Laughter, and Wine',
    date: 'July 20, 2025',
    category: 'Events',
    excerpt: 'This season we\'ve hosted 12 beautiful weddings on our farm. Here are some of our favorite moments captured under Paarl Mountain.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c9f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'chenin-vintage',
    title: 'Why 2025 Was an Exceptional Year for Chenin Blanc',
    date: 'June 10, 2025',
    category: 'Winemaking',
    excerpt: 'Pieter shares his harvest notes and why this vintage of Chenin is one of the best we\'ve made in a decade.',
    image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'mountain-wildflowers',
    title: 'Spring Wildflowers on Paarl Mountain: A Photographer\'s Dream',
    date: 'May 15, 2025',
    category: 'Farm Life',
    excerpt: 'The mountain is blooming! Liezl takes us on a wildflower walk through the fynbos surrounding our vineyard.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  }
];

/**
 * News Post Categories
 * Used for filtering in the News page UI
 */
export const NEWS_CATEGORIES = [
  'All Stories',
  'Harvest',
  'Awards',
  'Farm Life',
  'Winemaking',
  'New Releases',
  'Sustainability',
  'Behind the Scenes',
  'Events'
] as const;

/**
 * Helper function to get posts by category
 */
export const getPostsByCategory = (category: string): NewsPost[] => {
  if (category === 'All Stories') {
    return NEWS_POSTS;
  }
  return NEWS_POSTS.filter(post => post.category === category);
};

/**
 * Helper function to get featured post
 */
export const getFeaturedPost = (): NewsPost | undefined => {
  return NEWS_POSTS.find(post => post.featured);
};

/**
 * Helper function to get post by ID
 */
export const getPostById = (id: string): NewsPost | undefined => {
  return NEWS_POSTS.find(post => post.id === id);
};
