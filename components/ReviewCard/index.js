import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';

const ReviewCard = ({
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
      <Link href={`/review/${slug}`} passHref>
        <a>
          <S.Meta><strong>{author.name}</strong> dodał recenzję gry</S.Meta>
          <S.Title>{game.title}</S.Title>
          <S.Meta>PS4</S.Meta>
          <S.Text>{content}</S.Text>
        </a>
      </Link>
      <Link href={`/review/${slug}`} passHref>
        <S.Info>
          Więcej
        </S.Info>
      </Link>
    </S.Content>
  </S.Wrapper>
)

export default ReviewCard;