import { client, clientManagement } from '@/contentful';

export const getReserveTypes = async () => {
  const res = await client.getEntries({
    content_type: 'reserveType',
  });

  return res.items.reduce((acc, rec) => [...acc, { ...rec.fields, id: rec.sys.id }], []);
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

export const getApplications = async () => {
  const res = await client.getEntries({
    content_type: 'application',
  });

  return res.items.reduce((acc, rec) => [...acc, rec.fields], []);
};

export const getHealings = async () => {
  const res = await client.getEntries({
    content_type: 'healing',
  });

  return res.items.reduce((acc, rec) => [...acc, rec.fields], []);
};

export const getAttractions = async () => {
  const res = await client.getEntries({
    content_type: 'attractions',
  });

  return res.items
    .sort((a, b) => a.sys.createdAt.localeCompare(b.sys.createdAt))
    .reduce((acc, rec) => [...acc, rec.fields], []);
};

export const postApplicationForm = async (body) => {
  const res = await clientManagement();
  const data = await res.createEntry('application', {
    fields: {
      name: {
        en: body.name,
      },
      phone: {
        en: parseInt(body.phone),
      },
      note: {
        en: body.note,
      },
      quests: {
        en: body.quests ? parseInt(body.quests) : null,
      },
      dateIn: {
        en: body.dateIn,
      },
      dateOut: {
        en: body.dateOut,
      },
      reserveType: {
        en: {
          sys: {
            linkType: 'Entry',
            id: body.reserveType,
          },
        },
      },
    },
  });
  return data;
};
