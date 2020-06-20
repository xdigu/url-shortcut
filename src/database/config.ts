import { connect, ConnectionOptions } from 'mongoose';

const {
  DB_USER,
  DB_PASSWORD,
  DB_SCHEMA,
} = process.env;

const urlConnect = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0-ckyzo.mongodb.net/${DB_SCHEMA}?retryWrites=true&w=majority`;

const connection_options: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export function connection() {
  connect(urlConnect, connection_options);
}
