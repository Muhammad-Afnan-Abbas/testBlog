import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import { reducer as toastr } from 'react-redux-toastr';
const rootReducer = combineReducers({
  authReducer,
  toastr,
});
export default rootReducer;