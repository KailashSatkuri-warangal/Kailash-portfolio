const fs = require('fs');

const pages = ['/', '/about', '/contact', '/privacy'];
const domain = 'https://your-actual-domain.com';

const sitemap = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        return `
          <url>
            <loc>${`${domain}${page}`}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
          </url>
        `;
      })
      .join('')}
  </urlset>
`;

fs.writeFileSync('public/sitemap.xml', sitemap);
