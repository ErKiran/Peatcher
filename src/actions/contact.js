import axios from 'axios';


export const contactMessage = (contactData) => async dispatch => {
    const res = await axios.post('http://localhost:5000/contact_us', contactData);
    console.log(res)
};

