import React from "react";
// Styles
import { SCModalTip, SCTipText, SCTipTitle } from "./style";
// Material Design
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export const RoleClientModal = ({
  type,
  checkModal,
  handleCheckboxModal,
  translations,
}) => {
  const {
    tipTitleRoleClient,
    tipTextRoleClient,
    optionModalRoleClient,
  } = translations;
  return (
    <>
      {translations[`textModalRoleClientCase${type}`]}
      <SCModalTip>
        <SCTipTitle>{tipTitleRoleClient}</SCTipTitle>
        <SCTipText>{tipTextRoleClient}</SCTipText>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkModal}
              onChange={handleCheckboxModal}
              name="optionModal"
              color="primary"
            />
          }
          label={optionModalRoleClient}
        />
      </SCModalTip>
    </>
  );
};
