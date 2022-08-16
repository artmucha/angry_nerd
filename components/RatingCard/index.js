import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';

const RatingCard = ({
  content,
  slug,
  game,
  author
}) => (
  <S.Wrapper>
    <S.ImageBox>
      <Image src={game.img} alt={game.title} layout="fill" objectFit="cover" />
    </S.ImageBox>
    <S.Content>
      <Link href={`/rating/${slug}`} passHref>
        <>
        <S.Info>
          <S.Title>{game.title}</S.Title>
          <S.Developer>{author.name}</S.Developer>
          <S.Developer>{content}</S.Developer>
        </S.Info>
        </>
      </Link>
    </S.Content>
  </S.Wrapper>
)

export default RatingCard;