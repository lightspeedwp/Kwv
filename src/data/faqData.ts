/**
 * FAQ Data
 * 
 * **STATUS:** ✅ ACTIVE - Frequently Asked Questions content
 * 
 * Centralized FAQ content for Handcrafted Wines. All questions and answers
 * organized by category for easy maintenance and reuse across the site.
 * 
 * **Extracted From:** `/pages/company/FAQ.tsx` (lines 23-186)
 * **Extracted Date:** 2026-03-15
 * 
 * **Used By:**
 * - `/pages/company/FAQ.tsx` - Main FAQ page
 * - (Future) Section-specific FAQ components
 * 
 * **Structure:**
 * - 6 categories (About, Products, Visiting, Wine Club, Shopping, Events)
 * - 30 total questions
 * - Each question has: question text, answer text
 * - Each category has: id, title, icon, questions array
 * 
 * **Categories:**
 * 1. About Our Farm (5 questions) - Farm history, location, sustainability
 * 2. Our Products (5 questions) - Wines, spirits, cheese
 * 3. Visiting the Farm (6 questions) - Hours, accessibility, directions
 * 4. The Wine Box (5 questions) - Wine club membership
 * 5. Shopping & Orders (5 questions) - Payment, shipping, returns
 * 6. Events & Functions (4 questions) - Weddings, corporate events
 * 
 * **Dynamic Content:**
 * - Some answers reference farmStory.location data (address)
 * - Import farmStory if you need to interpolate dynamic values
 * 
 * @package HandcraftedWines
 * @version 1.0
 * @lastUpdated 2026-03-15
 */

import { farmStory } from './farmStory';

/**
 * Individual FAQ item
 */
export interface FAQItem {
  /** Question text */
  question: string;
  /** Answer text (supports dynamic interpolation) */
  answer: string;
}

/**
 * FAQ Category grouping
 */
export interface FAQCategory {
  /** Unique category identifier */
  id: string;
  /** Display title */
  title: string;
  /** Emoji icon for visual representation */
  icon: string;
  /** Array of questions in this category */
  questions: FAQItem[];
}

/**
 * All FAQ categories and questions
 * 
 * @constant
 * @type {FAQCategory[]}
 */
export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: 'about',
    title: 'About Our Farm',
    icon: '🏡',
    questions: [
      {
        question: "How long has Handcrafted Wines been in operation?",
        answer: `We were established in 1918 by our great-grandfather, Johannes van der Berg. That makes us over 108 years old! We're now in our fourth generation of family winemaking, with Pieter van der Berg as our current winemaker, continuing the traditions passed down through the family.`
      },
      {
        question: "Where is your farm located?",
        answer: `We're nestled against Paarl Mountain in the heart of Paarl, South Africa, about 60km from Cape Town. Our exact address is ${farmStory.location.address.street}, ${farmStory.location.address.city}, ${farmStory.location.address.postalCode}. The location is stunning—you can see the vineyards stretching up the mountain slopes.`
      },
      {
        question: "What makes Handcrafted Wines different from other wineries?",
        answer: "We're a true family farm, not a corporate operation. Everything we make is handcrafted in small batches—from our wines to our grappa to our farmstead cheese. Pieter personally selects every barrel, Annelie handcrafts every wheel of cheese, and Hennie distills every bottle of grappa. You won't find mass production here, just passion and meticulous attention to detail."
      },
      {
        question: "Who runs the farm?",
        answer: `Our farm is run by the fourth generation of the van der Berg family. Pieter is our winemaker, Annelie makes our artisan cheese, Hennie runs the distillery, and Liezl manages the vineyards. We also have a dedicated team of 25+ staff who've been with us for years—they're part of the family too.`
      },
      {
        question: "Are you certified organic or sustainable?",
        answer: `We follow integrated production (IPW) standards and practice sustainable farming, but we're not officially certified organic. We believe in working with nature, not against it—minimal intervention in the vineyard, natural fermentation, and responsible water and energy use. Our goats graze between the vines, which is nature's way of weed control!`
      }
    ]
  },
  {
    id: 'products',
    title: 'Our Products',
    icon: '🍷',
    questions: [
      {
        question: "What products do you make?",
        answer: "We handcraft three types of products: wines (reds, whites, rosé), craft spirits (grappa and brandy), and artisan cheese made from our own goat's milk. All three are made right here on the farm using traditional methods."
      },
      {
        question: "How many wines do you produce?",
        answer: `We make 6 core wines: Shiraz, Cabernet Sauvignon, Chenin Blanc, Chardonnay, Rosé, and our Red Blend. All are estate-grown, meaning the grapes come from our own vineyard. We produce small batches—typically 500-2,000 bottles per vintage—so once they're gone, they're gone.`
      },
      {
        question: "What's the difference between your grappa and brandy?",
        answer: "Our grappa is made from grape pomace (the skins and seeds left over after winemaking) and has a bold, aromatic character. Our brandy is aged in oak barrels for 5-10 years and has a smooth, refined flavor. Both are handcrafted by Hennie in our on-farm distillery using traditional copper pot stills."
      },
      {
        question: "Can I taste before I buy?",
        answer: "Absolutely! We offer wine tastings daily in our Tasting Room (10am-4pm). You can try 5 wines for R80, which includes a cheese pairing. We also offer spirit tastings and full farm tours. Walk-ins are welcome, but we recommend booking ahead for groups of 6 or more."
      },
      {
        question: "Do your wines contain sulfites?",
        answer: "Yes, like most wines, ours contain sulfites (sulfur dioxide), which act as a preservative. We use minimal amounts—only what's necessary to keep the wine stable. If you have a sulfite allergy, please let us know and we can recommend our lowest-sulfite options."
      }
    ]
  },
  {
    id: 'visiting',
    title: 'Visiting the Farm',
    icon: '🚗',
    questions: [
      {
        question: "Do I need to book in advance to visit?",
        answer: "Walk-ins are welcome for tastings at our Tasting Room (open daily 10am-4pm). However, we recommend booking ahead for farm tours, group tastings (6+ people), or if you're visiting on a weekend or public holiday. You can book online, call us at +27 21 807 3007, or WhatsApp us."
      },
      {
        question: "What are your opening hours?",
        answer: "Our Tasting Room is open Monday-Saturday from 10am to 4pm, and Sundays from 10am to 2pm (summer only—closed Sundays in winter). Farm tours run at 11am and 2pm daily by appointment. The farm office is open Monday-Friday, 9am-5pm."
      },
      {
        question: "Is the farm child-friendly?",
        answer: "Yes! Children are very welcome. We have outdoor space for them to run around, and kids absolutely love visiting our goat dairy. We don't have a formal play area, but the farm is a great place for families to explore together."
      },
      {
        question: "Is the farm pet-friendly?",
        answer: "Well-behaved dogs are welcome in our outdoor areas, but please keep them on a leash. Unfortunately, pets aren't allowed in the Tasting Room or on guided tours. We have water bowls available, and there's plenty of shade."
      },
      {
        question: "Is your farm wheelchair accessible?",
        answer: "Our Tasting Room and main buildings are wheelchair accessible. Some parts of the farm tour involve uneven terrain (vineyard paths, gravel), so please call ahead if you need accessibility accommodations and we'll do our best to plan a route that works for you."
      },
      {
        question: "How far is the farm from Cape Town?",
        answer: "We're about 60km from Cape Town—roughly a 50-minute drive up the N1. Take Exit 47 (Paarl/Wellington), turn right onto Main Road, continue for 3km, then turn left onto Paarl Mountain Road. We're 2km up the mountain on the right. Free parking is available on-site."
      }
    ]
  },
  {
    id: 'wine-club',
    title: 'The Wine Box (Wine Club)',
    icon: '📦',
    questions: [
      {
        question: "What is The Wine Box?",
        answer: "The Wine Box is our wine club membership. You'll receive a handpicked selection of wines (and sometimes spirits or cheese!) delivered to your door four times a year—March, June, September, and December. Pieter personally selects each bottle, and you get farm updates, tasting notes, and exclusive member benefits."
      },
      {
        question: "How much does membership cost?",
        answer: "We have three tiers: The Taster (R450/quarter for 3 bottles), The Enthusiast (R850/quarter for 6 bottles), and The Collector (R1,600/quarter for 12 bottles). All tiers include free delivery, 10% discount on additional purchases, and early access to new releases."
      },
      {
        question: "Can I cancel my membership?",
        answer: "Yes, you can pause or cancel anytime—no long-term commitment required. Just let us know before the next shipment (at least 7 days in advance). We want you to enjoy being part of The Wine Box family, not feel locked in."
      },
      {
        question: "Can I customize what's in my box?",
        answer: "Currently, our boxes are curated by Pieter based on the season and what's ready to drink. However, if you have strong preferences (e.g., no white wines, only spirits), just let us know and we'll do our best to accommodate. We also offer gift memberships if you'd like to give someone a subscription."
      },
      {
        question: "Do you ship nationwide?",
        answer: "Yes! We ship to all major cities and towns in South Africa via courier. Delivery is free for Wine Box members. For non-members, shipping is R120 for orders under R1,000, and free for orders over R1,000."
      }
    ]
  },
  {
    id: 'shopping',
    title: 'Shopping & Orders',
    icon: '🛒',
    questions: [
      {
        question: "Can I buy wine directly from the farm?",
        answer: "Absolutely! Our Tasting Room has all our wines, spirits, and cheese available for purchase. You can also order online through our website and we'll ship to you. We offer free shipping on orders over R1,000."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept Visa, Mastercard, Instant EFT, and SnapScan. If you're visiting the farm in person, we also accept cash. Unfortunately, we don't accept American Express or Diners Club at this time."
      },
      {
        question: "How long does shipping take?",
        answer: "Orders are dispatched within 2-3 business days and typically arrive within 3-5 business days, depending on your location. We use a reliable courier service and provide tracking information once your order ships."
      },
      {
        question: "What if a bottle arrives broken?",
        answer: "We pack every order carefully, but accidents happen. If a bottle arrives damaged, please email us a photo at hello@handcraftedwines.co.za within 48 hours of delivery and we'll send a replacement immediately—no questions asked."
      },
      {
        question: "Do you offer gift wrapping or gift cards?",
        answer: "Yes! We offer gift boxes with custom messaging, and we also have digital gift cards available in any amount. Perfect for birthdays, anniversaries, or corporate gifts. Just select the gift option at checkout or contact us for bulk corporate orders."
      }
    ]
  },
  {
    id: 'events',
    title: 'Events & Functions',
    icon: '🎉',
    questions: [
      {
        question: "Can we host our wedding at your farm?",
        answer: "Yes! We host intimate weddings and special celebrations on the farm. Our venues can accommodate 80-200 guests depending on the setup. We provide the venue, tables, chairs, and of course, the wine. You'll need to arrange catering, but we can recommend trusted partners. Email events@handcraftedwines.co.za to inquire."
      },
      {
        question: "Do you host corporate events?",
        answer: "Absolutely. We offer team-building experiences, corporate tastings, and private venue hire for functions. Our setting is perfect for leadership retreats, client entertainment, or year-end celebrations. Contact us to discuss your needs and we'll create a custom package."
      },
      {
        question: "What's included in venue hire?",
        answer: "Venue hire includes 6 hours of access, tables and chairs, an event coordinator, basic sound system, and wine service. You'll need to arrange your own catering, décor, and entertainment, but we can recommend vendors we trust. Pricing starts at R15,000 for weekdays and R25,000 for weekends."
      },
      {
        question: "Can we bring our own alcohol?",
        answer: "We prefer that guests enjoy our estate wines and spirits, but we understand if you have specific preferences. There's a corkage fee of R100 per bottle if you bring your own wine, and R150 per bottle for spirits. We don't allow outside beer or ciders."
      }
    ]
  }
];

/**
 * Helper Functions
 */

/**
 * Get all questions from a specific category
 * @param categoryId - The category identifier
 * @returns Array of FAQ items or empty array if not found
 */
export const getQuestionsByCategory = (categoryId: string): FAQItem[] => {
  const category = FAQ_CATEGORIES.find(cat => cat.id === categoryId);
  return category?.questions || [];
};

/**
 * Get a specific category by ID
 * @param categoryId - The category identifier
 * @returns FAQCategory object or undefined if not found
 */
export const getCategoryById = (categoryId: string): FAQCategory | undefined => {
  return FAQ_CATEGORIES.find(cat => cat.id === categoryId);
};

/**
 * Search all FAQs by keyword
 * @param searchTerm - The search term
 * @returns Array of matching questions with category info
 */
export const searchFAQs = (searchTerm: string): Array<FAQItem & { categoryId: string; categoryTitle: string }> => {
  const results: Array<FAQItem & { categoryId: string; categoryTitle: string }> = [];
  const term = searchTerm.toLowerCase();
  
  FAQ_CATEGORIES.forEach(category => {
    category.questions.forEach(question => {
      if (
        question.question.toLowerCase().includes(term) ||
        question.answer.toLowerCase().includes(term)
      ) {
        results.push({
          ...question,
          categoryId: category.id,
          categoryTitle: category.title
        });
      }
    });
  });
  
  return results;
};

/**
 * Get total number of questions
 * @returns Total count of FAQ items
 */
export const getTotalQuestionCount = (): number => {
  return FAQ_CATEGORIES.reduce((total, category) => total + category.questions.length, 0);
};

/**
 * Get all category IDs
 * @returns Array of category identifiers
 */
export const getCategoryIds = (): string[] => {
  return FAQ_CATEGORIES.map(cat => cat.id);
};
