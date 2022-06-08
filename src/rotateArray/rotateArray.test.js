import test from 'node:test';
import Assert from '../utils/Assert/index.js';
import rotateArray from './rotateArray.js';

test('rotateArray', async (t) => {
  await t.test('subtest 1', (t) => {
    const out = rotateArray([1], 6);
    Assert.arrayEqual(out, [1]);
  });

  await t.test('subtest 2', (t) => {
    const out = rotateArray([0, 1, 2, 3, 3, 6, 9, 9, 12], 18);
    Assert.arrayEqual(out, [9, 9, 12, 0, 1, 2, 3, 3, 6]);
  });

  await t.test('subtest 3', (t) => {
    const out = rotateArray([], 10);
    Assert.arrayEqual(out, []);
  });

  await t.test('subtest 4', (t) => {
    const out = rotateArray([0, 1, 2, 3, 4, 5, 8, 8, 10, 100], 0);
    Assert.arrayEqual(out, [0, 1, 2, 3, 4, 5, 8, 8, 10, 100]);
  });

  await t.test('subtest 5', (t) => {
    const out = rotateArray([1, 2], 1001);
    Assert.arrayEqual(out, [2, 1]);
  });
})