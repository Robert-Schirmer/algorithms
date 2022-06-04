import test from 'node:test';
import Assert from '../utils/Assert/index.js';
import maxArea from './maxArea.js';

test('maxArea test 1', async (t) => {
  await t.test('subtest 1', (t) => {
    const out = maxArea([]);
    Assert.strictEqual(out, 0);
  });

  await t.test('subtest 2', (t) => {
    const out = maxArea([0, 1]);
    Assert.strictEqual(out, 0);
  });

  await t.test('subtest 3', (t) => {
    const out = maxArea([1, 1]);
    Assert.strictEqual(out, 1);
  });

  await t.test('subtest 4', (t) => {
    const out = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
    Assert.strictEqual(out, 49);
  });

  await t.test('subtest 5', (t) => {
    const out = maxArea([1, 14, 89, 462, 12, 280, 96]);
    Assert.strictEqual(out, 560);
  });
});