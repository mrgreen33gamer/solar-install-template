// src/app/sitemap.xml/route.ts
// SunPeak Solar — XML Sitemap
// Covers: all static pages, all 6 core service pages, all 3 industry pages, blog posts
import { NextResponse } from 'next/server';
import { getAllPosts } from '&/blog-posts';

export const revalidate = 0;

export async function GET() {
  const baseUrl = 'https://www.sunpeaksolar.com';
  const today   = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  const staticPages = [
    { url: '/',               priority: '1.0',  changefreq: 'weekly'  },
    { url: '/about',          priority: '0.9',  changefreq: 'monthly' },
    { url: '/services',       priority: '0.9',  changefreq: 'weekly'  },
    { url: '/industries',     priority: '0.85', changefreq: 'monthly' },
    { url: '/service-areas',  priority: '0.85', changefreq: 'monthly' },
    { url: '/contact',        priority: '0.8',  changefreq: 'monthly' },
    { url: '/blogs',          priority: '0.7',  changefreq: 'weekly'  },
    { url: '/privacy-policy', priority: '0.4',  changefreq: 'yearly'  },
  ];

  // ── Core service pages ─────────────────────────────────────────────────────
  const coreServices = [
    { url: '/services/residential-solar',  priority: '0.95', changefreq: 'weekly'  },
    { url: '/services/commercial-solar',   priority: '0.90', changefreq: 'weekly'  },
    { url: '/services/battery-storage',    priority: '0.90', changefreq: 'weekly'  },
    { url: '/services/ev-charger-solar',   priority: '0.85', changefreq: 'monthly' },
    { url: '/services/system-monitoring',  priority: '0.85', changefreq: 'monthly' },
    { url: '/services/solar-maintenance',  priority: '0.85', changefreq: 'monthly' },
  ];

  // ── Industry pages ─────────────────────────────────────────────────────────
  const industries = [
    { url: '/industries/homebuilders',          priority: '0.80', changefreq: 'monthly' },
    { url: '/industries/agriculture',           priority: '0.80', changefreq: 'monthly' },
    { url: '/industries/commercial-facilities', priority: '0.80', changefreq: 'monthly' },
  ];

  // ── Blog pages ─────────────────────────────────────────────────────────────
  const blogPages = getAllPosts().map((post: any) => ({
    url: `/blogs/${post.slug}`,
    priority: '0.70',
    changefreq: 'monthly',
  }));

  const allPages = [
    ...staticPages,
    ...coreServices,
    ...industries,
    ...blogPages,
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  allPages.forEach(({ url, priority, changefreq }) => {
    xml += `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
  });

  xml += '</urlset>';

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
    },
  });
}
