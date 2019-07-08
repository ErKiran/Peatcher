import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { SET_CURRENT_USER } from './types';

// Register User
export const registerUser = (userData, history) => async dispatch => {
    await axios.post('https://calm-eyrie-44469.herokuapp.com/register', userData);
};

export const loginUser = userData => async dispatch => {
    try {
        const res = await axios.post('https://calm-eyrie-44469.herokuapp.com/login', userData);
        const { token } = res.data;
        console.log(token)
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
    }
    catch (e) {
        console.log(e);
    }


};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};
