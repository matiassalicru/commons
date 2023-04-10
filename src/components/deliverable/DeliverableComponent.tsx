import { useState, useMemo, useCallback, useEffect, ReactElement, useRef } from 'react'
import ReactTooltip from 'react-tooltip'
// Wording
import { useTranslation } from 'react-i18next'
// Global Component
import { SvgIcon } from '../svg-icon'
// Component
import { DeliverableInput } from './deliverableInput'
import { Switch } from '../switch'
import { SwitchSize } from '../switch/Switch.interface'
import { CORLottie } from '../cor-lottie'
// Styles
import {
  SCDeliverableComponentIconWrapper,
  SCDeliverableComponentWrapper,
  SCDeliverableComponentContentWrapper,
  SCDeliverableComponent,
  SCTitleWrapper,
  SCIconInformation,
  SCInputAndIcon,
  SCLoading,
  SCSwitchWrapper,
} from './style'
import { DeliverableProps, DeliverableStatus } from './Deliverable.interface'

const KEY_ENTER = 'Enter'
const KEY_ESCAPE = 'Escape'

export const DeliverableComponent = ({
  deliverable = 0,
  handleUpdateTask = () => {
    // default function
  },
  handleCheckboxStatus = () => {
    // default function
  },
  simpleVersion = false,
  archived = false,
  tooltip = false,
  deliverableStatus,
  editable,
  iconText,
  onStartEditing = () => {
    // default function
  },
  onFinishEditing = () => {
    // default function
  },
  onInputFocus = () => {
    // default function
  },
  onInputBlur = () => {
    // default function
  },
  onCancel = () => {
    // default function
  },
  onInfoIconHover = () => {
    // default function
  },
  onIconHover = () => {
    // default function
  },
  loading = false,
  switchIdentify = '',
}: DeliverableProps): ReactElement => {
  const { t } = useTranslation('task_panel')
  const [inputValue, setInputValue] = useState<number | string>(0)
  const [editing, setEditing] = useState(false)
  const [mouseEnter, setMouseEnter] = useState(false)
  const [focus, setFocus] = useState(false)
  const tooltipRef = useRef(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const INITIAL_VALUE = useMemo(() => deliverable, [deliverable])

  useEffect(() => {
    setInputValue(INITIAL_VALUE)
  }, [deliverable])

  const handleClickSave = () => {
    if (inputValue === ''.trim()) {
      return
    }
    setInputValue(+inputValue)
    handleUpdateTask({ deliverable: +inputValue })
    setEditing(false)
    setFocus(false)
    setMouseEnter(false)
    onFinishEditing()
  }

  const handleClickCancel = () => {
    setEditing(false)
    setFocus(false)
    setMouseEnter(false)
    setInputValue(+INITIAL_VALUE)
    onFinishEditing()
    onCancel()
  }

  const onKeyDown = useCallback(
    e => {
      if (e.key === KEY_ENTER && editing) {
        if (inputValue === ''.trim()) {
          return
        }
        e.currentTarget.blur()
        if (!inputValue) handleClickCancel()
        handleClickSave()
        onFinishEditing()
      } else if (e.key === KEY_ESCAPE && editing) {
        e.currentTarget.blur()
        handleClickCancel()
        onFinishEditing()
      }
    },
    [editing, handleClickSave, inputValue]
  )

  useEffect(() => {
    window.localStorage.deliverable = JSON.stringify({
      deliverable: editing ? 'true' : '',
    })
  }, [editing])

  const handleInputChange = e => {
    const {
      target: { value },
    } = e
    if (!value || /^\d+$/.test(value)) setInputValue(value)

    if (!editing) {
      setEditing(true)
      onStartEditing()
    }
  }

  const toggleDelivarableStatusCheckbox = useCallback(() => {
    let finalStatus: DeliverableStatus

    if (!deliverableStatus || deliverableStatus === DeliverableStatus.COUNTER) {
      finalStatus = DeliverableStatus.CHILDREN
    } else {
      finalStatus = DeliverableStatus.COUNTER
    }

    handleCheckboxStatus(finalStatus)
  }, [deliverableStatus])

  const onFocusInput = useCallback(() => {
    setFocus(true)
    onInputFocus()
    ReactTooltip.hide()
  }, [])

  const onBlurInput = useCallback(() => {
    setFocus(false)
    onInputBlur()
  }, [])

  const collapsed = simpleVersion && deliverable === 0 && editable && !mouseEnter && !focus && !editing
  const simpleTooltip =
    simpleVersion && iconText && !editing && !focus
      ? { 'data-tip': iconText, 'data-for': 'tooltip-deliverable-icon', onMouseEnter: onIconHover }
      : {}

  const handleClickWrapper = useCallback(() => {
    let timeout

    if (editable && simpleVersion) {
      setMouseEnter(true)

      if (deliverable === 0) {
        setInputValue('')
        timeout = setTimeout(() => {
          inputRef?.current?.focus()
        }, 50)
      }
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [editable, simpleVersion, deliverable, inputRef])

  const getSizeProps = useCallback(() => {
    let width = 30
    let height = 30

    if (simpleVersion) {
      width = 26
      height = 20
    }

    return {
      width,
      height,
    }
  }, [simpleVersion])
  return (
    <SCDeliverableComponent
      cursorPointer={editable && simpleVersion && deliverable === 0}
      sv={simpleVersion}
      align={tooltip}
      onClick={handleClickWrapper}
    >
      <SCDeliverableComponentWrapper
        deliverableStatus={deliverableStatus}
        editable={editable}
        sv={simpleVersion}
        collapsed={collapsed}
        {...simpleTooltip}
        ref={tooltipRef}
      >
        {loading ? (
          <SCLoading sv={simpleVersion}>
            <CORLottie {...getSizeProps()} />
          </SCLoading>
        ) : (
          <>
            {!simpleVersion && (
              <SCTitleWrapper>
                <div>{t('deliverable').toUpperCase()}</div>
                <SCIconInformation
                  onMouseEnter={onInfoIconHover}
                  data-tip={iconText}
                  data-for="tooltip-deliverable-icon"
                >
                  <SvgIcon iconName="information" />
                </SCIconInformation>
              </SCTitleWrapper>
            )}
            <SCDeliverableComponentContentWrapper>
              <SCInputAndIcon>
                <SCDeliverableComponentIconWrapper
                  editable={editable}
                  sv={simpleVersion}
                  archived={archived}
                  collapsed={collapsed}
                >
                  <SvgIcon iconName="hand-holding-box" />
                </SCDeliverableComponentIconWrapper>
                {!tooltip && !collapsed && (
                  <DeliverableInput
                    onKeyDown={onKeyDown}
                    updateValue={handleInputChange}
                    value={inputValue}
                    disabled={false}
                    autoComplete={false}
                    handleClickSave={handleClickSave}
                    handleClickCancel={handleClickCancel}
                    editing={editing}
                    editable={editable}
                    sv={simpleVersion}
                    handleFocus={onFocusInput}
                    handleBlur={onBlurInput}
                    deliverableStatus={deliverableStatus}
                    refInput={inputRef}
                  />
                )}
              </SCInputAndIcon>
              <SCSwitchWrapper id={switchIdentify}>
                {editable && !simpleVersion && !editing && (
                  <Switch
                    name="status"
                    size={SwitchSize.SMALL}
                    onClick={toggleDelivarableStatusCheckbox}
                    checked={deliverableStatus === DeliverableStatus.CHILDREN}
                  />
                )}
              </SCSwitchWrapper>
            </SCDeliverableComponentContentWrapper>
            <ReactTooltip
              place="top"
              effect="solid"
              delayShow={200}
              className="cor-tooltip"
              id="tooltip-deliverable-icon"
            />
          </>
        )}
      </SCDeliverableComponentWrapper>
    </SCDeliverableComponent>
  )
}
