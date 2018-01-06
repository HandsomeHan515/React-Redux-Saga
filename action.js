//action 创建函数
const action = (type, payload = {}) => ({ type, payload });

//ads
export const GET_AD = 'GET_AD';
export const GET_ADS = 'GET_ADS';

export const getAd = () => action(GET_AD);
export const getAds = () => action(GET_ADS);

export const UPDATE_AD = 'UPDATE_AD';
export const UPDATE_ADS = 'UPDATE_ADS';

export const updateAd = payload => action(UPDATE_AD, payload);
export const updateAds = payload => action(UPDATE_ADS, payload);

export const ADD_AD = 'ADD_AD';
export const ADD_ADS = 'ADD_ADS';

export const addAd = payload => action(ADD_AD, payload);
export const addAds = payload => action(ADD_ADS, payload);


export const DEL_AD = 'DEL_AD';
export const DEL_ADS = 'DEL_ADS';

export const delAd = payload => action(DEL_AD, payload);
export const delAds = payload => action(DEL_ADS, payload);
