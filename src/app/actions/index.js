export const REQUEST_USER = 'REQUEST_USER';
export const RESPONSE_USER = 'RESPONSE_USER';

export function requestUser(id) {
  return {
    type: REQUEST_USER,
    id
  };
}

export function responseUser(payload) {
  return {
    type: RESPONSE_USER,
    payload
  };
}
