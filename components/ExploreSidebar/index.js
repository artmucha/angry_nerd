import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Close } from '@styled-icons/material-outlined/Close';
import { FilterList } from '@styled-icons/material-outlined/FilterList';

import Heading from 'components/Heading';
import Button from 'components/Button';
import Radio from 'components/Radio';

import * as S from './styles';

const ExploreSidebar = ({
  items,
  onFilter,
  initialValues = {}
}) => {
  const [values, setValues] = useState(initialValues);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    onFilter(values)
  }, [values]);

  const handleRadio = (name, value) => {
    setValues((s) => ({ ...s, [name]: value }))
  };

  const handleLink = (name, value) => {
    const genres = values.genres ? { genres : values.genres } : {};
    router.push({
      pathname: `/${value}`,
      query: {...genres}
    })
  };

  const handleFilterMenu = () => {
    setIsOpen(false);
  };

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />
      <S.IconWrapper>
        <FilterList aria-label="pokaż filtry" onClick={() => setIsOpen(true)} />
        <Close aria-label="schowaj filtry" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>

      <S.Content>
        {items.map((item) => (
          <S.Items key={item.title}>
            <Heading lineBottom lineColor="secondary" size="small">
              {item.title}
            </Heading>

            {item.type === 'link' &&
              item.fields.map((field) => (
                <Radio
                  key={field.name}
                  id={field.name}
                  value={field.name}
                  name={item.name}
                  label={field.label}
                  labelFor={field.name}
                  defaultChecked={
                    String(field.name) === String(values[item.name])
                  }
                  onChange={() => handleLink(item.name, field.name)}
                />
              ))}

            {item.type === 'radio' &&
              item.fields.map((field) => (
                <Radio
                  key={field.name}
                  id={field.name}
                  value={field.name}
                  name={item.name}
                  label={field.label}
                  labelFor={field.name}
                  defaultChecked={
                    String(field.name) === String(values[item.name])
                  }
                  onChange={() => handleRadio(item.name, field.name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button fullWidth size="medium" onClick={handleFilterMenu}>
          Filtry
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
};

export default ExploreSidebar;