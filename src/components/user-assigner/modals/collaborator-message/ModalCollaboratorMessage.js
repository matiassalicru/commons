import React, { useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
// UI Components
import { SvgIcon } from "../../../svg-icon";
// Styles
import {
  SCModalCMAllWrapper,
  SCModalCMWrapper,
  SCModalCMTitle,
  SCModalCMMessage,
  SCModalButtons,
  SCModalConfirm,
  SCModalCancel,
  SCModalImgLabel,
  SCModalImgWrapper,
  SCModalCheckBox,
  SCModalCheckBoxWrapper,
  SCModalIcon,
} from "./style";

const Modal = ({
  typeMenssage = 0,
  onContinue = () => {},
  onCancel = () => {},
  translations,
}) => {
  const BUTTON_REF = useRef(null);
  const CHECKBOX_REF = useRef(null);

  const titleMsg = [
    translations.newCollaboratorMessageTitleModal,
    translations.removeCollaboratorMessageTitleModal,
  ];
  const mensajeMsg = [
    translations.newCollaboratorMessageModalText,
    translations.removeCollaboratorMessageModalText,
  ];
  const [titulo, setTitulo] = useState(titleMsg[typeMenssage]);
  const [mensaje, setMensaje] = useState(mensajeMsg[typeMenssage]);
  const [dontOpen, setDontOpen] = useState(false);

  const clickAccept = useCallback(() => {
    onContinue(dontOpen);
  }, [dontOpen]);

  const clickCancel = useCallback(() => {
    onCancel();
  }, []);

  const clickCheckBox = useCallback(() => {
    setDontOpen(!dontOpen);
  }, [dontOpen]);

  return (
    <SCModalCMAllWrapper>
      <SCModalCMWrapper>
        <SCModalCMTitle>{titulo}</SCModalCMTitle>
        <SCModalCMMessage>
          {mensaje}
          {typeMenssage === 0 && (
            <SCModalImgWrapper>
              <SCModalIcon>
                <SvgIcon iconName="divide" />
              </SCModalIcon>
              <SCModalImgLabel>
                {translations.distributeHour || ""}
              </SCModalImgLabel>
            </SCModalImgWrapper>
          )}
        </SCModalCMMessage>
        {typeMenssage === 0 && (
          <SCModalCheckBoxWrapper>
            <SCModalCheckBox
              ref={CHECKBOX_REF}
              type="checkbox"
              onClick={clickCheckBox}
            />
            {translations.dontShowMessageAgain || ""}
          </SCModalCheckBoxWrapper>
        )}
        <SCModalButtons>
          {typeMenssage === 1 && (
            <SCModalCancel onClick={clickCancel}>
              {translations.cancel || ""}
            </SCModalCancel>
          )}
          <SCModalConfirm ref={BUTTON_REF} onClick={clickAccept}>
            {translations.continue || ""}
          </SCModalConfirm>
        </SCModalButtons>
      </SCModalCMWrapper>
    </SCModalCMAllWrapper>
  );
};

export const ModalCollaboratorMessage = (props) => {
  return ReactDOM.createPortal(
    <Modal {...props} />,
    document.querySelector(props.contentId)
  );
};

ModalCollaboratorMessage.propTypes = {
  typeMenssage: PropTypes.oneOf([0, 1]),
  onContinue: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  /** Objeto con las traducciones */
  translations: PropTypes.object.isRequired,
};
