import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  AccountCircle,
  Email,
  ErrorOutline,
  Lock
} from '@styled-icons/material-outlined';

import { AuthContext } from 'providers/AuthProvider';
import useRequest from 'hooks/useRequest';

import { FormWrapper, FormLink, FormLoading, FormError } from 'components/Form';
import Button from 'components/Button';
import TextField from 'components/TextField';

const FormSignUp = () => {
  const [formError, setFormError] = useState('');
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: ''
  });
  const router = useRouter();
  const { setAuthData } = useContext(AuthContext);
  const [doRequest, status] = useRequest();

  const handleInput = (field, value) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError('');

    const auth = await doRequest({
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local/register`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: values
      // onSuccess: () => router.push('/')
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
          name="username"
          placeholder="Login"
          type="text"
          onInputChange={(v) => handleInput('username', v)}
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Hasło"
          type="password"
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth disabled={status === 'pending'}>
          {status === 'pending' ? <FormLoading /> : <span>Zarejestruj</span>}
        </Button>

        <FormLink>
          Masz konto?{' '}
          <Link href="/logowanie">
            <a>Zaloguj się</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp;