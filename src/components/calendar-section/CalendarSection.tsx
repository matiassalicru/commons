import { ReactElement } from 'react'
import uuid from 'react-uuid'
import Colors from '@projectcor/theme/lib/base/colors'
// UI Components
import { Tooltip } from '@projectcor/tooltip/lib'
import { ChevronRight } from '@projectcor/icons/lib/components/ChevronRight'
import { CalendarProps, CalendarSectionProps } from './CalendarSection.interface'
// Styles
import { SCCSCalendarName, SCCSTitle, SCCSWrapper, SCCSWrapperCalendarItem, SCCSWrapperIcon } from './style'

const ELLIPSIS_STRING_LENGTH = 27

export const CalendarSection = ({
  title,
  calendarName,
  onClickCalendarSelected,
}: CalendarSectionProps): ReactElement => {
  const handleClickDiv = (id: number) => {
    const calendarSelected = calendarName.find(calendar => calendar.id === id)
    onClickCalendarSelected(calendarSelected as CalendarProps)
  }
  const iconStyles = {
    width: '14px',
    height: '14px',
    color: Colors.grey[300],
  }
  return (
    <SCCSWrapper>
      <SCCSTitle>{title}</SCCSTitle>
      {calendarName.map(calendar => {
        return (
          <SCCSWrapperCalendarItem
            key={`calendarItem-${uuid()}`}
            data-testid={`SCCSWrapperCalendarItem-${calendar.id}`}
            onClick={() => handleClickDiv(calendar.id)}
          >
            <Tooltip
              placement="bottom"
              title={calendar.name}
              disableHoverListener={calendar.name?.length < ELLIPSIS_STRING_LENGTH}
            >
              <SCCSCalendarName>{calendar.name}</SCCSCalendarName>
            </Tooltip>
            <SCCSWrapperIcon>
              <ChevronRight {...iconStyles} />
            </SCCSWrapperIcon>
          </SCCSWrapperCalendarItem>
        )
      })}
    </SCCSWrapper>
  )
}
