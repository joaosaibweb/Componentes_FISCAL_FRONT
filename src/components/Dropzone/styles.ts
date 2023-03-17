import styled from 'styled-components';
import { colors } from "../../styles/colors";

export const DropContainer = styled.div`
  height: 100%;
  /* background: #e4e1fa; */
  background: ${colors.primaria_background};
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 30px auto 10px auto; */
  outline: 0;
  width: 100%;

  img {
    width: 98%;
    height: 96%;
    /* object-fit: 70%; */
  }

  p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 10px;
    /* border: 1px dashed #4d2679; */
    border: 1px dashed ${colors.primaria_escura};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* color: #333; */
    color: ${colors.primaria_escura};
    font-size: 13px;
  }

  p svg {
    /* color: #4d2679; */
    color: ${colors.primaria};
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
`;
