import styled from 'styled-components';

interface InputContainerProps {
  isRequired?: boolean;
  uppercase?: boolean;
}


export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;

  input,
  div {
    color: #6b6565;
    float: left;
    font-weight: ${(props) => (props.isRequired ? 600 : 500)};
    font-size: 13px;
  }
`;

export const FormLabel = styled.div`
  color: #9e9e9e;
  font-weight: 600;
`;

export const FormInput = styled.input`
  width: 18px;
  height: 15px;
  cursor: pointer;
  margin-right: 5px;
`;
