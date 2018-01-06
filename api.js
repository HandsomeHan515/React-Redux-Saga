import { normalize } from 'normalizr';

import { request, address } from './service/';
import * as state from './store';

const get = (config, schema, name) => request(config)
  .then(resp => {
    const schemaData = normalize(resp, schema)
    const { count, previous, next } = schemaData.result
    Object.assign(schemaData.entities[name], { count, previous, next })
    return schemaData
  });

const base = config => request(config).then(resp => resp);

export const list = config => base(config);

export const create = config => base(
  Object.assign({}, {
    method: 'POST',
  }, config)
);

export const update = config => base(
  Object.assign({}, {
    method: 'PATCH',
  }, config)
);

export const del = config => base(
  Object.assign({}, {
    method: 'DELETE',
    isJson: false,
  }, config)
)

export const getAds = () => get({
  url: address.ads,
  hasCert: false,
}, { results: [state.adSchema] }, 'ads');

export const updateAds = payload => update({
  url: `${address.ads}${payload.id}/`,
  body: JSON.stringify(payload),
  hasCert: false,
})

export const createAds = payload => create({
  url: address.ads,
  body: JSON.stringify(payload),
  hasCert: false,
})

export const delAds = payload => del({
  url: `${address.ads}${payload.id}/`,
  hasCert: false,
})

export const getFlowers = () => get({
  url: address.flowers,
  hasCert: false,
}, { results: [state.flowerSchema] }, 'flowers')
