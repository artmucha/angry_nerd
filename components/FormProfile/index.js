import { useState, useContext } from 'react';
import Link from 'next/link';

import Button from 'components/Button';
import Heading from 'components/Heading';
import TextField from 'components/TextField';

import useRequest from 'hooks/useRequest';
import { FlashContext } from 'providers/FlashProvider';

import * as S from './styles'

const FormProfile = ({ title, token, user }) => {
  const [doRequest] = useRequest();
  const [values, setValues] = useState({ platforms: '', about: '' });
  const { showFlashMesage } = useContext(FlashContext);

  const handleChange = (field, value) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSuccess = (msg) => {
    showFlashMesage(msg, 'success')
  };

  const updateProfile = async(e) => {
    e.preventDefault();
    await doRequest({
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/users/${user.id}`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      },
      body: {
        platforms: values.platforms,
        about: values.about
      },
      onSuccess: () => handleSuccess('Twój profil został zaktualizowany!')
    });
  };

  return (
    <>
      <Heading lineBottom color="black" size="small">
        {title}
      </Heading>
  
      <S.Form>
        <TextField
          name="username"
          placeholder="Login"
          label="Login"
          initialValue={user.username}
          iconPosition={0}
          disabled
        />
  
        <TextField
          name="email"
          type="email"
          placeholder="E-mail"
          initialValue={user.email}
          label="E-mail"
          disabled
          iconPosition={0}
        />
  
        <TextField
          name="platforms"
          placeholder="Na czym grasz?"
          label="Mój sprzęt"
          iconPosition={0}
          initialValue={user.platforms}
          onInputChange={(v) => handleChange('platforms', v)}
        />
  
        <TextField
          name='about'
          placeholder='Napisz kilka słów o sobie'
          iconPosition={0}
          label='O mnie'
          initialValue={user.about}
          rows="5"
          as="textarea"
          onInputChange={(v) => handleChange('about', v)}
        />
  
        <S.ButtonContainer>
          <Link href={`/forgot-password?email=${user.email}`} passHref>
            <Button minimal size="medium" as="a">
              Resetuj Hasło
            </Button>
          </Link>
          <Button onClick={(e) => updateProfile(e)} size="medium">Zapisz</Button>
        </S.ButtonContainer>
      </S.Form>
    </>
  );
};

export default FormProfile;