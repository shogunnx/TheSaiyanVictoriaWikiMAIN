export async function onRequest() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://wiki.thesaiyanvictoria.com/</loc></url>
  <url><loc>https://wiki.thesaiyanvictoria.com/wiki/Main_Page</loc></url>
  <url><loc>https://wiki.thesaiyanvictoria.com/wiki/Victoria_Black</loc></url>
  <url><loc>https://wiki.thesaiyanvictoria.com/wiki/Wargirl</loc></url>
  <url><loc>https://wiki.thesaiyanvictoria.com/wiki/Binary</loc></url>
  <url><loc>https://wiki.thesaiyanvictoria.com/wiki/Vanessa</loc></url>
  <url><loc>https://wiki.thesaiyanvictoria.com/wiki/Harmony</loc></url>
  <url><loc>https://wiki.thesaiyanvictoria.com/wiki/Evil_Victoria</loc></url>
  <url><loc>https://wiki.thesaiyanvictoria.com/wiki/Gas_Mask_Clan</loc></url>
  <url><loc>https://wiki.thesaiyanvictoria.com/wiki/Merged_Zamasu</loc></url>
  <url><loc>https://wiki.thesaiyanvictoria.com/wiki/Broly_Raid</loc></url>
  <url><loc>https://wiki.thesaiyanvictoria.com/wiki/Rescue_of_Wargirl</loc></url>
  <!-- Add more links below as needed -->
</urlset>`;
  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=300"
    },
  });
}
