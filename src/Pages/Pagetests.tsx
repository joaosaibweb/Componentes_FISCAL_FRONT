import { useRef, useState } from "react";

import {
  BoxComponentes,
  ToolbarButtonConfirm,
  ToolbarButtonWarning,
} from "../styles/Global";
import {
  FormContainer,
  PageBody,
  ToolbarContainer,
  ToolbarInnerContainer,
  PageContainer,
} from "./styles";

import { Form } from "@unform/web";
import moment from "moment";
import { MdClose, MdSave } from "react-icons/md";
import Tooltip from "@material-ui/core/Tooltip";

import Input from "../components/Input";
import FormSelect from "../components/FormSelect";
import InputRadio from "../components/InputRadio";
import InputCurrency from "../components/InputCurrency";
import TextArea from "../components/Textarea";
import DatePickerInput from "../components/DataPickerInput";

export default function Pagetests() {
  const [pvdaRetManPrestCta, setPvdaRetManPrestCta] = useState("");

  const [dataCadastro, setDataCadastro] = useState(moment());

  const handle: any = useRef(null);
  function handleActionSubmit(formData: any) {
    let obj = {
      name: formData.name,
      module: formData.module,
      radio: pvdaRetManPrestCta,
      valor_contrato: formData.valor_contrato,
      observacao: formData.observacao,
      dataCadastro: dataCadastro.format("DD/MM/YYYY"),
    };
    console.log(obj);
  }

  const lisEmpresas = [
    {
      label: "1 - GRUPO SAIB S/A",
      value: "1",
    },
    {
      label: "100 - SAIB SISTEMAS DE GESTAO EIRELI",
      value: "100",
    },
    {
      label: "105 - SAIBWEB IMPLANTACAO",
      value: "105",
    },
    {
      label: "1000 - PLANALTO PF",
      value: "1000",
    },
  ];

  return (
    <>
      <PageContainer>
        <ToolbarContainer>
          <ToolbarInnerContainer>
            <Tooltip title="Confirmar Cadastro" placement="bottom">
              <ToolbarButtonConfirm
                type="button"
                onClick={() => handle.current.submitForm()}
              >
                <MdSave size={21} color="#fff" />
              </ToolbarButtonConfirm>
            </Tooltip>
            <span>PAGINA DE TESTE</span>
            <Tooltip title="Voltar para Dashboard" placement="top">
              <ToolbarButtonWarning type="button">
                <MdClose size={21} color="#fff" />
              </ToolbarButtonWarning>
            </Tooltip>
          </ToolbarInnerContainer>
        </ToolbarContainer>

        <PageBody>
          <BoxComponentes>
            <FormContainer>
              <Form ref={handle} onSubmit={handleActionSubmit}>
                <Input
                  label="Nome Área:"
                  type="text"
                  name="name"
                  isUppercase={false}
                  isRequired
                />
                <FormSelect
                  name="module"
                  label="Escolha um módulo do sistema"
                  isRequired
                  isUppercase={false}
                  optionsList={lisEmpresas}
                />
                <InputCurrency
                  name="valor_contrato"
                  label="Valor"
                  isRequired={true}
                />

                <TextArea
                  name="observacao"
                  label="Observação"
                  isUppercase={false}
                />
                <DatePickerInput
                  label="Cadastro:"
                  value={dataCadastro}
                  onChangeDate={(data) => setDataCadastro(data)}
                  maxDate={moment()}
                />

                <InputRadio
                  name="rRetManPrestConta"
                  label="DV-S"
                  forName="retManPrestCta"
                  checked={pvdaRetManPrestCta === "S"}
                  onChange={() => setPvdaRetManPrestCta("S")}
                />

                <InputRadio
                  name="rRetManPrestConta"
                  label="DV-N"
                  forName="retManPrestCta"
                  checked={pvdaRetManPrestCta === "N"}
                  onChange={() => setPvdaRetManPrestCta("N")}
                  
                />

                <InputRadio
                  name="rRetManPrestConta"
                  label="Ambos"
                  forName="retManPrestCta"
                  checked={pvdaRetManPrestCta === "T"}
                  onChange={() => setPvdaRetManPrestCta("T")}
                  isUppercase
                />
              </Form>
            </FormContainer>
          </BoxComponentes>
        </PageBody>
      </PageContainer>
    </>
  );
}
