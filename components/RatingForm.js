import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Stack,
  TextField,
  FormControl,
} from '@mui/material';

import { LoadingButton } from '@mui/lab';

import useRequest from 'hooks/useRequest';

const RatingForm = () => {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [doRequest, error, status] = useRequest({
    url: 'http://localhost:1337/api/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    onSuccess: () => router.push('/')
  });

  const handleSubmit = async () => {
    await doRequest();
  };

  return (
    <FormControl>
      <Stack spacing={3}>
        <TextField
          autoComplete="email"
          type="email"
          label="Email"
          value={email}
          error={status === 'error'}
          onChange={e => setEmail(e.target.value)}
        />

        <TextField
          autoComplete="current-password"
          type="password"
          label="Hasło"
          value={password}
          error={status === 'error'}
          onChange={e => setPassword(e.target.value)}
        />
      </Stack>

      <LoadingButton
        size="large"
        type="submit"
        variant="contained"
        loading={status === 'pending'}
        onClick={handleSubmit}
      >
        Dodaj
      </LoadingButton>
    </FormControl>
  );
};

export default RatingForm;