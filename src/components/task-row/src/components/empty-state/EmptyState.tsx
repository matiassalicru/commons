import { Suspense, FunctionComponent } from 'react'

import Colors from '@projectcor/theme/lib/base/colors'
import { ListChecklist } from '@projectcor/icons/lib/components/ListChecklist'
import { EmptyStateProps } from './EmptyState.interface'
// Styles
import { SCWrapper, SCText, SCIcon } from './style'

export const EmptyState: FunctionComponent<EmptyStateProps> = ({ size = '60px', color = Colors.grey[200], text }) => {
  return (
    <SCWrapper>
      <div>
        <Suspense fallback={<div />}>
          <SCIcon>
            <ListChecklist color={color} width={size} height={size} />
          </SCIcon>
        </Suspense>
        <SCText>{text}</SCText>
      </div>
    </SCWrapper>
  )
}
