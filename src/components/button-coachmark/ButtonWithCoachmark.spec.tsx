import { render } from '@testing-library/react'
import { ButtonWithCoachmark } from './ButtonWithCoachmark'
import { ButtonWithCoachmarkProps } from './ButtonWithCoachmark.interface'

const componentProps = {
  children: <div>Children</div>,
  description: '',
  onClickButton: jest.fn(),
}

const TestComponent = ({ ...props }: ButtonWithCoachmarkProps) => {
  return <ButtonWithCoachmark {...props} />
}

describe('<ButtonWithCoachmark />', () => {
  it('should render ButtonWithCoachmark', () => {
    const { container } = render(<TestComponent {...componentProps} />)
    expect(container).toBeInTheDocument()
  })
})
