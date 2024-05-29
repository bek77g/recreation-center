import { createClient } from 'contentful';
import { createClient as createClientManagement } from 'contentful-management';

const client = createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

const contentful = createClientManagement({
  accessToken: process.env.NEXT_CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
});

const clientManagement = async () => {
  const res = await contentful.getSpace(process.env.NEXT_CONTENTFUL_SPACE_ID);
  const environment = await res.getEnvironment('master');
  return environment;
};

export { client, clientManagement };
