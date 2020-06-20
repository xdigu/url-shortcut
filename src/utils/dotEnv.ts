import * as dotEnv from 'dotenv';
import path from 'path';

const dot_env_file = path.resolve(__dirname, '..', '..', '.env');

dotEnv.config({ path: dot_env_file });
