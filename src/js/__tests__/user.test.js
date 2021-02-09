import { loadUser } from '../user';

import { httpGet } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('loadUser', () => {
  httpGet.mockReturnValue('{}');
  loadUser(1);

  expect(httpGet).toBeCalledTimes(1);
  expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});

test('loadUser 1', () => {
  httpGet.mockReturnValue('{}');
  loadUser(2);

  expect(httpGet).toBeCalledTimes(1);
  expect(httpGet).toBeCalledWith('http://server:8080/users/2');
});

// SyntaxError: Unexpected token < in JSON at position 0
