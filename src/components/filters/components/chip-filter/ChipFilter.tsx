import { useCallback, FunctionComponent, useMemo, memo, useRef, ReactElement, useContext } from 'react'
import moment from 'moment'
// Wording
import { useTranslation } from 'react-i18next'
import ReactTooltip from 'react-tooltip'
// COR-UI
import Colors from '@projectcor/theme/lib/base/colors'
import { Cross } from '@projectcor/icons/lib/'
// Utils
import { getTypeOfDate } from '../../utils/getTypeOfDate'
// UI Components
import { PositionsChip } from './components/positions-chip'
import { Avatars } from './components/avatars'
// Types
import { ChipFilterTypes } from './ChipFilter.interface'
import { AvatarDataTypes, IPosition } from '../../Filters.interface'
// Styles
import { SCWrapper, SCLabel, SCName, SCContentWrapper, SCIconWrapper, SCSearchLabel, SCTooltipWrapper } from './styles'
// Constants
import { AMPLITUDE_EVENTS, AMPLITUDE_ACTIONS } from '../../../../constants/filters/amplitude'
import { I18N_SECTION, WITHOUT_DEADLINE } from '../../../../constants/filters/config'
// Context
import { ContextTypes, FilterContext } from '../../Context'

export const ChipFilter: FunctionComponent<ChipFilterTypes> = memo(
  ({ chipData, onClick, onDelete, getChipPosition, isSelected = false, getCustomDate }): ReactElement | null => {
    // TODO: delete validations of chipData
    if (!chipData?.data?.length) {
      return null
    }

    const { trackEvent, lang, config } = useContext(FilterContext) as ContextTypes
    const { t } = useTranslation(I18N_SECTION)
    const langDateFormat = useMemo(() => (lang === 'en' ? 'MM/DD/YYYY' : 'DD/MM/YYYY'), [lang])

    /**
     * Referencia del elemento que representa el chip.
     */
    const CHIP_REF = useRef<HTMLDivElement>(null)

    const handleDelete = useCallback(
      event => {
        event.stopPropagation()

        trackEvent({
          event: AMPLITUDE_EVENTS.DELETE_FILTER,
          actionType: AMPLITUDE_ACTIONS.CLICK,
          option: chipData?.id,
        })

        onDelete(chipData?.id)
      },
      [chipData, onDelete]
    )

    /**
     * Click en el chip
     */
    const handleClick = useCallback(() => {
      const isCustomDate = getTypeOfDate(chipData?.data[0])
      onClick(chipData, true)
      getChipPosition(CHIP_REF)
      getCustomDate(isCustomDate)

      trackEvent({
        event: AMPLITUDE_EVENTS.EDIT_FILTER,
        actionType: AMPLITUDE_ACTIONS.CLICK,
        option: chipData?.id,
      })
    }, [CHIP_REF, chipData])

    const type = useMemo(
      () =>
        chipData?.id === 'deadline' ||
        chipData?.id === 'initialDate' ||
        chipData?.id === 'creationDate' ||
        chipData?.id === 'date'
          ? 'date'
          : config[chipData?.id]?.type,
      [chipData?.id]
    )

    const isSimple = useMemo(() => config[chipData?.id]?.type === 'text', [chipData?.id])
    const date = !!chipData?.data.length && {
      from: chipData?.data[0].fromDate,
      to: chipData?.data[0].toDate,
    }

    const fromDateIsNull = useMemo(() => date?.from === 'null' || date?.from === undefined, [date])
    const toDateIsNull = useMemo(() => date?.to === 'null' || date?.to === undefined, [date])
    const MAX_CHIP_TEXT = 43

    const chip = {
      date: (
        <SCLabel>
          {date.from === WITHOUT_DEADLINE && t('withoutDeadline')}
          {!fromDateIsNull &&
            date.from !== WITHOUT_DEADLINE &&
            `${t('dateFrom')}: ${moment(date.from).format(langDateFormat)}`}
          {!fromDateIsNull && !toDateIsNull && ` - `}
          {!toDateIsNull && `${t('dateTo')}: ${moment(date.to).format(langDateFormat)}`}
        </SCLabel>
      ),
      text: (
        <SCLabel
          data-for="full-text-filters"
          data-effect="solid"
          data-place="top"
          data-tip={chipData?.data?.map(item => ` ${t(item.title)}`)}
          data-tip-disable={String(chipData?.data?.map(item => ` ${t(item.title)}`)).length < MAX_CHIP_TEXT}
          data-robot-id="filters-chipfilter-text-label"
        >
          {chipData?.data?.map((item, index) => `${t(item.title)}${index !== chipData?.data.length - 1 ? ',' : ''} `)}
        </SCLabel>
      ),
      avatars: <Avatars data={chipData?.data as AvatarDataTypes[]} lang={lang} />,
      positions: <PositionsChip data={chipData?.data as IPosition[]} />,
      search: (
        <SCSearchLabel
          data-for="full-text-filters"
          data-robot-id="filters-chipfilter-search-label"
          data-effect="solid"
          data-place="top"
          data-tip={chipData?.data?.map(item => item.title)}
          data-tip-disable={String(chipData?.data?.map(item => item.title)).length < MAX_CHIP_TEXT}
        >
          {chipData?.data?.map(item => item.title)}
        </SCSearchLabel>
      ),
    }

    return (
      <SCWrapper
        isSelected={isSelected}
        isSimple={isSimple}
        onClick={handleClick}
        ref={CHIP_REF}
        data-robot-id="filters-chipfilter-box"
      >
        <SCContentWrapper>
          <SCName data-robot-id="filters-chipfilter-title">{t(chipData?.title || chipData?.id)}:</SCName>
          {!!chipData?.data.length && chip[type]}
          <SCTooltipWrapper>
            <ReactTooltip id="full-text-filters" />
          </SCTooltipWrapper>
          <SCIconWrapper onClick={handleDelete}>
            <Cross height={14} width={14} color={Colors.colors.gray.medium} />
          </SCIconWrapper>
        </SCContentWrapper>
      </SCWrapper>
    )
  }
)
