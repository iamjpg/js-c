import { UPDATE_CRYPTO } from './crypto.types';

export const updateCrypto = (payload = {}) => {
  return {
    type: UPDATE_CRYPTO,
    payload,
  };
};
