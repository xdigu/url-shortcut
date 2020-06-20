
export function isUrl(url: string) {
  const url_regex: RegExp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

  return url_regex.test(url);
}

export function parseUrl(url: string) {
  const parsed_url = url.match(/^[a-zA-Z]+:\/\//) ? url : 'http://' + url;

  return parsed_url;
}

export function responseMessage(status_code: number, message: string) {
  const response = {
    status_code,
    data: {
      message,
    },
  };

  return response;
}

export function responseData(status_code: number, data: any) {
  const response = {
    status_code,
    data: data,
  };

  return response;
}
