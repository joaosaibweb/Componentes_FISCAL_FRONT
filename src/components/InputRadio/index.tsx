/* eslint-disable */
import { useEffect, useRef, FocusEvent } from 'react';
import { useField  } from '@unform/core';
import Select from "react-select"

/* ============= Styles =============== */
import { InputContainer, FormInput } from './styles';
/* ============= End Styles =============== */


interface propsInputRadio {
  name: string;
  label: string;
  forName: string;
  isUppercase?: boolean;
  isRequired?: boolean;
  checked: boolean | string;
  onChange: () => void;
  invalid?: boolean;
  uppercase?: boolean | string;
}


const InputRadio = ({ name, checked, label, forName, isUppercase, isRequired, ...rest }: propsInputRadio ) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const toInputUppercase = (e: FocusEvent<HTMLInputElement>) => {
    if (isUppercase) {
      e.target.value = `${e.target.value}`.toUpperCase();
    }
  };

  return (
    <InputContainer isRequired={isRequired}>
      <FormInput
        ref={inputRef}
        name={fieldName}
        id={fieldName}
        defaultValue={defaultValue}
        onBlur={toInputUppercase}
        uppercase={isUppercase}
        invalid={error}
        {...rest}
        type="radio"
      />
      <label htmlFor={fieldName}>{label}</label>
      {error && <span style={{ color: '#f00', display: 'block' }}>{error}</span>}
    </InputContainer>
  );
};

export default InputRadio;
