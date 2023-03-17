/* eslint-disable */
import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import PropTypes from "prop-types";

/* ============= Styles =============== */
import { InputContainer, FormTextarea } from "./styles";
/* ============= End Styles =============== */

interface TextAreaProps {
  name: string;
  label: string;
  isUppercase: boolean;
  invalid?: string
}

const TextArea: React.FC<
  TextAreaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ name, label, isUppercase, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = "", registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  const toInputUppercase = (e: any) => {
    if (isUppercase) {
      e.target.value = `${e.target.value}`.toUpperCase();
    }
  };

  return (
    <InputContainer>
      <div>
        <label htmlFor={fieldName}>{label}</label>
        {error && (
          <span style={{ color: "#f00", display: "block" }}>{error}</span>
        )}
      </div>
      <FormTextarea
        ref={inputRef}
        name={fieldName}
        id={fieldName}
        defaultValue={defaultValue}
        onBlur={toInputUppercase}
        uppercase={isUppercase}
        invalid={error}
        {...rest}
      />
    </InputContainer>
  );
};

export default TextArea;
