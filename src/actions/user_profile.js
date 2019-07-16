import axios from 'axios';
import { BASE_URL } from './api';
import { GET_ERRORS } from './types';

// CREATE_USER_PROFILE
export const create_userprofile = (userData) => async dispatch => {
    try {
        const res = await axios.post(`${BASE_URL}/user_details`, userData);
        console.log(res)
    }
    catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};
