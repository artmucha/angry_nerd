import { useState, useEffect } from 'react';
import * as S from './styles';

const Dropdown = ({ title = 'Ups', children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen(!isOpen)}>{title}</S.Title>

      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
      <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} />
    </S.Wrapper>
  )
};

export default Dropdown;