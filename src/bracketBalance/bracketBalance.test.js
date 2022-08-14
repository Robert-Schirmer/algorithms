import test from "node:test";
import Assert from "../utils/Assert/index.js";
import bracketBalance from "./bracketBalance.js";

test("bracketBalance", async (t) => {
  await t.test("test 1", (t) => {
    const out = bracketBalance("(a)c");
    Assert.strictEqual(out, "Balanced");
  });

  await t.test("test 2", (t) => {
    const out = bracketBalance("(a)c{12");
    Assert.strictEqual(out, "Not Balanced: 4");
  });

  await t.test("test 3", (t) => {
    const out = bracketBalance("[()]{}{[()()]()}");
    Assert.strictEqual(out, "Balanced");
  });

  await t.test("test 4", (t) => {
    const out = bracketBalance("[()]{}{[(){()]()}");
    Assert.strictEqual(out, "Not Balanced: 10");
  });

  await t.test("test 5", (t) => {
    const out = bracketBalance("[(as]i)said");
    Assert.strictEqual(out, "Not Balanced: 1");
  });

  await t.test("test 6", (t) => {
    const out = bracketBalance("[]()}");
    Assert.strictEqual(out, "Not Balanced: 4");
  });
});
