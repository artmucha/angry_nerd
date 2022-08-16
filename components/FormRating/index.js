import { useState } from 'react';

import useRequest from 'hooks/useRequest';
import { fetchAPI } from "utils/helpers";

import { FormWrapper, FormLoading, FormError } from 'components/Form';
import Button from 'components/Button';
import SelectField from 'components/SelectField';
import TextField from 'components/TextField';

const FormRating = ({game, token, user}) => {
  const [formError, setFormError] = useState('');
  const [values, setValues] = useState({ rating: 1, review: '' });

  const [doRequest, status] = useRequest();

  const handleChange = (field, value) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  // const setRating = async (method) => {

  //   const data = await doRequest({
  //     url: `${process.env.NEXT_PUBLIC_API_URL}/api/ratings`,
  //     method: method,
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': token ? `Bearer ${token}` : '',
  //     },
  //     body: {
  //       data: {
  //         gameId: game.id,
  //         value: Number(values.rating),
  //         game: game,
  //         user: { id: user.id, username: user.username }
  //       } 
  //     }
  //     // onSuccess: () => router.push('/')
  //   });

  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError('');

    const me = await fetchAPI('/users/me', 
      {
        populate: ['ratings'],
      }, 
      {
        headers: {
          'Authorization': token ? `Bearer ${token}` : '',
        }
      });

    const data = await doRequest({
          url: `${process.env.NEXT_PUBLIC_API_URL}/api/ratings`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : '',
          },
          body: {
            data: {
              gameId: game.id,
              value: Number(values.rating),
              game: game.id,
            } 
          }
          // onSuccess: () => router.push('/')
        });

        const ratings = await doRequest({
          url: `${process.env.NEXT_PUBLIC_API_URL}/api/users/me`,
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : '',
          },
          body: {
            data: {
              ratings: data,
            } 
          }
          // onSuccess: () => router.push('/')
        });
    
    
  };

  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <SelectField
          name='rating'
          label='Moja ocena *'
          options={options}
          required={true}
          onInputChange={(v) => handleChange('rating', v)}
        />
        <TextField
          name='review'
          placeholder='Podziel sie swoja opinią nt gry'
          iconPosition={0}
          label='Moja opinia (opcjonalnie)'
          onInputChange={(v) => handleChange('review', v)}
          rows="5"
          as="textarea"
        />

        <Button type="submit" size="large" fullWidth disabled={status === 'pending'}>
          {status === 'pending' ? <FormLoading /> : <span>Dodaj</span>}
        </Button>
      </form>
    </FormWrapper>
  )
};

export default FormRating;