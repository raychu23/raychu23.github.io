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
  assert.match(html, /My work spans LLMs, transformer architectures, computer vision/);
  assert.match(html, /systems-oriented/);
  assert.doesNotMatch(html, /I build AI systems/i);
  assert.match(html, /churaymo@grinnell\.edu/);
  assert.match(html, /Student · Software engineer · AI\/ML researcher/);
  assert.match(html, /Grinnell College \(Iowa\)/);
  assert.match(html, /Architectural Trade-offs in Semantic Segmentation/);
  assert.match(html, /From Laboratory Model to Statewide Deployment/);
  assert.match(html, /wrong-way-driving-cover\.png/);
  assert.match(html, /wrong-way-driving-detection-system\.pdf/);
  assert.match(html, /Traffic Safety/);
  assert.match(html, /PyTorch/);
  assert.match(html, /Fine-Tuning/);
  assert.match(html, /ONNX Inference/);
  assert.match(html, /Multiple Graph Representations Generator/);
  assert.match(html, /Documentation Insights System/);
  assert.match(html, /full-stack RAG system/);
  assert.match(html, /FastAPI/);
  assert.match(html, /pgvector/);
  assert.match(html, /github\.com\/raychu23\/Documentation-Insights-System/);
  assert.match(html, /documentation-insights-app\.png/);
  assert.match(html, /Graph Theory/);
  assert.match(html, /raymond-chu-photo\.jpg/);
  assert.match(html, /graph-representations-cover\.png/);
  assert.doesNotMatch(html, /\/_next\/image\?/);
  assert.match(html, /softarchitech\.cs\.grinnell\.edu\/multiple-graph-representations-generator/);
  assert.ok((html.match(/Featured project/g) ?? []).length >= 2);
  assert.doesNotMatch(html, /Selected project/);
  assert.doesNotMatch(html, />2025</);
  assert.doesNotMatch(html, /Résumé|resume\.txt/i);
  assert.doesNotMatch(html, /Available for opportunities/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});
