export async function onRequest() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://wiki.thesaiyanvictoria.com/</loc>
  </url>
  <url>
    <loc>https://wiki.thesaiyanvictoria.com/wiki/Main_Page</loc>
  </url>
  <!-- Add more <url><loc>…</loc></url> lines for your important wiki pages -->
</urlset>`;
  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=300"
    },
  });
}
