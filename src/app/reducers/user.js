import { REQUEST_USER, RESPONSE_USER } from '../actions';

const user = (state = null, action) => {
  switch (action.type) {
    case REQUEST_USER:
      return { ...state, id: action.id };
    case RESPONSE_USER:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default user;
