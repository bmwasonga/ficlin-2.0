import { createClient } from 'nhost-js-sdk';

import { BACKEND_ENDPOINT } from '@/utils/config';

const nhostClient = createClient({
  baseURL: BACKEND_ENDPOINT
});

const auth = nhostClient.auth;
const storage = nhostClient.storage;

export { auth, storage };
