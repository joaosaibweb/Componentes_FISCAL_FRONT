import styled from 'styled-components';
import { colors } from './colors';

interface PropsContainer {
  cl: string;
}

export const Container = styled.div<PropsContainer>`
  max-width: 100%;
  height: 95%;
  margin: 0 auto;
  .tooltip-chat {
    background: #fff;
    padding: 20px;
    border-radius: 4px;
    border: 1px solid #ddd;
    text-align: left;
    color: ${(props) => props.cl};
  }

  .recharts-text {
    font-size: 8px;
  }
`;

export const PTooltip = styled.p`
  color: ${(props) => props.color};
  margin-top: 5px;
`;

interface PropsTitleBar {
  wd: string;
}

export const TitleBar = styled.div<PropsTitleBar>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  width: ${(props) => props.wd};
  height: 30px;
  background: rgba(0, 0, 0, 0.1);
  border-bottom: solid 1px #ccc;

  h1 {
    font-size: 15px;
    font-weight: 700;
    color: #500569;
  }

  button {
    border: 0;
    background: none;
  }
`;

interface PropsPageContainer {
  mg: string;
  maxWd: string;
}

export const PageContainer = styled(Container)<PropsPageContainer>`
  margin: ${(props) => (props.mg ? props.mg : 'auto')};
  margin-bottom: 30px;
  border: 1px solid ${colors.primaria_escura};
  height: auto;
  border-radius: 4px;
  box-shadow: 3px 3px 16px #cacaca;
  max-width: ${(props) => (props.maxWd ? props.maxWd : 'auto')};
`;
export const ToolbarContainer = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* position: fixed;
top: 100px; */
  height: auto;
  z-index: 152;

  margin-bottom: 15px;
`;

interface PropsToolbarInnerContainer {
  wd: string;
}

export const ToolbarInnerContainer = styled.div<PropsToolbarInnerContainer>`
  width: ${(props) => props.wd};
  max-width: ${(props) => props.wd};
  display: flex;
  justify-content: space-between;
  background-color: #4d2679;

  span {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    margin-top: 4px;
  }
`;

interface PropsContainerBody {
  pd: string;
  mg: string;
  minhg: string;
  maxhg: string;
}

export const ContainerBody = styled.div<PropsContainerBody>`
  overflow: auto;
  padding: ${(props) => (props.pd ? props.pd : '0px')};
  margin: ${(props) => (props.mg ? props.mg : '0px')};
  width: 100%;
  height: 100%;
  min-height: ${(props) => (props.minhg ? props.minhg : 'auto')};
  max-height: ${(props) => (props.maxhg ? props.maxhg : 'auto')};

  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 10px;
    background: #999;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 6px;
  }
`;

interface PropsDivRow {
  noWrap: string;
  pd: string;
  mg: string;
  hg: string;
  jContent: string;
}

export const DivRow = styled.div<PropsDivRow>`
  width: 100%;
  display: flex;
  flex-wrap: ${(props) => (props.noWrap ? 'nowrap' : 'wrap')};
  padding: ${(props) => (props.pd ? props.pd : 'auto')};
  margin: ${(props) => (props.mg ? props.mg : 0)};
  height: ${(props) => (props.hg ? props.hg : 'auto')};
  justify-content: ${(props) => (props.jContent ? props.jContent : 'initial')};
`;

interface PropsDivCol {
  wd: string;
  pd: string;
  hg: string;
  mg: string;
  align: string;
}

export const DivCol = styled.div<PropsDivCol>`
  width: ${(props) => props.wd};
  height: ${(props) => (props.hg ? props.hg : 'auto')};
  padding: ${(props) => (props.pd ? props.pd : 'auto')};
  margin: ${(props) => (props.mg ? props.mg : 'auto')};
  flex: 0 0 ${(props) => props.wd};
  text-align: ${(props) => (props.align ? props.align : 'auto')};

  @media (max-width: 800px) {
    width: 100%;
    min-width: 100%;
  }
`;
