import { Document } from 'mongoose';
import { generate } from 'shortid';
import { isUrl, responseData, responseMessage, parseUrl } from '@services/utils';
import { StoredUrlSchema } from '@models/index';
import { STATUS_CODE } from '@constants/index';

interface Url extends Document {
  _id: string;
  url?: string;
}

const { HOST, PORT } = process.env;

class Urls {
  async storeUrl(url: string) {
    const is_url = isUrl(url);
    const pased_url = parseUrl(url);

    if (!is_url) {
      return responseMessage(STATUS_CODE.bad_resquest, 'Bad request. url informed is not valid');
    }

    const url_id = generate();

    const url_to_store = {
      _id: url_id,
      url: pased_url,
    };

    const stored_url = await StoredUrlSchema.create(url_to_store)
      .catch(() => { throw new Error('Error to store url.'); });

    await stored_url.save();

    const short_url = `http://${HOST}:${PORT}/${url_id}`;

    return responseMessage(STATUS_CODE.success, short_url);
  }

  async index() {
    const urls: Url[] = await StoredUrlSchema.find().sort({ date: -1 }).limit(10);

    const serialized_urls = urls.map((url) => ({ hash: url._id, url: url.url }));

    return responseData(STATUS_CODE.success, serialized_urls);
  }

  async getUrl(urlHash: string) {
    const url: Url = await StoredUrlSchema.findById(urlHash)
      .catch(() => { throw new Error('Error on get url.'); });

    if (!url) {
      return responseMessage(STATUS_CODE.not_found, 'Url was not found.');
    }

    return responseData(STATUS_CODE.success, url.url);
  }
}

export const UrlsService = new Urls();
