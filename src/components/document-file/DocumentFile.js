import React, { useCallback } from "react";
import PropTypes from "prop-types";
//styles
import { SCItemList, SCFileName, SCName, SCWeight } from "./style";
// Utils
import { getFileExtension } from "./../../utils/getFileExtension";
import { calculateCharacters } from "./../../utils/limitCharacters";
import { getFileSize } from "./../../utils/getFileSize";
import { removeFileExtension } from "./../../utils/removeFileExtension";
// Global UI Components
import { IconTypeFile } from "./../icon-type-file";
// Functional Components
import { FileButtons } from "./FileButtons";

const LIMIT_CHARACTERS_SMALL = 13;
const LIMIT_CHARACTERS_FULL = 35;
const VARIANT_FULL = "full";
export function DocumentFile({
  file: { id, name, size, url, source, file_type },
  onClickDelete,
  messageId,
  variant = VARIANT_FULL,
}) {
  /**
   * Llamo a función para eliminar el archivo/documento.
   */
  const handleClick = useCallback(() => {
    onClickDelete(messageId, id);
  }, [id, messageId, onClickDelete]);

  /**
   * Tomo el nombre del archivo/docuento, le quito la extensión y limito
   * la cantidad de caracteres.
   * @param {number} limit - Cantidad de caracteres.
   */
  const getName = useCallback(
    (limit) => {
      const fileExt = getFileExtension(name);
      return `${removeFileExtension(calculateCharacters(name, limit))}${
        fileExt !== "" ? "." + fileExt : fileExt
      }`;
    },
    [name]
  );

  return (
    <SCItemList variant={variant}>
      <IconTypeFile
        fileType={
          source === "GoogleDrive" ? "googleDrive" : getFileExtension(name)
        }
      />
      <SCFileName>
        <SCName variant={variant}>
          {getName(
            variant === VARIANT_FULL
              ? LIMIT_CHARACTERS_FULL
              : LIMIT_CHARACTERS_SMALL
          )}
        </SCName>
        {+size !== 0 && (
          <SCWeight variant={variant}>{getFileSize(size)}</SCWeight>
        )}
      </SCFileName>
      {variant === VARIANT_FULL &&
        <FileButtons
          file_type={file_type}
          source={source}
          url={url}
          handleClick={handleClick}
        />
      }
    </SCItemList>
  );
}

DocumentFile.propTypes = {
  file: PropTypes.object,
  onClickDelete: PropTypes.func.isRequired,
  variant: PropTypes.string,
};
