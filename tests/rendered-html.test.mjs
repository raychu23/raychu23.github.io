import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Raymond Chu - Software Engineer<\/title>/i);
  assert.match(html, /Publications/);
  assert.match(html, /Projects/);
  assert.match(html, /Contact \/ Bio/);
  assert.match(html, /More about me/);
  assert.match(html, /churaymo@grinnell\.edu/);
  assert.match(html, /Architectural Trade-offs in Semantic Segmentation/);
  assert.match(html, /Multiple Graph Representations Generator/);
  assert.match(html, /raychu23\/Multiple-Graph-Representations-Generator/);
  assert.doesNotMatch(html, /Résumé|resume\.txt/i);
  assert.doesNotMatch(html, /Available for opportunities/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});
