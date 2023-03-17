/* eslint-disable */
import { useEffect, useRef, ChangeEvent, FocusEvent, useImperativeHandle } from "react";
import { useField } from "@unform/core";

import { InputContainer, FormInput } from "./styles";

interface propsInput {
  name: string;
  label?: string;
  type?: string;
  isUppercase: boolean;
  isRequired: boolean;
  onChangeExternal?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  label,
  isUppercase,
  isRequired,
  onChangeExternal,
  ...rest
}: propsInput) => {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = "", registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  const toInputUppercase = (e: FocusEvent<HTMLInputElement>) => {
    if (isUppercase) {
      e.target.value = `${e.target.value}`.toUpperCase();
    }
  };


  return (
    <InputContainer isRequired={isRequired}>
      <div>
        <label htmlFor={fieldName}>{label}</label>
        {error && (
          <span style={{ color: "#f00", display: "block" }}>{error}</span>
        )}
      </div>
      <FormInput
        ref={inputRef}
        name={fieldName}
        id={fieldName}
        defaultValue={defaultValue}
        onBlur={toInputUppercase}
        uppercase={isUppercase}
        invalid={error}
        onChange={onChangeExternal && rest.onChange}
        {...rest}
      />
    </InputContainer>
  );
};

export default Input;
