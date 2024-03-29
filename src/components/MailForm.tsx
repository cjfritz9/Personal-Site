import React, { useState } from 'react';
import {
  Stack,
  FormControl,
  Input,
  Text,
  Flex,
  Textarea,
  Container,
  Heading,
  Button,
  Spinner,
  Tooltip
} from '@chakra-ui/react';
import { validateMailForm } from '../utils/helpers';
import sendMail from '../api/EmailAPI';

const MailForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    setIsLoading(true);
    const userInput = {
      name: '',
      email: '',
      message: ''
    };

    userInput.name = (
      document.getElementById('mf-name')! as HTMLInputElement
    ).value;
    userInput.email = (
      document.getElementById('mf-email')! as HTMLInputElement
    ).value;
    userInput.message = (
      document.getElementById('mf-msg')! as HTMLInputElement
    ).value;

    const formStatusMsg = validateMailForm(userInput);
    console.log(formStatusMsg);

    if (formStatusMsg !== 'Success') {
      setIsLoading(false);
      return setMessage(formStatusMsg);
    }

    const response = await sendMail(userInput);
    if (response.success) setMessage(response.success);
    if (response.error) setMessage(response.error);
    setIsLoading(false);
    (document.getElementById('mf-name')! as HTMLInputElement).value = '';
    (document.getElementById('mf-email')! as HTMLInputElement).value = '';
    (document.getElementById('mf-msg')! as HTMLInputElement).value = '';
  };

  return (
      <Stack w={['100%', '480px', '720px']}>
        <FormControl>
          <Stack gap='1rem' fontFamily='Poppins' color='Brand.Cyan'>
            <Stack gap='.5rem' onClick={() => setMessage('')}>
              <Flex gap='1.5rem' direction={['column', 'row']}>
                <Input id='mf-name' placeholder='Your Name' />
                <Input id='mf-email' placeholder='Your Email' />
              </Flex>
              <Textarea id='mf-msg' h={['184px']} placeholder='Your Message' />
            </Stack>
            <Flex
              direction={['column', 'row']}
              gap={['1rem', '0rem']}
              w='100%'
              fontFamily='Poppins'
              justify={message.length ? 'space-between' : 'flex-end'}
            >
              <Text
                opacity={message.length > 0 ? 1 : 0}
                transition='opacity .3s ease-in'
                fontWeight='bold'
                color={
                  message === 'Your Message Was Sent' ? 'Brand.Cyan' : 'red.200'
                }
              >
                {message.length > 0 && message}
              </Text>
              {/* <Tooltip label='Bugfixing 3/7/23'> */}
              <Button
                // isDisabled
                bgColor='Brand.Cyan'
                color='Brand.Charcoal'
                w={['100%', '10rem']}
                onClick={handleSend}
              >
                {isLoading ? <Spinner /> : 'Send'}
              </Button>
              {/* </Tooltip> */}
            </Flex>
          </Stack>
        </FormControl>
      </Stack>
  );
};

export default MailForm;
