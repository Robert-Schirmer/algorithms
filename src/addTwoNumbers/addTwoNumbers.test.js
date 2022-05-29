import test from "node:test";
import Assert from "../utils/Assert/index.js";
import addTwoNumbers from "./addTwoNumbers.js";

test("addTwoNumbers", async (t) => {
  await t.test("test 1", (t) => {
    const out = addTwoNumbers([2, 4, 3], [5, 6, 4]);
    Assert.arrayOrderEqual(out, [7, 0, 8]);
  });

  await t.test("test 2", (t) => {
    const out = addTwoNumbers([0], [0]);
    Assert.arrayOrderEqual(out, [0]);
  });

  await t.test("test 3", (t) => {
    const out = addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);
    Assert.arrayOrderEqual(out, [8, 9, 9, 9, 0, 0, 0, 1]);
  });
});
