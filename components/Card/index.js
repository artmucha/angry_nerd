import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';

const Card = ({
  id,
  slug,
  title,
  img,
  rating,
}) => (
  <S.Wrapper>
    <Link href={`${slug}`} passHref>
      <S.ImageBox>
        <Image src={img} alt={title} layout="fill" objectFit="cover" />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={slug} passHref>
        <a>
          <S.Title>{title}</S.Title>
          <S.Info>PS4</S.Info>
        </a>
      </Link>
      <S.Box>
        { !!rating && <S.Rating>9.5</S.Rating> }
      </S.Box>
    </S.Content>
  </S.Wrapper>
)

export default Card;