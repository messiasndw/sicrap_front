import { FETCH, STORE } from './types'

export const fetch = (payload) => {
    return {
        type: FETCH,
        payload
    };
};

export const store = (payload) => {
    return {
        type: STORE,
        payload
    };
};