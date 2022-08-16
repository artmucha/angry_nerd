import { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined';

import { AuthContext } from 'providers/AuthProvider';
import useRequest from 'hooks/useRequest';

import { FormLink, FormWrapper, FormLoading, FormError } from 'components/Form';
import Button from 'components/Button';
import TextField from 'components/TextField';

import * as S from './styles';

const FormSignIn = () => {
  const [formError, setFormError] = useState('');
  const [values, setValues] = useState({ identifier: '', password: '' });
  const router = useRouter();
  const { setAuthData } = useContext(AuthContext);
  const [doRequest, status] = useRequest();

  const handleInput = (field, value) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError('');

    const auth = await doRequest({
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: values,
      onSuccess: () => router.push('/')
    });

    auth.error ? setFormError(auth.error.message) : setAuthData(auth);
  };

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="identifier"
          placeholder="Email"
          type="email"
          onInputChange={(v) => handleInput('identifier', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Hasło"
          type="password"
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <Link href="/forgot-password" passHref>
          <S.ForgotPassword>Zapomniałeś hasła?</S.ForgotPassword>
        </Link>

        <Button type="submit" size="large" fullWidth disabled={status === 'pending'}>
          {status === 'pending' ? <FormLoading /> : <span>Zaloguj się</span>}
        </Button>

        <FormLink>
          Nie masz konta?{' '}
          <Link href="/rejestracja">
            <a>Zarejestruj się</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
};

export default FormSignIn;