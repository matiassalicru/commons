import { Breadcrumbs } from '@material-ui/core'
import { ReactElement } from 'react'
import { Tooltip } from '@projectcor/tooltipv2/lib/components/Tooltip'
import { SCBreadCrumbItem, SCBreadCrumbsWrapper } from './style'
import { BreadCrumbProps } from './BreadCrumb.interface'

const ELLIPSIS_STRING_LENGTH = 17

export const BreadCrumb = ({
  brandName = '',
  clientName = '',
  projectName = '',
  withoutClientText = '',
  withoutProjectText = '',
  theme = 'default',
}: BreadCrumbProps): ReactElement => {
  const breadCrumbsTreeData = () => {
    const breadcrumbTree: ReactElement[] = []
    if (clientName) {
      breadcrumbTree.push(
        <Tooltip
          key="client_key"
          placement="top"
          title={clientName}
          disableHoverListener={clientName.length < ELLIPSIS_STRING_LENGTH + 1}
        >
          <SCBreadCrumbItem>{clientName}</SCBreadCrumbItem>
        </Tooltip>
      )
    } else {
      breadcrumbTree.push(<SCBreadCrumbItem key="without_client_key">{withoutClientText}</SCBreadCrumbItem>)
    }
    if (projectName) {
      breadcrumbTree.push(
        <Tooltip
          key="project_key"
          placement="top"
          title={projectName}
          disableHoverListener={projectName.length < ELLIPSIS_STRING_LENGTH}
        >
          <SCBreadCrumbItem>{projectName}</SCBreadCrumbItem>
        </Tooltip>
      )
    } else {
      withoutProjectText &&
        breadcrumbTree.push(<SCBreadCrumbItem key="without_client_key">{withoutProjectText}</SCBreadCrumbItem>)
    }
    brandName &&
      breadcrumbTree.push(
        <Tooltip
          key="brand_key"
          placement="top"
          title={brandName}
          disableHoverListener={brandName.length < ELLIPSIS_STRING_LENGTH}
        >
          <SCBreadCrumbItem>{brandName}</SCBreadCrumbItem>
        </Tooltip>
      )
    return breadcrumbTree
  }
  return (
    <SCBreadCrumbsWrapper theme={theme}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadCrumbsTreeData()}
      </Breadcrumbs>
    </SCBreadCrumbsWrapper>
  )
}
