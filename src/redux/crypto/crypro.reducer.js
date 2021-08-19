import { UPDATE_CRYPTO } from './crypto.types';

const initialState = {
  name: null,
  description: null,
  images: [],
  homepageUrl: null,
  currentPriceUsd: null,
  marketCapUsd: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CRYPTO:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
