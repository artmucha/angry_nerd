import { useState, useEffect } from 'react';

import useRequest from 'hooks/useRequest';
import { fetchAPI } from "utils/helpers";

import { FormWrapper, FormLoading, FormError } from 'components/Form';
import Button from 'components/Button';
import SelectField from 'components/SelectField';
import TextField from 'components/TextField';

const FormRating = ({game, token}) => {
  const [formError, setFormError] = useState('');
  const [values, setValues] = useState({ rating: 1, review: '' });
  const [user, setUser] = useState({});
  const [doRequest, status] = useRequest();
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    const fetchMe = async() => {
      const me = await fetchAPI('/users/me', 
        { populate: ['ratings', 'reviews']}, 
        { headers: {'Authorization': token ? `Bearer ${token}` : ''}
      });
      setUser(me);
    }

    fetchMe();
  }, [values]);

  const handleChange = (field, value) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const postRating = async() => {
    await doRequest({
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
  };

  const updateRating = async(id) => {
    await doRequest({
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/ratings/${id}`,
      method: 'PUT',
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
  };


  // Reviews

  const postReview = async() => {
    await doRequest({
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/reviews`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      },
      body: {
        data: {
          gameId: game.id,
          value: values.review,
          game: game.id,
          rating: values.rating
        } 
      }
      // onSuccess: () => router.push('/')
    });
  };

  const updateReview = async(id) => {
    await doRequest({
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/reviews/${id}`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      },
      body: {
        data: {
          value: values.review,
          rating: values.rating
        } 
      }
      // onSuccess: () => router.push('/')
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError('');

    const userRating = user.ratings.find((rating) => rating.gameId == game.id);
    
    !!userRating ? updateRating(userRating.id) : postRating();

    if(!!values.review) {
      const userReview = user.reviews.find((review) => review.gameId == game.id);
      !!userReview ? updateReview(userReview.id) : postReview();
    }
  };

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
          label='Moja ocena*'
          options={options}
          required={true}
          onInputChange={(v) => handleChange('rating', v)}
        />
        <TextField
          name='review'
          placeholder='Podziel się swoją opinią nt gry'
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