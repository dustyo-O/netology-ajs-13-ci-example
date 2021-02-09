import calculateCashback from '../data';

test('cacheback amount 1000000', () => {
  expect(calculateCashback(1000000)).toBe(50000);
});

test('cacheback amount 100000', () => {
  expect(calculateCashback(100000)).toBe(5000);
});

test('cacheback amount 50000', () => {
  expect(calculateCashback(50000)).toBe(1000);
});

test('cacheback amount 10000', () => {
  expect(calculateCashback(10000)).toBe(200);
});

test('cacheback amount 5000', () => {
  expect(calculateCashback(5000)).toBe(50);
});

test('cacheback amount 1000', () => {
  expect(calculateCashback(1000)).toBe(10);
});

test('cacheback amount 100', () => {
  expect(calculateCashback(100)).toBe(0);
});
