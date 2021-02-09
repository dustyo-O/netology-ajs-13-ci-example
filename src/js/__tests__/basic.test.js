import basic from '../basic';

test('basic 0', () => {
  expect(basic([])).toBe(0);
});

test('basic 2', () => {
  expect(basic([1, 2, 10])).toBe(13);
});

test('basic 3', () => {
  expect(basic([1])).toBe(1);
});
