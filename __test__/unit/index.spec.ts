import { isUrl, parseUrl, responseMessage, responseData } from '../../src/services/utils';

test('should be a truthy url', () => {
  const urls = [
    'http://www.google.com',
    'http://google.com',
    'https://www.google.com',
    'https://google.com',
    'google.com',
  ];

  urls.forEach(url => {
    const is_url = isUrl(url);

    expect(is_url).toBeTruthy();
  });
});

test('should not be a truthy url', () => {
  const urls = [
    'www://com.',
    '://asdasd.com',
    'mYNamE',
  ];

  urls.forEach(url => {
    const is_url = isUrl(url);

    expect(is_url).not.toBeTruthy();
  });
});

test('should parse an url', () => {
  const urls = [
    'google.com',
    'yahoo.com',
    'apple.com',
  ];

  urls.forEach(url => {
    const parsed_url = parseUrl(url);

    const contain_http = parsed_url.includes('http://');

    expect(contain_http).toBeTruthy();
  });
});

test('should parse a message to response', () => {
  const message = 'Hello world';

  const parsed_message = responseMessage(200, message);

  expect(parsed_message).toHaveProperty('data');
  expect(parsed_message.data).toHaveProperty('message');
  expect(parsed_message.data.message).toEqual(message);
});

test('should parse a data to response', () => {
  const data = { hello: 'world' };

  const parsed_data = responseData(200, data);

  expect(parsed_data).toHaveProperty('data');
  expect(parsed_data.data).toHaveProperty('hello');
  expect(parsed_data.data).toEqual(data);
});
