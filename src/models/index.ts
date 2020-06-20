import { Schema, model } from 'mongoose'

const StoredUrl = new Schema({
  _id: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

export const StoredUrlSchema = model('StoredUrl', StoredUrl);
