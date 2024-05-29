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

// export const postApplicationForm = async () => {
//   const res = await client.createEntry({
//     content_type: 'applicationForm',
//     fields: {},
//   });
//   return res;
// };
