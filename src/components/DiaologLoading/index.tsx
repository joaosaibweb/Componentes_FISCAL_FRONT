/* eslint-disable */
import { Container, AreaConsult } from "../../styles/Global"
import loadingImg from '../../assets/loading.gif';
import DialogLoadingContainer from './DialogLoadingContainer';
/* ======== Styles ========== */
import { BaseModal, ModalContent, TitleBar, CModal, ModalBody } from './styles';
/* ======== Styles ========== */

type DialogLoadingProps = {
  isOpen: boolean;
};

const DialogLoading = ({ isOpen }: DialogLoadingProps) => (
  <DialogLoadingContainer isOpen={isOpen}>
    <BaseModal isOpen={isOpen}>
      <ModalContent>
        <TitleBar wd="100%">
          <h1>Carregando...</h1>
        </TitleBar>
        <CModal  wd="100%" hg="170px">
          <Container>
            <AreaConsult ptop="18px" pleft="14px">
              <ModalBody>
                <h2>Aguarde, Processando Informações...</h2>
                <img src={loadingImg} alt="Carregando" />
              </ModalBody>
            </AreaConsult>
          </Container>
        </CModal>
      </ModalContent>
    </BaseModal>
  </DialogLoadingContainer>
);

export default DialogLoading;