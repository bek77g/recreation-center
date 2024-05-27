import { api } from '@/lib/api';

export const getProvidesData = async () => {
  const res = await api.get('/provides');
  return res;
};

export const getGalleryData = async () => {
  const res = await api.get('/gallery');
  return res;
};
