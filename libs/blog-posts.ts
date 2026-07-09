// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'solar-payback-central-texas',
    title:    'Solar Payback in Central Texas: What Waco Homeowners Should Expect',
    excerpt:  'How long until solar pays for itself in Waco and Central Texas? Real factors that move payback — rates, incentives, system size, and production — explained without the sales pitch.',
    category: 'Savings',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/home/welcome/after.jpg',
    imageAlt: 'Solar payback guide for Central Texas homeowners',
    featured: true,
  },
  {
    slug:     'battery-backup-worth-it-texas',
    title:    'Is Battery Backup Worth It in Texas?',
    excerpt:  'Storm outages, time-of-use rates, and energy independence — when a home battery makes sense in Central Texas, and when it may not.',
    category: 'Storage',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/home/services/service-1.jpg',
    imageAlt: 'Home battery backup worth it in Texas guide',
  },
  {
    slug:     'how-to-choose-solar-installer',
    title:    'How to Choose a Solar Installer in Waco, TX',
    excerpt:  'Licenses, warranties, design quality, and red flags. A practical checklist for hiring a solar installer you can trust in Central Texas.',
    category: 'Buying Guide',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/home/welcome/hero-main.jpg',
    imageAlt: 'How to choose a solar installer in Waco TX',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
