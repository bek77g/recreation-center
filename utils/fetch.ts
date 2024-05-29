import client from '@/contentful';

export const getReserveTypes = async () => {
  const res = await client.getEntries({
    content_type: 'reserveType',
  });

  return res.items.reduce((acc, rec) => [...acc, rec.fields], []);
};

export const getProvidesData = async () => {
  const res = await client.getEntries({
    content_type: 'provides',
  });

  return res.items.reduce((acc, rec) => [...acc, rec.fields], []);
};

export const getGalleryData = async (name: string = '') => {
  const res = await client.getEntries({
    content_type: 'gallery',
  });

  return res.items.reduce((acc, rec) => [...acc, rec.fields], []).find((el) => el.name === name);
};

export const postApplicationForm = () => {
  client
    .getSpace(process.env.NEXT_CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment('application'))
    .then((environment) =>
      environment.createContentType({
        fields: [
          {
            name: 'QWW',
            phone: 0,
            note: '',
            quests: 0,
            dateIn: 0,
            dateOut: 0,
            reserveType: 0,
          },
        ],
      })
    )
    .then((contentType) => console.log(contentType))
    .catch(console.error);
};
