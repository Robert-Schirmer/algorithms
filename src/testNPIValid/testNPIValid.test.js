import test from 'node:test';
import Assert from "../utils/Assert/index.js";
import testNPIValid from "./testNPIValid.js";

test("testNPIValid", async (t) => {
  await t.test("returns true for valid NPIs", (t) => {
    Assert.strictEqual(testNPIValid("1134296023"), true);
    Assert.strictEqual(testNPIValid("1245319599"), true);
    Assert.strictEqual(testNPIValid("1234567893"), true);
    Assert.strictEqual(testNPIValid("1234567844"), true);
    Assert.strictEqual(testNPIValid("9876543213"), true);
    Assert.strictEqual(testNPIValid("2020202026"), true);
    Assert.strictEqual(testNPIValid(2020202026), true);
    Assert.strictEqual(testNPIValid(9876543213), true);
    Assert.strictEqual(testNPIValid(1234567893), true);
  });

  await t.test("returns false for invalid NPIs", (t) => {
    Assert.strictEqual(testNPIValid("1234567894"), false);
    Assert.strictEqual(testNPIValid("9999999999"), false);
    Assert.strictEqual(testNPIValid("0000000000"), false);
    Assert.strictEqual(testNPIValid("2020202022"), false);
    Assert.strictEqual(testNPIValid(9999999999), false);
    Assert.strictEqual(testNPIValid(2020202022), false);
  });

  await t.test("returns false if not a number or 10 digits", (t) => {
    Assert.strictEqual(testNPIValid(null), false);
    Assert.strictEqual(testNPIValid(undefined), false);
    Assert.strictEqual(testNPIValid("abc123"), false);
    Assert.strictEqual(testNPIValid("abc1234566"), false);
    Assert.strictEqual(testNPIValid("98765432133"), false);
    Assert.strictEqual(testNPIValid("987654323"), false);
  });
});
