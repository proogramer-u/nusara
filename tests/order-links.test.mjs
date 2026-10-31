import test from "node:test";
import assert from "node:assert/strict";
import { validateFormUrl, resolveOrderUrl } from "../src/lib/order-links.ts";
test("missing, unsafe and non-responder URLs never become order links", () => {
  for (const value of [
    "",
    "javascript:alert(1)",
    "http://forms.gle/abc",
    "https://forms.gle.evil.test/abc",
    "https://docs.google.com/forms/d/abc/edit",
    "https://example.com",
    "https://user:pass@forms.gle/abc",
  ])
    assert.equal(validateFormUrl(value), null);
});
test("accepts HTTPS Google responder URLs and rejects empty form IDs", () => {
  for (const value of [
    "https://forms.gle/realFormId",
    "https://docs.google.com/forms/d/e/realFormId/viewform?usp=pp_url&entry.1=Pashmina",
  ])
    assert.equal(validateFormUrl(value), value);
  assert.equal(validateFormUrl("https://forms.gle/"), null);
});
test("uses verified category link, falls back to valid base, or stays pending", () => {
  const base = "https://forms.gle/baseFormId";
  const product = "https://forms.gle/categoryFormId";
  assert.equal(resolveOrderUrl(base, product), product);
  assert.equal(resolveOrderUrl(base, "https://example.com"), base);
  assert.equal(resolveOrderUrl("", ""), null);
});
