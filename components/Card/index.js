import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';

const Card = ({
  id,
  slug,
  title,
  platform,
  img,
  rating,
}) => (
  <S.Wrapper>
    <Link href={slug} passHref>
      <S.ImageBox>
        <Image src={img} alt={title} layout="fill" objectFit="cover" />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={slug} passHref>
        <a>
          <S.Title>{title}</S.Title>
        </a>
      </Link>
      {!!platform && 
        <Link href={platform.slug} passHref>
          <a>
            <S.Info>{platform.name}</S.Info>
          </a>
        </Link>
      }
      <S.Box>
        { !!rating && <S.Rating>{rating}</S.Rating> }
      </S.Box>
    </S.Content>
  </S.Wrapper>
)

export default Card;