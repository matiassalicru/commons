import { FunctionComponent, ReactElement, useMemo } from 'react'
// Wording
import { useTranslation } from 'react-i18next'
// UI Components
import { Search as SearchIcon } from '@projectcor/icons/lib/components/Search'
import Colors from '@projectcor/theme/lib/base/colors'
// Styles
import { SCSearch, Wrapper } from './styles'
// Types
import { SearchTypes } from './Search.interface'
// Constants
import { I18N_SECTION } from '../../../../../../constants/filters/config'

const POSITION_FILTER_KEY = 'name'

const onFilterChange = (target, data, setData) => {
  const { value } = target
  const wordsWritten = value.split(' ')
  const filteredData = data?.filter(item => {
    return Object.keys(item).some(key => {
      return (
        typeof item[key] === 'string' &&
        key === POSITION_FILTER_KEY &&
        wordsWritten.every((word: string) => item[key].toLowerCase().includes(word.toLowerCase()))
      )
    })
  })
  setData(filteredData)
}

export const Search: FunctionComponent<SearchTypes> = ({
  onSearch,
  data = [],
  setData = () => {
    // do nothing
  },
  isFilter = false,
}): ReactElement => {
  const { t } = useTranslation(I18N_SECTION)

  const handleFilterChange = ({ target }) => onFilterChange(target, data, setData)

  const dataArgs = useMemo(() => (isFilter ? 'filter' : 'search'), [isFilter])

  return (
    <Wrapper>
      <SearchIcon color={Colors.colors.gray.medium} />
      <SCSearch
        maxLength={255}
        onChange={isFilter ? handleFilterChange : onSearch}
        placeholder={t('search')}
        data-js={`filter-l2-${dataArgs}`}
        data-robot-id={`filters-${dataArgs}-input`}
      />
    </Wrapper>
  )
}
