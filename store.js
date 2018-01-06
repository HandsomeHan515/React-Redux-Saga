import { normalize, schema } from 'normalizr';

import { ads } from '../data';

const data = {
  ads: ads,
}

export const adSchema = new schema.Entity('ads');

export const stateSchema = {
  ads: [adSchema],
  flowers: [flowerSchema],
}

export const initialState = normalize(data, stateSchema)
