// TO DO: Adaptar el componente para que utilize en su mayoria componentes MUI cuando este bien definido como.

import { render, screen } from '@testing-library/react'
import { GenericModal } from './GenericModal'
import { ModalComponentProp } from './GenericModal.interface'

const childrenReactElement = <div>This is a children</div>

const componentsProps = {
  styles: {
    top: 100,
    right: 100,
    afterX: 20,
    width: '200px',
    height: '100px',
    maxWidth: 500,
    maxHeight: 500,
  },
}

const TestComponents = ({ children, styles }: ModalComponentProp) => {
  return <GenericModal styles={styles}>{children}</GenericModal>
}

describe('<GenericModal />', () => {
  test('Should have a child element', () => {
    render(<TestComponents>{childrenReactElement}</TestComponents>)
    expect(screen.getByText(/this is a children/i)).toBeInTheDocument()
  })
  test('Should respect top placement style', () => {
    const { container } = render(
      <TestComponents styles={componentsProps.styles}>{childrenReactElement}</TestComponents>
    )
    expect(container.firstChild).toHaveStyle(`top: ${componentsProps.styles.top}px`)
  })
  test('Should respect size style', () => {
    const { container } = render(
      <TestComponents styles={componentsProps.styles}>{childrenReactElement}</TestComponents>
    )
    expect(container.firstChild?.firstChild).toHaveStyle(`width: ${componentsProps.styles.width}`)
  })
})
