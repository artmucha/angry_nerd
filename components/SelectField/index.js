import { useState } from 'react';

import * as S from 'components/TextField/styles';

const SelectField = ({
  icon,
  iconPosition = 'left',
  label,
  name,
  initialValue = '',
  error,
  disabled = false,
  onInputChange,
  options,
  ...props
}) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Select
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        >
          {options.map((option) => (
            <option 
              key={option} 
              value={option}
              default={value}
            >
              {option}
            </option>)
          )}
        </S.Select>
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
};

export default SelectField;