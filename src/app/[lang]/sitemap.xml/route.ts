export async function GET(): Promise<Response> {
  const baseUrl: string = "https://altoukhyglass.com"; // رابط موقعك الأساسي

  // الصفحات الثابتة
  const staticPages: string[] = [
    "", // الصفحة الرئيسية
    "services",
    "projects",
    "contact",
    "profile",
    "suppliers",
    "about",
  ];

  // إنشاء خريطة الموقع بصيغة XML
  const sitemap: string = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(
        (page) => `
    <url>
      <loc>${baseUrl}/${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
      )
      .join("")}
  </urlset>`;

  // إرسال الملف كاستجابة
  return new Response(sitemap.trim(), {
    // إزالة أي فراغات زائدة
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
a