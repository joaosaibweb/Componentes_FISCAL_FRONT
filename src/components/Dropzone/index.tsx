/* eslint-disable */
import React, { useCallback, useState, useEffect, useMemo } from "react";
import {useDropzone} from "react-dropzone";

import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";

import { DropContainer } from "./styles";

interface DropzoneProps {
  onFileUploaded: (file: File) => void;
  wasRemoved?: boolean;
  urlImagemAtual?: string;
}

const Dropzone: React.FC<DropzoneProps> = ({
  onFileUploaded,
  wasRemoved,
  urlImagemAtual,
}) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState<string>();

  const toastOptions = useMemo(
    () => ({
      autoClose: 4000,
      position: toast.POSITION.TOP_CENTER,
    }),
    []
  );

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (!file) {
        toast.info(
          "Imagem inválida. Apenas imagens com extensão .jpg ou .png são aceitas!",
          toastOptions
        );
        return;
      }
      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded, toastOptions]
  );

  useEffect(() => {
    if (urlImagemAtual) {
      setSelectedFileUrl(urlImagemAtual);
    } else {
      setSelectedFileUrl(undefined);
    }
  }, [urlImagemAtual]);

  useEffect(() => {
    if (wasRemoved) {
      setSelectedFileUrl(undefined);
    }
  }, [wasRemoved]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop
  });


  return (
    <DropContainer {...getRootProps()}>
      <input {...getInputProps()} accept="image/jpg,image/png" />

      {String(selectedFileUrl).length > 1 ? (
        <img src={selectedFileUrl} alt="Logo da empresa" />
      ) : (
        <p>
          <FiUpload />
          Arraste uma imagem ou clique aqui para selecionar manualmente...
        </p>
      )}
    </DropContainer>
  );
};

export default Dropzone;
