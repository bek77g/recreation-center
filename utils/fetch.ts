import client from '@/contentful';

export const getProvidesData = async () => {
  const res = await client.getEntries({
    content_type: 'provides',
  });

  return res.items.reduce((acc, rec) => [...acc, rec.fields], []);
};

export const getGalleryData = async () => {
  const res = await client.getEntries({
    content_type: 'gallery',
  });

  return res.items.reduce((acc, rec) => [...acc, rec.fields], []);
};

// export const postApplicationForm = async () => {
//   const res = await client.createEntry({
//     content_type: 'applicationForm',
//     fields: {},
//   });
//   return res;
// };
