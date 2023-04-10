import { FunctionComponent, ReactElement, SyntheticEvent } from 'react'

// Providers
import { MuiThemeProvider } from '@material-ui/core/styles'

// Wordings
import { useTranslation } from 'react-i18next'

// Components
import Autocomplete from '@material-ui/lab/Autocomplete'
import ItemList from './ItemList'

// Types
import { ProjectSearchProps } from './index.interface'
import { SCWrapper, SCInput, theme } from './styles'

// Utils
import { I18N_SECTION } from '../../utils/config'
import { useProjects } from './hooks/useProjects'

const ProjectSearch: FunctionComponent<ProjectSearchProps> = ({
  borderColor,
  getProjects,
  handleSelectProject,
  projectDropdownWidth,
  project,
  hasError = false,
  errorMessage = '',
}): ReactElement => {
  const { resetValues, loadProjects, loading, projects, setSearch } = useProjects(getProjects)
  const { t } = useTranslation(I18N_SECTION)

  const getOptionLabel = option => option.name || ''
  const renderOption = option => <ItemList data={option} />
  const renderInput = params => {
    return (
      <div ref={params.InputProps.ref}>
        <SCInput
          style={{ width: 200 }}
          type="text"
          {...params.inputProps}
          placeholder={hasError ? t(errorMessage) : t('searchProject')}
          borderColor={borderColor}
          hasError={hasError}
        />
      </div>
    )
  }

  const onScroll = (event: SyntheticEvent) => {
    const listboxNode = event.currentTarget
    if (listboxNode.scrollTop + listboxNode.clientHeight === listboxNode.scrollHeight) {
      loadProjects()
    }
  }

  const onChange = (_, value, reason) => {
    reason === 'select-option' && handleSelectProject(value)
  }

  const onInputChange = (_, value) => {
    setSearch(value)
    resetValues()
  }

  return (
    <SCWrapper>
      <MuiThemeProvider theme={theme}>
        <Autocomplete
          data-robot-id="addTask-searchProject-dropdown"
          onOpen={resetValues}
          options={projects}
          onChange={onChange}
          getOptionLabel={getOptionLabel}
          renderInput={renderInput}
          renderOption={renderOption}
          style={{ width: projectDropdownWidth }}
          disableClearable
          loading={loading}
          ListboxProps={{
            onScroll,
            style: { maxHeight: 200, overflow: 'auto' },
          }}
          loadingText={t('loading')}
          onInputChange={onInputChange}
          value={project}
        />
      </MuiThemeProvider>
    </SCWrapper>
  )
}

export default ProjectSearch
