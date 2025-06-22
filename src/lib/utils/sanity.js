import { createClient } from '@sanity/client';

const config = {
  projectId: '5gcrx30a',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-06-22',
}

const sanityClient = createClient(config);
export default sanityClient;