import { take, call, put, fork, all } from 'redux-saga/effects';

import * as Action from './actions';
import * as Api from './api';

export function* getAds() {
  while (true) {
    yield take(Action.GET_AD);

    try {
      const ads = yield call(Api.getAds);
      yield put({ type: Action.GET_ADS, payload: ads });
    } catch (error) {
      console.log('ads error: %o', error)
    }
  }
}

export function* updateAds() {
  while (true) {
    const { payload } = yield take(Action.UPDATE_AD);

    try {
      const ads = yield call(Api.updateAds, payload);
      yield put({ type: Action.UPDATE_ADS, payload: ads })
    } catch (error) {
      console.log('ads error: %o', error)
    }
  }
}

export function* addAds() {
  while (true) {
    const { payload } = yield take(Action.ADD_AD);

    try {
      const ads = yield call(Api.createAds, payload);
      yield put({ type: Action.ADD_ADS, payload: ads })
    } catch (error) {
      console.log('ads error: %o', error)
    }
  }
}

export function* delAds() {
  while (true) {
    const { payload } = yield take(Action.DEL_AD);

    try {
      yield call(Api.delAds, payload);
      yield put({ type: Action.DEL_ADS, payload: payload })
    } catch (error) {
      console.log('ads error: %o', error)
    }
  }
}

export function* getFlowers() {
  while (true) {
    yield take(Action.GET_AD);

    try {
      let flowers = yield call(Api.getFlowers);
      yield put({ type: Action.GET_FLOWERS, payload: flowers });
    } catch (error) {
      console.log('flowers error: %o', error)
    }
  }
}

const watchingSagas = [
  fork(getAds),
  fork(updateAds),
  fork(addAds),
  fork(delAds),
  fork(getFlowers),
]

export default function* root() {
  yield all([
    ...watchingSagas,
  ])
}

