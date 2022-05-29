import test from "node:test";
import Assert from "../utils/Assert/index.js";
import lengthOfLongestSubstring from "./lengthOfLongestSubstring.js";

test("lengthOfLongestSubstring", async (t) => {
  await t.test("test 1", (t) => {
    const out = lengthOfLongestSubstring("abcabcbb");
    Assert.strictEqual(out, 3);
  });

  await t.test("test 2", (t) => {
    const out = lengthOfLongestSubstring("bbbbb");
    Assert.strictEqual(out, 1);
  });

  await t.test("test 3", (t) => {
    const out = lengthOfLongestSubstring("pwwkew");
    Assert.strictEqual(out, 3);
  });

  await t.test("test 4", (t) => {
    const out = lengthOfLongestSubstring("au");
    Assert.strictEqual(out, 2);
  });

  await t.test("test 5", (t) => {
    const out = lengthOfLongestSubstring("abcdefg");
    Assert.strictEqual(out, 7);
  });

  await t.test("test 6", (t) => {
    const out = lengthOfLongestSubstring("dvdf");
    Assert.strictEqual(out, 3);
  });

  await t.test("test 7", (t) => {
    const out = lengthOfLongestSubstring("bbtablud");
    Assert.strictEqual(out, 6);
  });

  await t.test("test 8", (t) => {
    const out = lengthOfLongestSubstring("aab");
    Assert.strictEqual(out, 2);
  });
});
