import Image from 'next/image';
import Link from 'next/link';

import Button from 'components/Button';
import * as S from './styles';

const Empty = ({ title, description, hasLink }) => (
  <S.Wrapper>
    <Image
      src="/empty.svg"
      alt="Gram w grę"
      width={380}
      height={285}
    />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Wróć do strony głównej</Button>
      </Link>
    )}
  </S.Wrapper>
);

export default Empty;