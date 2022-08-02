import { useEffect } from 'react';
import * as S from './styles';

const Popup = ({ isOpen, setIsOpen, children }) => {

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
      <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} />
    </S.Wrapper>
  )
};

export default Popup;