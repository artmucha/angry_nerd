import Button from 'components/Button';
import Image from 'next/image';
import * as S from './styles';

import { getImageUrl } from 'utils/getImageUrl';

const Highlight = ({
  title,
  cover,
  slug,
  alignment = 'left'
}) => (
  <S.Wrapper alignment={alignment}>
    <Image src={getImageUrl(cover)} alt={title} layout="fill" />
    <S.Content>
      <S.Title>{title}</S.Title>
      <Button as="a" href={slug}>
        Czytaj
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight;