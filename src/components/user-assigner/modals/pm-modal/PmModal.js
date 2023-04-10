import React from "react";

const PmModalMemo = ({ modalPmBody = "", modalPmBodyBold = "" }) => {
  return (
    <>
      {modalPmBody}
      <strong>{modalPmBodyBold}</strong>
    </>
  );
};

export const PmModal = React.memo(PmModalMemo);
