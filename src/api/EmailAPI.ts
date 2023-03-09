import axios from 'axios';
const BASE_URL = 'https://mail-server-379822.uc.r.appspot.com';

export const serverWarmup = async () => {
  axios.get(`${BASE_URL}/_ah/warmup`)
}

const sendMail = async (data: object) => {
  const response = await axios.post(`${BASE_URL}/api/send-mail`, data);

  if (response.data.success) {
    return { success: 'Your Message Was Sent'}
  } else {
    return { error: 'Server Error'}
  }
};

export default sendMail;
