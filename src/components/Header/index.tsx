/* eslint-disable */
import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import UserProfile from "../../mocks/Profile.json"
import { MdSettingsPower, MdWork, MdApps } from 'react-icons/md';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Tooltip from '@material-ui/core/Tooltip';

import logo from "../../assets/logo.png";
import { Container, Content, Profile, InfoContainer } from './styles';

import { Menu } from '../Menu/index';
// import { BootstrapTooltip } from '../ToolTip';

interface RootState {
  auth: {
    selectedModule: { module: string }[];
    emp_razao_social: string;
    usr_login: string;
  };
}

export default function Header() {
  const profile = UserProfile  //((state: RootState) => state.auth);
  // const dispatch = useDispatch();
  // <Link to="/main">PORTAL DE ENTRADAS</Link>
  const [moduloAtual, setModuloAtual] = useState(profile.selectedModule[0].module || '');

  useEffect(() => {
    setModuloAtual(profile.selectedModule[0].module || '');
  }, [profile.selectedModule]);

  const date = new Date();

  const dateFormatted = format(date, "d 'de' MMMM 'de' YYY", { locale: pt });

  function handleLogoff() {

  }

  return (
    <Container>
      <Content>
        <nav>
          <Menu />
          <img src={logo}  alt="www.saibweb.com.br" />
        </nav>

        <InfoContainer>
          <div style={{ display: 'flex' }}>
            <MdWork size={14} />
            <p>
              <span>{profile.emp_razao_social.toUpperCase()}</span>
            </p>
          </div>
          <div style={{ display: 'flex' }}>
            <MdApps size={14} />
            <p>
              <span>{moduloAtual.toUpperCase()}</span>
            </p>
          </div>
        </InfoContainer>

        <aside>
          <Profile>
            <div>
              <strong>Bem Vindo(a): {profile.usr_login}</strong>
              <span>{dateFormatted}</span>
            </div>
            {/* Alterei o componente BootstrapToolTip para o Tooltip */}
            <Tooltip title="Sair do Sistema com segurança" placement="top-start">
              <button type="button" onClick={handleLogoff}>
                <MdSettingsPower size={40} color="#61098a" />
              </button>
            </Tooltip>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
