import axios from 'axios';


export const contactMessage = (contactData) => async dispatch => {
    const res = await axios.post('https://calm-eyrie-44469.herokuapp.com/contact_us', contactData);
    console.log(res)
};

