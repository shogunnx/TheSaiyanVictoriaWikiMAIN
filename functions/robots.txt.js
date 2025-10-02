export async function onRequest() {
  const body = `User-agent: *
Allow: /

Sitemap: https://wiki.thesaiyanvictoria.com/sitemap.xml
`;
  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=300"
    },
  });
}
