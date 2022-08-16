import { useState } from 'react';

import * as S from './styles';

const Switcher = ({ children, buttons, active }) => {
  const [selected, setSelected] = useState(active);

  return (
    <S.Wrapper>
      <S.Switches>
        {buttons.map(button => (
          <S.Switch selected={selected === button.slug} onClick={() => setSelected(button.slug)}>{button.name}</S.Switch>
        ))}
      </S.Switches>
      <S.Content>
      {selected === active && (
        <>
        {children}
        </>
      )}
      </S.Content>
    </S.Wrapper>
  )
};

export default Switcher;