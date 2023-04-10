import { useMemo } from 'react'
import PropTypes from 'prop-types'
// Components
import { ChevronRight } from '@projectcor/icons/lib/components/ChevronRight'
// Constants
import { SECTION_DASHBOARD_COLLAPSIBLE_TASKS } from '../../constants/dashboard'
// styles
import { LYBreadcrumb, SCTaskTitle } from './style'

export const BreadcrumbContainer = ({
  father,
  project,
  deliverable,
  originSection,
  hasBreadcrumb,
  validateChildQ,
  isDirectFatherRendered,
}) => {
  const { client, brand, product } = project || {}

  const ChevronRightStyles = (
    <div>
      <ChevronRight color="#919191" width="10px" height="7px" />
    </div>
  )

  const showProjectData = useMemo(() => project && originSection !== SECTION_DASHBOARD_COLLAPSIBLE_TASKS, [project])

  const showFather = !isDirectFatherRendered && father

  return (
    <>
      {hasBreadcrumb && (showProjectData || showFather) && (
        <LYBreadcrumb childQ={validateChildQ} deliverable={deliverable}>
          {showProjectData && (
            <>
              {client && (
                <>
                  {client.name}
                  {ChevronRightStyles}
                </>
              )}
              {brand && (
                <>
                  {brand.name}
                  {ChevronRightStyles}
                </>
              )}
              {product && (
                <>
                  {product.name}
                  {ChevronRightStyles}
                </>
              )}
              <>
                {project && project.name}
                {showFather && ChevronRightStyles}
              </>
            </>
          )}
          <SCTaskTitle>{!isDirectFatherRendered && father?.title}</SCTaskTitle>
        </LYBreadcrumb>
      )}
    </>
  )
}

BreadcrumbContainer.propTypes = {
  /**
   * Father data
   */
  father: PropTypes.object,
  /**
   * project data
   */
  project: PropTypes.object,
  /**
   * shows if there should be a breadcrumb
   */
  hasBreadcrumb: PropTypes.bool.isRequired,
  /**
   * shows if have children
   */
  validateChildQ: PropTypes.bool.isRequired,
  /**
   * section
   */
  originSection: PropTypes.string.isRequired,
  /**
   * shows if it has the rendered parent
   */
  isDirectFatherRendered: PropTypes.bool.isRequired,
  /**
   * shows if it has the deliverable componente rendered
   */
  deliverable: PropTypes.bool.isRequired,
}
