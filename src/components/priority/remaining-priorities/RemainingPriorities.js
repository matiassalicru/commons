import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
// Constant
import { CONFING_PRIORITIES } from "./../constant";
// UI Components
import { IconPriority } from "./../icon-priority";
// Styles
import { SCList, SCItemList, SCPriorityName } from "./style";

export const RemainingPriorities = ({
  top,
  left,
  priorities,
  translations,
  ableToEdit = true,
  closeList = () => {},
  updatePriority = () => {},
  isDynamicViewport = false,
}) => {
  const PRIORITY_LIST = useRef(null);

  /**
   * Evalue si el click fue por fuera del select.
   * Desmonto select.
   */
  const evalueHideList = (e) => {
    if (!PRIORITY_LIST.current.contains(e.target)) {
      closeList();
    }
  };

  useEffect(() => {
    document.addEventListener("click", evalueHideList);
    return () => {
      document.removeEventListener("click", evalueHideList);
    };
  }, []);

  return (
    <SCList
      top={top}
      left={left}
      ref={PRIORITY_LIST}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.2 },
      }}
      isDynamicViewport={isDynamicViewport}
    >
      {priorities.map((priority) => (
        <SCItemList key={priority} onClick={() => updatePriority(priority)}>
          <IconPriority
            priority={priority}
            isSelected={false}
            ableToEdit={ableToEdit}
            translations={translations}
          />
          <SCPriorityName>
            {translations[CONFING_PRIORITIES[priority].name]}
          </SCPriorityName>
        </SCItemList>
      ))}
    </SCList>
  );
};

RemainingPriorities.propTypes = {
  closeList: PropTypes.func,
  updatePriority: PropTypes.func,
  priorities: PropTypes.array.isRequired,
  translations: PropTypes.object.isRequired,
  /** Booleano que indica cuando el componente esta en un viewport dinamico (scroll infinito) */
  isDynamicViewport: PropTypes.bool,
};
