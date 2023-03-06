import axios from 'axios';
const BASE_URL = 'https://baseurl12341234.com';

const sendMail = async (data: object) => {
  const response = await axios.post(`${BASE_URL}/api/mail`, data);

  console.log('server response', response);
};

export default sendMail;
