import { client } from '@/contentful';

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

export const postApplicationForm = async () => {
  // const space = await client.getSpace(process.env.NEXT_CONTENTFUL_SPACE_ID);
  // const environment = await space.getEnvironment('master');
  // /**
  //  * Entry creation and publish
  //  */
  // let entry = await environment.createEntry('application', {
  //   /* ... */
  // });
  // // reassign `entry` to have the latest version number
  // entry = await entry.publish();
  // /**
  //  * Asset creation and publish
  //  */
  // let asset = await environment.createAssetWithId(faker.datatype.number(4).toString(), {
  //   /* ... */
  // });
  // // reassign `asset` to have the latest version number
  // asset = await asset.processForAllLocales();
  // asset = await asset.publish();
  // /**
  //  * Update entry with new asset
  //  */
  // entry.fields = {
  //   sys: {
  //     id: asset.sys.id,
  //     name: 'QWW',
  //     phone: 0,
  //     note: '',
  //     quests: 0,
  //     dateIn: 0,
  //     dateOut: 0,
  //     reserveType: 0,
  //   },
  // };
  // entry = await entry.update();
  // entry = await entry.publish();
};
