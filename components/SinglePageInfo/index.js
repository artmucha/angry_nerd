import { useState, useContext } from 'react';
import Link from 'next/link';

import { AuthContext } from 'providers/AuthProvider';
import { formatDate } from 'utils/helpers';

import Button from 'components/Button';
import Heading from 'components/Heading';
import Ribbon from 'components/Ribbon';
import Popup from 'components/Popup';
import FormRating from 'components/FormRating';

import * as S from './styles';

const SinglePageInfo = ({ id, title, rating, platform, cover, slug, type='game', publishedAt }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { auth: { login } } = useContext(AuthContext);

  const token = login ? JSON.parse(login).jwt : '';
  const user = login ? JSON.parse(login).user : '';

  return (
    <S.Wrapper>
      <Heading color="black">{title}</Heading>
  
      { !!rating && <Ribbon color="secondary">{rating}</Ribbon> }
  
      { type === 'game' ? (
        <>
          <S.Info>{platform.name}</S.Info>
          <S.ButtonsWrapper>
            <Button 
              size="large" 
              onClick={() => setIsPopupOpen(!isPopupOpen)}
            >
              Oceń
            </Button>
            <Button minimal size="large">Dodaj do kolekcji</Button>
          </S.ButtonsWrapper>
        </>
      ) : (
        <S.Info>{formatDate(publishedAt)}</S.Info>
      )
      }
  
    <Popup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen}>
      { user ? (
        <FormRating 
          game={{id, title, rating, platform, cover, slug}} 
          token={token}
          user={user}
        />
      ) : (
        <>
          Zaloguj się, aby ocenić grę 
          <Link href="/logowanie" passHref>
            <Button as="a">Zaloguj</Button>
          </Link>
        </>
      )
    }
      
    </Popup>
    </S.Wrapper>
  );
}

export default SinglePageInfo;