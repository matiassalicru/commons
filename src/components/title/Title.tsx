import { useState, useCallback, useEffect, useRef, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Tooltip } from '@projectcor/tooltipv2/lib/components/Tooltip'
// Components
import Colors from '@projectcor/theme/lib/base/colors'
import { Subtask } from '@projectcor/icons/lib/components/Subtask'
import { ButtonIconCustom } from '../button-icon-custom'
import { TitleProps } from './Title.interface'
// Styles
import { SCWrapperTitle, SCText, SCInput, SCEdit } from './style'

const ENTER_KEY = 'Enter'
const ESCAPE_KEY = 'Escape'

export function Title({
  content,
  changeTitle = () => {
    // default function
  },
  entityId,
  ableToEdit,
  isRouter = false,
  href = '',
  clickTitle,
  showSubtaskIcon = false,
  tooltip = '',
  fontSize = '14px',
  fontWeight = 400,
  showBorderHover = false,
  maxLength = '255',
  onStartEdition = () => {
    // do-nothing
  },
  onCloseEdition = () => {
    // do-nothing
  },
  hasDragAndDrop = false,
}: TitleProps): ReactElement {
  /**
   * Referencia del input donde se edita el título
   */
  const INPUT_REF = useRef<HTMLInputElement>(null)
  const [edit, setEdit] = useState(false)
  const [newTitle, setNewTitle] = useState(content)

  useEffect(() => {
    setNewTitle(content)
  }, [content])
  /**
   * Cuando se habilita la edición hago focus en el input.
   * */
  useEffect(() => {
    if (edit && INPUT_REF) {
      INPUT_REF.current?.focus()
    }
  }, [edit, INPUT_REF])

  /**
   * Evalua si actualizo el título
   * */
  const evaluteUpdate = useCallback(
    event => {
      if (ableToEdit) {
        const inputText = INPUT_REF?.current?.value
        const inputTrim = inputText && inputText.trim()
        if (!!inputTrim?.length && inputText !== content) {
          changeTitle(entityId, inputTrim)
        } else {
          setNewTitle(content)
        }
        setEdit(false)
        onCloseEdition(event)
      }
    },
    [content, ableToEdit, INPUT_REF, changeTitle, setNewTitle]
  )

  /**
   * Escucho el blur del input
   * */
  const handleBlurInput = useCallback(
    event => {
      evaluteUpdate(event)
    },
    [content, INPUT_REF, evaluteUpdate]
  )

  /**
   * Escucho el key press ENTER.
   * */
  const handleKeyInput = useCallback(
    e => {
      if (e.key === ENTER_KEY) {
        evaluteUpdate(e)
      }
    },
    [content, INPUT_REF, evaluteUpdate]
  )

  /**
   * Escucho onChange al tipear dentro del input y actualizo estado
   * */
  const handleChangeInput = useCallback(
    ({ target: { value } }) => {
      setNewTitle(value)
    },
    [INPUT_REF, setNewTitle]
  )

  /**
   * Habilitar el modo edición del título de la subtarea
   * */
  const handleClickEnableEdition = useCallback(
    (_buttonRef, event) => {
      if (!ableToEdit) {
        return
      }
      setEdit(true)
      onStartEdition(event)
    },
    [ableToEdit, setEdit]
  )

  /**
   * Escucha a la espera de un ESCAPE
   * para cerrar el modo edición
   * */
  const handleKeyboardDown = useCallback(
    e => {
      if (e.key === ESCAPE_KEY && edit) {
        setEdit(false)
        setNewTitle(content)
        onCloseEdition(e)
      }
    },
    [ESCAPE_KEY, edit, setEdit, content, setNewTitle]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboardDown)
    return () => window.removeEventListener('keydown', handleKeyboardDown)
  }, [edit])

  const InputComponents = () => {
    if (edit)
      return (
        <SCInput
          maxLength={+maxLength}
          value={newTitle}
          onBlur={handleBlurInput}
          onKeyPress={handleKeyInput}
          onChange={handleChangeInput}
          ref={INPUT_REF}
          fontSize={fontSize}
          data-testid="input-edit"
        />
      )
    if (isRouter)
      return (
        <Tooltip title={tooltip}>
          <Link to={href}>
            <SCText>{newTitle}</SCText>
          </Link>
        </Tooltip>
      )
    return (
      <>
        <Tooltip title={tooltip}>
          <SCText onClick={clickTitle}>
            {showSubtaskIcon && <Subtask width="18px" height="18px" color={Colors.text.mediumGray} />}
            {newTitle}
          </SCText>
        </Tooltip>
      </>
    )
  }

  return (
    <SCWrapperTitle
      ableToEdit={ableToEdit}
      showBorderHover={showBorderHover}
      fontSize={fontSize}
      fontWeight={fontWeight}
      editing={edit}
      hasDragAndDrop={hasDragAndDrop}
    >
      {InputComponents()}
      {ableToEdit && (
        <SCEdit ableToEdit={ableToEdit}>
          <ButtonIconCustom
            icon="pencil-alt"
            iconSize={16}
            dataTestId="pencil-edit"
            onClikAction={handleClickEnableEdition}
            color="#6F6F6F"
            background="transparent"
            onHoverBackground="#F5F5F5"
          />
        </SCEdit>
      )}
    </SCWrapperTitle>
  )
}
