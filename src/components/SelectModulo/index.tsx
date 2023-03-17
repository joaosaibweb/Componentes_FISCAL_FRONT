/* eslint-disable */
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// import { useLocation, useNavigate } from "react-router-dom";

import Profile from "../../mocks/Profile.json"

import ModulesSelect from "../../mocks/ModulesSelect.json"

// import { selectModule } from "store/modules/auth/actions";
// import history from 'services/history';
// import { ApiService, ApiTypes } from "services/apiService";
import { BoxMenu, AreaComp, CustomSelect } from "./styles";

interface Modulo {
  label: string;
  value: string;
}

interface ModuloEmpresa {
  MOD_ID: number;
  NOME: string;
  ITENS: unknown[];
}
interface RootState {
  auth: {
    usr_login: string;
    value: number;
    usr_tipo: number;
    emp_id: number | null;
    usr_id: number;
    token: string;
    signed: string;
    selectedModule: {
      module: string;
    }[];
  };
}

const selectStyles = {
  container: (base: any, state: any) => ({
    ...base,
    opacity: state.isDisabled ? ".5" : "1",
    backgroundColor: "transparent",
    zIndex: "200",
  }),
  menuPortal: (styles: any) => ({ ...styles, zIndex: 280 }),
};

export function BotaoModulos() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [listaModulos, setListaModulos] = useState([]);
  const [optionsModulo, setOptionsModulo] = useState<Modulo[]>([]);
  const [moduloSelecionado, setModuloSelecionado] = useState<Modulo | null>(
    null
  );
  const [idEmpresaAtual, setIdEmpresaAtual] = useState<null | number>(null);
  // const history = useLocation();

  const profile = Profile //useSelector((state: RootState) => state.auth);
  // const api = ApiService.getInstance(ApiTypes.ADM);

  const padronizaRotaInicial = (str: string) => {
    let stringPadronizada = "/";

    stringPadronizada += str
      .replace(/[áÁãÃâÂàÀ]/gi, "a")
      .replace(/[éÉêÊ]/gi, "e")
      .replace(/[íÍ]/gi, "i")
      .replace(/[óÓõÕôÔ]/gi, "o")
      .replace(/[úÚ]/gi, "u")
      .replace(/[çÇ]/gi, "c")
      .replace(/ /gi, "")
      .replace(/-/gi, "")
      .trim()
      .toLowerCase();

    return stringPadronizada;
  };

  const getRotaInicial = (nomeModulo: string) =>
    nomeModulo.toLowerCase().includes("sistema")
      ? "/main"
      : padronizaRotaInicial(nomeModulo);

  /* atualiza o módulo selecionado */
  function getSelectedModule(
    optModulos: Modulo[],
    modulosEmpresa: ModuloEmpresa[]
  ) {
    let selectedModule: Modulo | null = null;
    let modulePayload: {
      route: string;
      module: string;
      menu: string[];
    } = { route: "", module: "", menu: [] };
    /* Tenta obter o módulo pré-selecionado do state global */
    const modulo = optModulos.find(
      (mod) => mod.label === profile.selectedModule[0].module
    );
    if (!modulo) {
      /* Se não tiver módulo selecionado pega o primeiro módulo habilitado */
      if (optModulos.length > 0) {
        [selectedModule] = optModulos;

        const objModulo = modulosEmpresa.find(
          (mod: any) => mod.MOD_ID === optModulos[0].value
        )!;
        modulePayload = {
          route: getRotaInicial(objModulo.NOME),
          module: objModulo.NOME,
          menu: objModulo.ITENS as string[],
        };
      } else {
        /* Caso não tenha módulo habilitado redireciona para a página inicial */
        selectedModule = null;
        modulePayload = {
          route: "/main",
          module: "Selecione um Módulo",
          menu: [],
        };
      }

      setModuloSelecionado(selectedModule);
      // dispatch(selectModule([modulePayload]));
      // navigate(modulePayload.route);
    }

    if (modulo) {
      const objModulo = modulosEmpresa.find(
        (mod: any) => mod.MOD_ID === modulo.value
      )!;
      setModuloSelecionado(modulo);

      /* se existe id de empresa o usuário mudou de empresa logada.
       * Neste caso deve disparar a action de seleção de módulo
       * e o usuário deve voltar para a tela inicial do módulo.
       */
      if (idEmpresaAtual) {
        const rotaInicial = getRotaInicial(objModulo.NOME);
        // dispatch(
        //   selectModule([
        //     {
        //       route: rotaInicial,
        //       module: objModulo.NOME,
        //       menu: objModulo.ITENS,
        //     },
        //   ])
        // );
        // navigate(rotaInicial);
      } else {
        /* se não existe id de empresa logada dispara a action de seleção de módulo
         * para garantir que os itens do menu sejam atualizados conforme o retorno da API,
         * porém mantém a referência da rota que está sendo acessada no momento.
         */
        // let routePath = history.pathname;

        // if (profile.signed && history.pathname === "/") {
        //   routePath = getRotaInicial(objModulo.NOME);
        // }

        // dispatch(
        //   selectModule([
        //     {
        //       route: routePath,
        //       module: objModulo.NOME,
        //       menu: objModulo.ITENS,
        //     },
        //   ])
        // );
        // navigate(routePath);
      }
    }
  }

  /* SOLUÇÃO TEMPORÁRIA
   * se não tiver grupo de usuário cadastrado para a empresa carrega
   * o módulo de MDF-e, pois hoje todas as empresas tem acesso ao mesmo.
   */

  //Função usando a API
  // const carregaModuloPadrao = async (): Promise<void> => {
  //   const retornoModulos = await api.get("/v1/system/modulos_menu");
  //   if (retornoModulos.data && retornoModulos.data.success) {
  //     const optModulos: Modulo[] = retornoModulos.data.retorno
  //       .filter((mod: ModuloEmpresa) => mod.NOME === "MDF-e")
  //       .map((mod: ModuloEmpresa) => ({
  //         value: mod.MOD_ID,
  //         label: mod.NOME,
  //       }));

  //     setListaModulos(retornoModulos.data.retorno);
  //     setOptionsModulo(optModulos);
  //     getSelectedModule(optModulos, retornoModulos.data.retorno);
  //   }
  // };

  //Função usando os Mocks

   const carregaModuloPadrao = () => {

    const retornoModulos = ModulesSelect
      // .filter((mod: any) => mod.NOME === "MDF-e")
      const optModulos: any = retornoModulos
        .map((mod: any) => ({
          value: mod.MOD_ID,
          label: mod.NOME,
        }));

      // setListaModulos(retornoModulos.retorno);
      setOptionsModulo(optModulos);
      console.log(retornoModulos)
      // getSelectedModule(optModulos, retornoModulos.retorno);
    
  };
  
  

  // async function getModulos() {
  //   try {
  //     const urlModulos =
  //       profile.usr_tipo === 1
  //         ? `/v1/system/modulos_menu`
  //         : `/v1/system/user_group_link/${profile.usr_id}`;

  //     const { data } = await api.get(urlModulos);
  //     if (data.retorno.length > 0) {
  //       const modulosRetornados = data.retorno;
  //       setListaModulos(modulosRetornados);

  //       const optModulos: Modulo[] = modulosRetornados.map((mod: ModuloEmpresa) => ({
  //         value: mod.MOD_ID,
  //         label: mod.NOME,
  //       }));
  //       setOptionsModulo(optModulos);

  //       getSelectedModule(optModulos, modulosRetornados);
  //     } else {
  //       carregaModuloPadrao();
  //     }
  //   } catch (err) {
  //     carregaModuloPadrao();
  //   }
  // }

  /* Executa sempre que trocar de empresa */
  // useEffect(() => {
  //   setIdEmpresaAtual(profile.emp_id);
  //   getModulos();
  // }, [profile.emp_id]);


    //useEffect(()) do mock

    useEffect(() => {
    carregaModuloPadrao();
  }, []);

  const handleModulo = async (selectedOption: any) => {
    /* busca o objeto completo referente ao módulo selecionado */
    const objModulo: ModuloEmpresa  = listaModulos.find(
      (mod: any) => mod.MOD_ID === selectedOption.value
    )!;


    // window.document.title = `Saibweb | ${objModulo.NOME}`;
    const rotaInicial = getRotaInicial(objModulo.NOME);
    /* dispara a action para atualizar a renderização do menu */
    // dispatch(
    //   selectModule([
    //     {
    //       route: rotaInicial,
    //       module: objModulo.NOME,
    //       menu: objModulo.ITENS,
    //     },
    //   ])
    // );
    setModuloSelecionado(selectedOption);
    // navigate(rotaInicial);
    toast.success(`Você entrou no módulo: ${objModulo.NOME}`);
  };

  return (
    <BoxMenu>
      <AreaComp wd="100">
        <label htmlFor="modulo">Módulo Ativo:</label>
        <CustomSelect
          name="change_modulo"
          id="modulo"
          classNamePrefix="Select"
          options={optionsModulo}
          onChange={handleModulo}
          value={moduloSelecionado}
          placeholder="Selecione um Módulo"
          styles={selectStyles}
          menuPortalTarget={document.getElementById("root")}
          theme={(theme: any) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: "#b196d0",
              primary25: "#e6d4fb",
            },
          })}
        />
      </AreaComp>
    </BoxMenu>
  );
}
