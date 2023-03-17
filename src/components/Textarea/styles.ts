import styled, { keyframes, css } from 'styled-components';
import { headShake } from 'react-animations';

import { device } from '../../styles/mediaQuery';

const headShakeEffect = keyframes`${headShake}`;

export const InputContainer = styled.div`
  /* padding: 6px; */
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    padding-left: 2px;
    padding-right: 2px;
  }

  label {
    color: #6b6565;
    font-weight: 500;
    font-size: 13px;
  }
`;

export const FormLabel = styled.label`
  color: #9e9e9e;
  font-size: 14px;
  margin-bottom: 6px;
  font-weight: 600;
`;

interface PropsFormTextarea {
  invalid?: string;
  hg?: string;
  uppercase: boolean;
}

export const FormTextarea = styled.textarea<PropsFormTextarea>`
  border-radius: 6px;
  border: 1px solid ${(props) => (props.invalid ? 'red' : '#cac8c8')};
  font-weight: bold;
  line-height: 1.3;
  color: #495057;
  background-color: #fefcff;
  width: 100%;
  height: ${(props) => (props.hg ? props.hg : 'auto')};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  /* font-size: 15px; */
  /* padding: 6px 10px; */
  transition: background 0.3s;
  resize: none;

  ${(props) =>
    props.invalid &&
    css`
      animation: 0.6s ${headShakeEffect};
    `}

  &:focus {
    background-color: #fefcff;
    border: 1px solid ${(props) => (props.invalid ? 'red' : '#b196d0')};
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => (props.invalid ? '#ff8484' : '#b196d0')};
  }

  &:read-only {
    background-color: #f9f9f9;
    border: 1px solid ${(props) => (props.invalid ? 'red' : '#cac8c8')};
    outline: 0;
    box-shadow: none;
  }

  @media ${device.mobileS} {
    padding: 4px 8px;
    font-size: 12px;
  }

  @media ${device.tablet} {
    padding: 4px 8px;
    font-size: 14px;
  }

  @media ${device.laptop} {
    padding: 4px 8px;
    font-size: 14px;
  }

  @media ${device.laptopL} {
    padding: 6px 10px;
    font-size: 15px;
  }
`;
