// Wording
import { useTranslation } from 'react-i18next'
// Styles
import { SCPositionLabel, SCPositionsWrapper } from './styles'
// Constants
import { I18N_SECTION, NO_POSITION } from '../../../../../../constants/filters/config'
// Interfaces and type aliases
import { IPosition } from '../../../../Filters.interface'

interface IPositionsChip {
  data: IPosition[]
}

export const PositionsChip = ({ data }: IPositionsChip) => {
  const { t } = useTranslation([I18N_SECTION])
  return (
    <SCPositionsWrapper>
      {data.map(({ name, id }, index) => {
        return (
          <SCPositionLabel key={`position_chip_${id}_${name}`}>
            {name === NO_POSITION ? t(NO_POSITION) : name + (index === data.length - 1 ? '' : ',')}
          </SCPositionLabel>
        )
      })}
    </SCPositionsWrapper>
  )
}
