import * as actionTypes from './actions';

export const adsResults = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_ADS:
      return [
        ...state,
        ...action.payload.result.results
      ]

    case actionTypes.ADD_ADS:
      return [
        ...state,
        action.payload.id
      ]

    case actionTypes.DEL_ADS:
      let newData = state.slice()
      return newData.filter(item => item !== action.payload.id)

    default:
      return state
  }
}

export const adsEntities = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ADS:
      return Object.assign(state, action.payload.entities.ads)

    case actionTypes.ADD_ADS:
      return Object.assign(state, {
        [action.payload.id]: action.payload
      })

    case actionTypes.UPDATE_ADS:
      // Why? 使用Object.assign()redu中的数据该表，但是界面不渲染
      // return Object.assign(state, {
      //   [action.payload.id]: action.payload
      // })
      return {
        ...state,
        [action.payload.id]: action.payload
      }

    default:
      return state
  }
}
