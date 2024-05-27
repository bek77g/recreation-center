import contentfulManagement from 'contentful-management';
import { EnvironmentGetter } from 'contentful-typescript-codegen';

const { NEXT_CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN, NEXT_CONTENTFUL_SPACE_ID } = process.env;

const getContentfulEnvironment: EnvironmentGetter = () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: NEXT_CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  });

  return contentfulClient
    .getSpace(NEXT_CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment('master'));
};

module.exports = getContentfulEnvironment;
