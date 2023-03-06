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
  Spinner
} from '@chakra-ui/react';
import { validateMailForm } from '../utils/helpers';
import sendMail from '../api/EmailAPI';

const MailForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
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

    if (formStatusMsg !== 'Success') return setMessage(formStatusMsg);

    const response = await sendMail(userInput);
    console.log(response);
    
  };

  return (
    <Container h='100%'>
      <Heading variant='contentHeading'>CONTACT ME</Heading>
      <Stack w='720px' alignSelf='center'>
        <FormControl>
          <Stack gap='1rem' fontFamily='Poppins' color='Brand.Cyan'>
            <Flex gap='1.5rem'>
              <Input id='mf-name' placeholder='Your Name' />
              <Input id='mf-email' placeholder='Your Email' />
            </Flex>
            <Textarea id='mf-msg' placeholder='Your Message' />
            <Flex
              w='100%'
              fontFamily='Poppins'
              justify={message.length ? 'space-between' : 'flex-end'}
            >
              <Text
                opacity={message.length > 0 ? 1 : 0}
                transition='opacity .3s ease-in'
                fontWeight='bold'
                color='red.200'
              >
                {message.length > 0 && message}
              </Text>
              <Button
                bgColor='Brand.Cyan'
                color='Brand.Charcoal'
                w='10rem'
                onClick={handleSend}
              >
                {isLoading ? <Spinner /> : 'Send'}
              </Button>
            </Flex>
          </Stack>
        </FormControl>
      </Stack>
    </Container>
  );
};

export default MailForm;
