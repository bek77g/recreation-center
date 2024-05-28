import type { Asset, Entry } from "contentful";

export interface TypeGalleryFields {
    cover?: Asset;
}

export type TypeGallery = Entry<TypeGalleryFields>;
