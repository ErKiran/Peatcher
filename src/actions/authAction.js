import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {
    axios
        .post('http://localhost:3000/register', userData)
        .then(res => history.push('/login'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const loginUser = userData => async dispatch => {
    try {
        const res = await axios.post('http://localhost:5000/login', userData);
        const { session_token } = res.data;
        console.log(session_token)
        localStorage.setItem('jwtToken', session_token);
        setAuthToken(session_token);
        const decoded = jwt_decode(session_token);
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
