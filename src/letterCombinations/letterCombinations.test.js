import test from "node:test";
import Assert from "../utils/Assert/index.js";
import letterCombinations from "./letterCombinations.js";

test("letterCombinations", async (t) => {
  await t.test("test 1", (t) => {
    const out = letterCombinations("23");
    Assert.arrayEqual(out, ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
  });

  await t.test("test 2", (t) => {
    const out = letterCombinations("");
    Assert.arrayEqual(out, []);
  });

  await t.test("test 3", (t) => {
    const out = letterCombinations("2");
    Assert.arrayEqual(out, ["a", "b", "c"]);
  });

  await t.test("test 4", (t) => {
    const out = letterCombinations("298");
    Assert.arrayEqual(out, ["awt", "awu", "awv", "axt", "axu", "axv", "ayt", "ayu", "ayv", "azt", "azu", "azv", "bwt", "bwu", "bwv", "bxt", "bxu", "bxv", "byt", "byu", "byv", "bzt", "bzu", "bzv", "cwt", "cwu", "cwv", "cxt", "cxu", "cxv", "cyt", "cyu", "cyv", "czt", "czu", "czv"]);
  });
});
