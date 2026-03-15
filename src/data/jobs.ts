/**
 * Jobs Data
 * 
 * Career opportunities at Handcrafted Wines.
 * All content uses warm, family-oriented voice and tone.
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Seasonal';
  postedDate: string;
  closingDate: string;
  summary: string;
  description: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  perks: string[];
  applyUrl?: string;
}

export const jobs: Job[] = [
  {
    id: 'winemaker-assistant-2024',
    title: 'Winemaker Assistant',
    department: 'Winemaking',
    location: 'Paarl, Western Cape',
    type: 'Full-time',
    postedDate: '2024-03-10',
    closingDate: '2024-04-15',
    summary: 'Join our passionate winemaking team and help craft award-winning wines from our estate vineyard.',
    description: [
      'We are looking for someone who is as obsessed with wine as we are. You will work alongside our head winemaker, learning the craft from grape to glass.',
      'This is not just a job—it is an opportunity to be part of something special. Every vintage tells a story, and you will help us write the next chapter.',
      'If you love the smell of fermenting grapes, do not mind getting your hands dirty, and want to make wine that people actually enjoy drinking, let us talk.'
    ],
    responsibilities: [
      'Assist with grape harvesting, crushing, and pressing during vintage',
      'Monitor fermentation temperatures and take daily samples',
      'Help with barrel topping, racking, and blending trials',
      'Maintain cellar cleanliness and equipment sanitation',
      'Keep detailed records of winemaking processes',
      'Participate in tasting panel sessions'
    ],
    requirements: [
      'Diploma or degree in Viticulture, Oenology, or related field',
      'At least 1 vintage season of hands-on cellar work',
      'Strong sensory evaluation skills (nose and palate)',
      'Physical fitness (lifting 20kg bags, working in hot/cold conditions)',
      'Willingness to work long hours during harvest (Feb-Apr)',
      'Valid driver license and own transport'
    ],
    niceToHave: [
      'Experience with small-batch, handcrafted wine production',
      'Knowledge of South African wine varieties and terroir',
      'Forklift license',
      'Basic lab skills (pH testing, TA analysis)'
    ],
    perks: [
      'Work with a small, passionate team on a family farm',
      'Wine allowance and staff discounts',
      'Opportunity to learn from award-winning winemakers',
      'Beautiful Paarl Mountain setting',
      'Staff wine tastings and vineyard lunches',
      'Career growth in a boutique winemaking environment'
    ]
  },
  {
    id: 'tasting-room-host-2024',
    title: 'Tasting Room Host',
    department: 'Hospitality',
    location: 'Paarl, Western Cape',
    type: 'Full-time',
    postedDate: '2024-03-12',
    closingDate: '2024-04-20',
    summary: 'Be the friendly face of Handcrafted Wines. Share our story, pour our wines, and create memorable experiences for our guests.',
    description: [
      'If you genuinely love meeting people and talking about wine (without being pretentious about it), this might be your dream job.',
      'You will welcome guests to our farm, guide them through wine and cheese tastings, and share the stories behind every bottle. Think of yourself as a storyteller, not a salesperson.',
      'We are looking for someone warm, knowledgeable, and passionate—someone who can make a first-time wine taster feel as comfortable as a seasoned sommelier.'
    ],
    responsibilities: [
      'Welcome guests and provide exceptional tasting experiences',
      'Conduct wine, cheese, and spirit tasting sessions',
      'Share the farm history and winemaking philosophy',
      'Process tasting bookings and retail sales',
      'Maintain tasting room presentation and stock levels',
      'Assist with private events and group tastings',
      'Handle customer inquiries via phone and email'
    ],
    requirements: [
      'Wine education (WSET Level 1 or equivalent minimum)',
      'At least 1 year experience in wine hospitality or retail',
      'Fluent in English (Afrikaans or other languages a plus)',
      'Excellent communication and storytelling skills',
      'Friendly, approachable personality',
      'Weekend and public holiday availability',
      'Valid driver license'
    ],
    niceToHave: [
      'WSET Level 2 or Cape Wine Academy certification',
      'Experience with cheese pairings',
      'Knowledge of craft spirits (grappa, brandy)',
      'Point-of-sale (POS) system experience',
      'Social media skills'
    ],
    perks: [
      'Work in a beautiful tasting room with mountain views',
      'Wine education and training opportunities',
      'Staff wine and cheese allowance',
      'Meet interesting people from around the world',
      'Invitations to exclusive tastings and events',
      'Supportive, family-oriented team environment'
    ]
  },
  {
    id: 'cheesemaker-2024',
    title: 'Artisan Cheesemaker',
    department: 'Dairy & Cheese Production',
    location: 'Paarl, Western Cape',
    type: 'Full-time',
    postedDate: '2024-03-08',
    closingDate: '2024-04-10',
    summary: 'Craft award-winning farmstead cheese from our own goat dairy. This is hands-on artisan work for someone who cares about quality.',
    description: [
      'We make cheese the old-fashioned way—by hand, in small batches, using milk from our own goats. If that sounds like your kind of thing, keep reading.',
      'You will be responsible for the entire cheesemaking process, from milking our goats to aging wheels of cheese in our dedicated maturation room.',
      'This role is for someone who takes pride in their craft, pays attention to the smallest details, and is not afraid of early mornings (goats do not sleep in).'
    ],
    responsibilities: [
      'Milk goats and ensure dairy hygiene standards',
      'Pasteurize milk and prepare cheese cultures',
      'Make fresh and aged cheeses using traditional methods',
      'Monitor aging rooms (temperature, humidity, turning wheels)',
      'Package and label finished cheeses for retail',
      'Maintain detailed production records',
      'Care for goat welfare and feeding schedules'
    ],
    requirements: [
      'Formal cheesemaking training or apprenticeship',
      'At least 2 years of hands-on cheesemaking experience',
      'Knowledge of dairy safety and hygiene regulations',
      'Physical fitness (standing, lifting, repetitive work)',
      'Early morning availability (goats need milking at 5:30am)',
      'Passion for artisan food production',
      'Valid driver license'
    ],
    niceToHave: [
      'Experience with goat dairy (as opposed to cow)',
      'Knowledge of French or Italian cheese styles',
      'Basic veterinary or animal husbandry skills',
      'Food safety certification (HACCP)'
    ],
    perks: [
      'Work with heritage-breed goats on a family farm',
      'Cheese allowance and staff discounts',
      'Learn traditional European cheesemaking techniques',
      'Small team with direct involvement in every batch',
      'Beautiful farm setting in the Cape Winelands',
      'Opportunity to create award-winning products'
    ]
  },
  {
    id: 'vineyard-assistant-2024',
    title: 'Vineyard Assistant (Seasonal)',
    department: 'Viticulture',
    location: 'Paarl, Western Cape',
    type: 'Seasonal',
    postedDate: '2024-03-15',
    closingDate: '2024-04-30',
    summary: 'Get your hands dirty in our estate vineyard. Seasonal work during harvest and pruning seasons for those who love the outdoors.',
    description: [
      'If you would rather work under the sun than stuck in an office, this is for you. Our vineyard is where everything begins.',
      'You will help with pruning, suckering, leaf removal, and harvest—hard physical work, but incredibly rewarding when you taste the finished wine.',
      'We are looking for reliable, hardworking people who take pride in doing things properly. No shortcuts, just quality viticulture.'
    ],
    responsibilities: [
      'Assist with seasonal vineyard tasks (pruning, suckering, thinning)',
      'Harvest grapes during vintage (Feb-April)',
      'Maintain vineyard equipment and trellising',
      'Monitor vine health and report issues to vineyard manager',
      'Help with irrigation setup and maintenance',
      'General farm maintenance and tidiness'
    ],
    requirements: [
      'Physical fitness and ability to work outdoors in all weather',
      'Experience in vineyard work (at least 1 season preferred)',
      'Reliable and punctual',
      'Willingness to work weekends during harvest',
      'Own transport to reach the farm',
      'Basic English or Afrikaans'
    ],
    niceToHave: [
      'Knowledge of vineyard pests and diseases',
      'Tractor or bakkie driving skills',
      'Irrigation system experience'
    ],
    perks: [
      'Work on a beautiful estate vineyard',
      'Gain hands-on viticulture experience',
      'Possibility of permanent employment for top performers',
      'Staff wine allowance',
      'Supportive team environment'
    ]
  },
  {
    id: 'marketing-coordinator-2024',
    title: 'Marketing & Social Media Coordinator',
    department: 'Marketing',
    location: 'Paarl, Western Cape (Hybrid)',
    type: 'Full-time',
    postedDate: '2024-03-05',
    closingDate: '2024-04-05',
    summary: 'Tell our story across social media, email, and content. Creative role for someone who loves wine, food, and beautiful storytelling.',
    description: [
      'We need someone who can make people fall in love with our farm—one Instagram post, email, and blog article at a time.',
      'This is not corporate marketing. It is storytelling. You will capture the beauty of harvest mornings, cheese-making sessions, and barrel tastings, and share it with the world.',
      'If you are a creative person who loves wine, understands digital marketing, and can write copy that feels human (not robotic), we want to hear from you.'
    ],
    responsibilities: [
      'Manage social media accounts (Instagram, Facebook, LinkedIn)',
      'Create engaging content (photos, videos, reels, stories)',
      'Write blog posts and email newsletters',
      'Coordinate photoshoots and content calendars',
      'Monitor social media engagement and analytics',
      'Assist with event promotion and wine club communications',
      'Collaborate with design and web teams'
    ],
    requirements: [
      'Degree or diploma in Marketing, Communications, or related field',
      'At least 2 years of social media and content marketing experience',
      'Strong writing and storytelling skills',
      'Photography and basic video editing skills',
      'Knowledge of social media platforms and scheduling tools',
      'Self-motivated and organized',
      'Passion for wine, food, and hospitality'
    ],
    niceToHave: [
      'Experience in the wine or food industry',
      'Adobe Creative Suite skills (Photoshop, Lightroom)',
      'Email marketing platform experience (Mailchimp, etc.)',
      'Basic SEO and Google Analytics knowledge',
      'Wine education (WSET or Cape Wine Academy)'
    ],
    perks: [
      'Work in a creative, supportive environment',
      'Flexible hybrid schedule (some remote work)',
      'Wine and cheese allowance',
      'Attend tastings, events, and farm experiences',
      'Build your portfolio with beautiful brand content',
      'Small team with direct impact on brand growth'
    ]
  }
];

/**
 * Get a job by ID
 */
export const getJobById = (id: string): Job | undefined => {
  return jobs.find(job => job.id === id);
};

/**
 * Get all active jobs (not past closing date)
 */
export const getActiveJobs = (): Job[] => {
  const today = new Date();
  return jobs.filter(job => new Date(job.closingDate) >= today);
};

/**
 * Get jobs by department
 */
export const getJobsByDepartment = (department: string): Job[] => {
  return jobs.filter(job => job.department === department);
};
