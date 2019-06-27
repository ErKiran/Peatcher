import { combineReducers } from 'redux';
import authReducer from './authReducer';
<<<<<<< HEAD
import contactReducer from './contactReducer';
=======
>>>>>>> 3fceaf55aa0d13a822c447b73d674b603758dd31
import errorReducer from './errorReducer';


export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
<<<<<<< HEAD
  contact: contactReducer
=======
>>>>>>> 3fceaf55aa0d13a822c447b73d674b603758dd31
});
