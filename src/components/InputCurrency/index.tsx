/* eslint-disable */
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import Select from "react-select"
import {formatarMoeda} from '../../auxiliar/utils'

/* ============= Styles =============== */
import { InputContainer, FormInput } from './styles';
/* ============= End Styles =============== */


interface InputCurrencyProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  isUppercase?: string;
  isRequired: boolean;
  onModelChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const InputCurrency = ({ name, label, isUppercase, isRequired, onModelChange, ...rest }: InputCurrencyProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const toInputUppercase = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isUppercase) {
      e.target.value = `${e.target.value}`.toUpperCase();
    }
  };

  const formatCurrency = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = formatarMoeda(e.target.value)
    if (onModelChange) onModelChange(e);
  };

  return (
    <InputContainer isRequired={isRequired}>
      <div>
        <label htmlFor={fieldName}>{label}</label>
        {error && <span style={{ color: '#f00', display: 'block' }}>{error}</span>}
      </div>
      <FormInput
        ref={inputRef}
        name={fieldName}
        id={fieldName}
        defaultValue={defaultValue}
        onBlur={toInputUppercase}
        uppercase={isUppercase}
        invalid={error}
        onChange={formatCurrency}
        {...rest}
      />
    </InputContainer>
  );
};

export default InputCurrency;
