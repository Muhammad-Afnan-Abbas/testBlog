
import {AUTH, LOGOUT} from '../Components/contants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      console.log(action?.type)
    default:
      return state;
  }
};

export default authReducer;