import test from "node:test";
import Assert from "../utils/Assert/index.js";
import twoSum from "./twoSum.js";

test("twoSum", async (t) => {
  await t.test("test 1", (t) => {
    const out = twoSum([2, 7, 11, 15], 9);
    Assert.arrayEqual(out, [0, 1]);
  });

  await t.test("test 2", (t) => {
    const out = twoSum([3, 2, 4], 6);
    Assert.arrayEqual(out, [1, 2]);
  });

  await t.test("test 3", (t) => {
    const out = twoSum([3, 3], 6);
    Assert.arrayEqual(out, [0, 1]);
  });
});
