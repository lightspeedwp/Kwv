/**
 * Site Content Configuration
 * 
 * **STATUS:** ✅ ACTIVE - Centralized site-wide content management
 * 
 * Centralized content management for Handcrafted Wines.
 * All text content, brand names, contact information, and social media details.
 * 
 * **Used By:** (5 files)
 * - `/components/shop/checkout/ContactInfo.tsx` - Pre-fill contact info
 * - `/components/shop/home/ShopNewsletter.tsx` - Newsletter section
 * - `/components/shop/home/ShopSocialSection.tsx` - Social media links
 * - `/components/shop/layout/ShopInfoFooter.tsx` - Footer content
 * - `/components/experiences/ExperiencePageLayout.tsx` - Contact details
 * 
 * **Contents:**
 * - Brand Information (name, tagline, founding year, location)
 * - Contact Information (phone, email, address, map embed)
 * - Social Media (hashtags, Instagram, Facebook, Twitter)
 * - Operating Hours
 * - Newsletter Configuration
 * - Shop Information
 * 
 * **Related Files:**
 * - `/data/farmStory.ts` - Detailed farm history, team, awards, experiences
 * - `/data/products.ts` - Product catalog
 * - `/data/newsPosts.ts` - News & blog posts
 * 
 * @package HandcraftedWines
 * @version 2.0
 * @lastUpdated 2026-03-15
 */

export const SITE_CONTENT = {
  // Brand Information
  brand: {
    name: 'Handcrafted Wines',
    tagline: 'Five Generations of Family Winemaking',
    foundedYear: 1918,
    location: 'Paarl, South Africa',
    description: 'A family-owned boutique wine farm nestled against Paarl Mountain, handcrafting award-winning wines, artisan spirits, and farmstead cheese for over 100 years.'
  },

  // Contact Information
  contact: {
    phone: '+27 21 807 3007',
    phoneFormatted: '021 807 3007',
    email: 'hello@handcraftedwines.co.za',
    salesEmail: 'sales@handcraftedwines.co.za',
    eventsEmail: 'events@handcraftedwines.co.za',
    functionsEmail: 'functions@handcraftedwines.co.za',
    address: {
      street: 'Kohler Street',
      area: 'Southern Paarl',
      city: 'Paarl',
      postalCode: '7646',
      country: 'South Africa',
      full: 'Kohler Street, Southern Paarl, Paarl, 7646'
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.107693214865!2d18.96402331520387!3d-33.76801668068368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdadcf7a06a71d%3A0x521940687263680!2sPaarl!5e0!3m2!1sen!2sza!4v1625000000000!5m2!1sen!2sza'
  },

  // Social Media
  social: {
    hashtags: '#HandcraftedWines #PaarlWines #BoutiqueWinery #SouthAfricanWine',
    hashtagsShop: '#HandcraftedWinesShop #WineLovers #CraftSpirits',
    hashtagsExperiences: '#HandcraftedWinesExperience #WineTasting #PaarlMountain',
    hashtagsEvents: '#HandcraftedWinesEvents #WinelandsWeddings #CorporateEvents',
    instagram: '@handcraftedwines',
    facebook: 'HandcraftedWinesPaarl',
    twitter: '@HCWines'
  },

  // Business Hours
  hours: {
    tastingRoom: {
      weekdays: 'Monday to Saturday: 09h00 - 16h30',
      sundays: 'Sunday: 11h00 - 16h00',
      holidays: 'Closed on Christmas Day (25th December)'
    },
    distillery: {
      weekdays: 'Monday to Friday: 09h00 - 17h00',
      notice: 'Bookings Essential'
    }
  },

  // Newsletter Content
  newsletter: {
    title: 'Join the Family',
    subtitle: 'Sign up for our newsletter and keep up to date with tastings, new releases, and exclusive farm events.',
    placeholder: 'Your email address',
    buttonText: 'Subscribe',
    successMessage: 'Thanks for joining the Handcrafted Wines family!',
    errorMessage: 'Oops! Something went wrong. Please try again.'
  },

  // Shop Content
  shop: {
    createAccountLabel: 'Create an account with Handcrafted Wines',
    pickupLocation: 'Farm Tasting Room',
    socialHeading: 'Share your experiences and adventures with us',
    freeShippingThreshold: 500,
    ageVerificationNotice: 'By completing this purchase, you confirm that you are 18 years or older. ID verification may be required upon delivery for alcohol products.'
  },

  // Venue Names
  venues: {
    main: 'Handcrafted Wines Farm',
    tastingRoom: 'Estate Tasting Room',
    cellar: 'Cathedral Cellar',
    distillery: 'House of Fire Distillery',
    dairy: 'Goat Dairy & Cheese Room',
    events: 'Winelands Event Space'
  },

  // Product Categories
  products: {
    wine: 'Estate Wines',
    spirits: 'Craft Spirits',
    cheese: 'Farmstead Cheese',
    gifts: 'Gift Sets'
  }
};

export default SITE_CONTENT;