export const validateMailForm = ({
  name,
  email,
  message
}: {
  name: string;
  email: string;
  message: string;
}) => {
  if (!name.length || !email.length || !message.length) {
    return 'Please fill out the entire form';
  }
  if (!email.includes('@') || !email.includes('.')) {
    return 'Invalid Email';
  }
  return 'Success';
};
