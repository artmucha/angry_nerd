import Image from 'next/image';

import * as S from './styles';

const Banner = ({
  img,
  title,
  subtitle,
}) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <Image src={img} alt={title} layout="fill" objectFit="cover" />
    </S.ImageWrapper>

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
    </S.Caption>
  </S.Wrapper>
)

export default Banner;