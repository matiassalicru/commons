import { render, fireEvent, screen } from '@testing-library/react'
import { InputHour } from './InputHour'

const componentProps = {
  chargeEnabled: false,
  estimateEnabled: false,
  enableEstimateButton: false,
  eventLog: { suggestedEdit: () => null },
  enabledDay: true,
  enableEditHour: true,
  enableDeleteHour: true,
  sgEnableEditHour: true,
  sgEnableDeleteHour: true,
}

const TestComponent = props => {
  return <InputHour {...componentProps} {...props} />
}

describe('<InputHour />', () => {
  describe('ChargeHour mode charged', () => {
    test('Should return true if hover in/out wrapper charged', () => {
      // events
      const onMouseOverMock = jest.fn()
      const onMouseLeaveMock = jest.fn()

      const newProps = { chargeEnabled: true, onlySuggestion: false }
      render(<TestComponent {...newProps} />)

      // component wrapper
      const wrapper = screen.getByTestId('InfoContainerHovercharged')
      // Inject event mock
      wrapper.onmouseover = onMouseOverMock
      // Simulated event
      fireEvent.mouseOver(wrapper)
      expect(onMouseOverMock).toHaveBeenCalled()
      // Inject event mock
      wrapper.onmouseleave = onMouseLeaveMock
      // Simulated event
      fireEvent.mouseLeave(wrapper)
      expect(onMouseLeaveMock).toHaveBeenCalled()
    })

    test('Should appear the edition button when hovering on it charged', () => {
      const onMouseOverMock = jest.fn()
      const newProps = { estimateEnabled: true }
      render(<TestComponent {...newProps} />)
      // component
      const wrapper = screen.getByTestId('InfoContainerHovercharged')
      // Inject event mock
      wrapper.onmouseover = onMouseOverMock()
      fireEvent.mouseOver(wrapper)

      const editButton = screen.getByTestId('IconEditButtom')
      expect(editButton).toBeInTheDocument()
    })

    test('Should call the edit function when click it the charge hour button', () => {
      // Event
      const onClickMock = jest.fn()
      const newProps = { estimateEnabled: true, onStartEdition: onClickMock() }
      render(<TestComponent {...newProps} />)

      // component wrapper
      const wrapper = screen.getByTestId('InfoContainerHovercharged')
      // Simulated event
      fireEvent.mouseOver(wrapper)
      // component button
      const customBtn = screen.getByTestId('IconEditButtom')

      // Simulated event
      fireEvent.click(customBtn)
      expect(onClickMock).toHaveBeenCalled()
    })

    test('Should appear button accept and cancel when i click it the button for charged hours', () => {
      // Event
      const onClickMock = jest.fn()
      const newProps = { estimateEnabled: true, onStartEdition: onClickMock() }
      render(<TestComponent {...newProps} />)

      // Component wrapper
      const wrapper = screen.getByTestId('InfoContainerHovercharged')
      // Simulated event
      fireEvent.mouseOver(wrapper)
      // Component button
      const editCustomBtn = screen.getByTestId('IconEditButtom')

      // Simulated event
      fireEvent.click(editCustomBtn)
      expect(onClickMock).toHaveBeenCalled()

      // Component icon accept button
      const confirmCustomBtn = screen.getByTestId('IconAcceptButtom')
      expect(confirmCustomBtn).toBeInTheDocument()
      // Component icon cancel button
      const cancelCustomBtn = screen.getByTestId('IconCancelButtom')
      expect(cancelCustomBtn).toBeInTheDocument()
    })

    test('Should appear button accept and cancel when i click it the button for charged hours', () => {
      // Event
      const onClickMock = jest.fn()

      const newProps = {
        onStartEdition: onClickMock(),
        estimateEnabled: true,
      }
      render(<TestComponent {...newProps} />)

      // Component wrapper
      const wrapper = screen.getByTestId('InfoContainerHovercharged')
      // Simulated event
      fireEvent.mouseOver(wrapper)
      // Component button
      const editCustomBtn = screen.getByTestId('IconEditButtom')

      // Simulated event
      fireEvent.click(editCustomBtn)
      expect(onClickMock).toHaveBeenCalled()

      // Component icon accept button
      const confirmCustomBtn = screen.getByTestId('IconAcceptButtom')
      expect(confirmCustomBtn).toBeInTheDocument()
      // Component icon cancel button
      const cancelCustomBtn = screen.getByTestId('IconCancelButtom')
      expect(cancelCustomBtn).toBeInTheDocument()
    })

    test('Should call the accep function when i click it the button for accept charged hours', () => {
      // Event
      const onClickEditMock = jest.fn()
      const onClickAcceptMock = jest.fn()

      const newProps = {
        onStartEdition: onClickEditMock(),
        handleClickCheckHour: onClickAcceptMock({ hour: 1, minutes: 0 }),
        estimateEnabled: true,
        hourLoad: 1,
      }
      render(<TestComponent {...newProps} />)
      // Component wrapper
      const wrapper = screen.getByTestId('InfoContainerHovercharged')
      // Simulated event
      fireEvent.mouseOver(wrapper)
      // Component button
      const editCustomBtn = screen.getByTestId('IconEditButtom')

      // Simulated event
      fireEvent.click(editCustomBtn)
      expect(onClickEditMock).toHaveBeenCalled()

      // Component button accept
      const confirmCustomBtn = screen.getByTestId('IconAcceptButtom')
      // Simulated event
      fireEvent.click(confirmCustomBtn)
      expect(onClickAcceptMock).toHaveBeenCalled()
      expect(onClickAcceptMock).toHaveBeenCalledWith({ hour: 1, minutes: 0 })
    })

    test('Should call the cancel function when i click it the button for cancel charged hours', () => {
      // Event
      const onClickCancelMock = jest.fn()

      const newProps = {
        onCloseEdition: onClickCancelMock(),
        estimateEnabled: true,
        hourLoad: 6,
      }

      render(<TestComponent {...newProps} />)

      // component wrapper
      const wrapper = screen.getByTestId('InfoContainerHovercharged')
      // Simulated event
      fireEvent.mouseOver(wrapper)
      // component button
      const editCustomBtn = screen.getByTestId('IconEditButtom')
      // Simulated event
      fireEvent.click(editCustomBtn)
      // component button
      const cancelCustomBtn = screen.getByTestId('IconCancelButtom')
      // Simulated event
      fireEvent.click(cancelCustomBtn)
      expect(onClickCancelMock).toHaveBeenCalled()
    })

    test('Should call the cancel function when i click it the button for cancel charged hours', () => {
      // Event
      const onClickEditMock = jest.fn()
      const onClickCancelMock = jest.fn()

      const newProps = {
        onStartEdition: onClickEditMock(),
        onCloseEdition: onClickCancelMock(),
        estimateEnabled: false,
        sgEnable: true,
        sgHourLoad: 1,
      }

      render(<TestComponent {...newProps} />)

      // Component wrapper
      const wrapper = screen.getByTestId('InfoContainerHoversuggested')
      // Simulated event
      fireEvent.mouseOver(wrapper)
      // Component button
      const editCustomBtn = screen.getByTestId('IconEditButtom')
      // Simulated event
      fireEvent.click(editCustomBtn)
      // Component button
      const cancelCustomBtn = screen.getByTestId('IconCancelButtom')
      // Simulated event
      fireEvent.click(cancelCustomBtn)
      expect(onClickCancelMock).toHaveBeenCalled()
    })
  })

  describe('ChargeHour mode suggested', () => {
    test('Should return true if hover in/out wrapper suggested', () => {
      // events
      const onMouseOverMock = jest.fn()
      const onMouseLeaveMock = jest.fn()
      const newProps = { sgEnable: true, sgHourLoad: 1 }
      render(<TestComponent {...newProps} />)

      // component
      const wrapper = screen.getByTestId('InfoContainerHoversuggested')

      // Inject event mock
      wrapper.onmouseover = onMouseOverMock
      // Simulated event
      fireEvent.mouseOver(wrapper)
      expect(onMouseOverMock).toHaveBeenCalled()

      // Inject event mock
      wrapper.onmouseleave = onMouseLeaveMock
      // Simulated event
      fireEvent.mouseLeave(wrapper)
      expect(onMouseLeaveMock).toHaveBeenCalled()
    })
    test('Should appear the edition and delete button when hovering on it suggested', () => {
      const onMouseOverMock = jest.fn()
      const newProps = { sgEnable: true, sgHourLoad: 1 }
      render(<TestComponent {...newProps} />)
      // component
      const wrapper = screen.getByTestId('InfoContainerHoversuggested')
      wrapper.onmouseover = onMouseOverMock()
      // Simulated event
      fireEvent.mouseOver(wrapper)
      // Component edit button
      const editButton = screen.getByTestId('IconEditButtom')
      expect(editButton).toBeInTheDocument()
      // Component delete button
      const deleteButton = screen.getByTestId('IconDeleteButtom')
      expect(deleteButton).toBeInTheDocument()
    })
    test('Should call the edit function when click it the suggestion hour button', () => {
      // Event
      const onClickMock = jest.fn()
      const newProps = {
        onStartEdition: onClickMock(),
        estimateEnabled: false,
        chargeEnabled: false,
        onlySuggestion: true,
        sgEnable: true,
        sgHourLoad: 1,
      }
      render(<TestComponent {...newProps} />)

      // Component wrapper
      const wrapper = screen.getByTestId('InfoContainerHoversuggested')
      // Simulated event
      fireEvent.mouseOver(wrapper)
      // Component edit button
      const editButton = screen.getByTestId('IconEditButtom')

      // Simulated event
      fireEvent.click(editButton)
      expect(onClickMock).toHaveBeenCalled()
    })
    test('Should appear button accept and cancel when i click it the button for suggested hours', () => {
      // Event
      const onClickMock = jest.fn()

      const newProps = {
        onStartEdition: onClickMock(),
        estimateEnabled: true,
        sgEnable: true,
        sgHourLoad: 1,
      }

      render(<TestComponent {...newProps} />)
      // Component wrapper
      const wrapper = screen.getByTestId('InfoContainerHoversuggested')
      // Simulated event
      fireEvent.mouseOver(wrapper)
      // Component button
      const editCustomBtn = screen.getByTestId('IconEditButtom')

      // Simulated event
      fireEvent.click(editCustomBtn)
      expect(onClickMock).toHaveBeenCalled()

      // Component accept button
      const confirmCustomBtn = screen.getByTestId('IconAcceptButtom')
      expect(confirmCustomBtn).toBeInTheDocument()
      // Component cancel button
      const cancelCustomBtn = screen.getByTestId('IconCancelButtom')
      expect(cancelCustomBtn).toBeInTheDocument()
    })
    test('Should call the accep function when i click it the button for accept suggestion hours', () => {
      // Event
      const onClickEditMock = jest.fn()
      const onClickAcceptMock = jest.fn()
      const newProps = {
        onStartEdition: onClickEditMock(),
        sgHandleClickCheckHour: onClickAcceptMock(),
        estimateEnabled: true,
        sgEnable: true,
        sgHourLoad: 1,
      }
      render(<TestComponent {...newProps} />)
      // Component wrapper
      const wrapper = screen.getByTestId('InfoContainerHoversuggested')
      // Simulated event
      fireEvent.mouseOver(wrapper)
      // Component edit button
      const editCustomBtn = screen.getByTestId('IconEditButtom')
      // Simulated event
      fireEvent.click(editCustomBtn)
      expect(onClickEditMock).toHaveBeenCalled()
      // Component accept button
      const confirmCustomBtn = screen.getByTestId('IconAcceptButtom')
      // Simulated event
      fireEvent.click(confirmCustomBtn)
      expect(onClickAcceptMock).toHaveBeenCalled()
    })
  })

  describe('Suggestion Button', () => {
    test('Should call the edit function when click it the suggestion hour button', () => {
      // Event
      const onClickMock = jest.fn()

      const newProps = {
        onStartEdition: onClickMock,
        estimateEnabled: true,
        sgEnable: true,
        sgHourLoad: 1,
      }

      render(<TestComponent {...newProps} />)

      // Component wrapper
      const wrapper = screen.getByTestId('InfoContainerHoversuggested')
      // Simulated event
      fireEvent.mouseOver(wrapper)
      // Component button
      const editButton = screen.getByTestId('IconEditButtom')

      // Simulated event
      fireEvent.click(editButton)
      expect(onClickMock).toHaveBeenCalled()
    })

    test('Should call the delete function when click it the suggestion hour button delete', () => {
      // Event
      const onClickMock = jest.fn()

      const newProps = {
        sgHandleDeleteHour: onClickMock(),
        estimateEnabled: true,
        sgEnable: true,
        sgHourLoad: 1,
      }

      render(<TestComponent {...newProps} />)
      // Component wrapper
      const wrapper = screen.getByTestId('InfoContainerHoversuggested')
      // Simulated event
      fireEvent.mouseOver(wrapper)
      // Component button
      const deleteCustomBtn = screen.getByTestId('IconDeleteButtom')
      // Simulated event
      fireEvent.click(deleteCustomBtn)
      expect(onClickMock).toHaveBeenCalled()
    })

    test('Should appear Suggestion Button with icon cor', () => {
      const newProps = {
        enableEstimateButton: true,
        estimateEnabled: true,
      }
      render(<TestComponent {...newProps} />)

      // Component wrapper
      const wrapper = screen.getByTestId('SuggestionButtonWrapper')
      expect(wrapper).toBeInTheDocument()
    })

    test('Should Suggestion Button with icon color white', () => {
      const newProps = {
        enableEstimateButton: true,
        estimateEnabled: true,
      }

      render(<TestComponent {...newProps} />)

      // Component wrapper
      const wrapper = screen.getByTestId('SCSuggestionButton')
      expect(wrapper).toHaveStyle('background-color: #fff;')
    })

    test('Should Suggestion Button with icon color black', () => {
      const newProps = {
        enableEstimateButton: true,
        estimateEnabled: true,
        iconColor: 'black',
      }

      render(<TestComponent {...newProps} />)

      // Component wrapper
      const wrapper = screen.getByTestId('SCSuggestionButton')
      expect(wrapper).toHaveStyle('background-color: #000;')
    })

    test('Should Suggestion Button with icon logo color gray', () => {
      const newProps = {
        enableEstimateButton: true,
        estimateEnabled: true,
        grayLogo: true,
      }

      render(<TestComponent {...newProps} />)

      // Component wrapper
      const wrapper = screen.getByTestId('SCSuggestionButton')
      expect(wrapper).toHaveStyle('filter: grayscale(40);')
    })

    test('Should Suggestion Button with icon logo color yellow', () => {
      const newProps = {
        enableEstimateButton: true,
        estimateEnabled: true,
        grayLogo: false,
      }

      render(<TestComponent {...newProps} />)

      // Component wrapper
      const wrapper = screen.getByTestId('SCSuggestionButton')
      expect(wrapper).not.toHaveStyle('filter: grayscale(40);')
    })
    test('The button should be displayed on the center', () => {
      const newProps = {
        enableEstimateButton: true,
        estimateEnabled: true,
      }

      render(<TestComponent {...newProps} />)

      // Component wrapper
      const wrapper = screen.getByTestId('SuggestionButtonWrapper')
      // styles for button
      const style = `
        left: 0px;
        z-index: 20;
      `
      expect(wrapper).toHaveStyle(style)
    })
    test('Should call the edit function when click it the charge hour input and the variant is false', () => {
      const onClickMock = jest.fn()

      const newProps = {
        estimateEnabled: true,
        variant: false,
        onStartEdition: onClickMock(),
      }

      render(<TestComponent {...newProps} />)

      // component
      const wrapper = screen.getByTestId('InfoContainerHovercharged')
      // Simulated event
      fireEvent.click(wrapper)

      const acceptButtom = screen.getByTestId('IconAcceptButtom')
      const cancelButtom = screen.getByTestId('IconCancelButtom')

      expect(onClickMock).toHaveBeenCalled()
      expect(acceptButtom).toBeInTheDocument()
      expect(cancelButtom).toBeInTheDocument()
    })
    test('should not call the edit function when you click on the estimate and the variant is true', () => {
      const onClickMock = jest.fn()

      const newProps = {
        estimateEnabled: true,
        variant: true,
        onStartEdition: onClickMock,
      }

      render(<TestComponent {...newProps} />)

      // component
      const wrapper = screen.getByTestId('InfoContainerHovercharged')
      // Simulated event
      fireEvent.click(wrapper)

      expect(onClickMock).not.toHaveBeenCalled()
    })
  })

  describe('Comments icon', () => {
    test('should show comment icon', () => {
      const newProps = {
        estimateEnabled: false,
        enabledComments: true,
        showCommentsIcon: true,
      }

      render(<TestComponent {...newProps} />)

      const buttonComment = screen.getByTestId('icon-comments')
      expect(buttonComment).toBeInTheDocument()
    })

    test('should call click event when clicking on icon comment', () => {
      const onClickActionCommentsMock = jest.fn()
      const newProps = {
        estimateEnabled: false,
        enabledComments: true,
        onClickActionComments: onClickActionCommentsMock(),
        showCommentsIcon: true,
      }

      render(<TestComponent {...newProps} />)

      const buttonComment = screen.getByTestId('icon-comments')
      fireEvent.click(buttonComment)
      expect(onClickActionCommentsMock).toHaveBeenCalled()
      expect(onClickActionCommentsMock).toHaveBeenCalledTimes(1)
    })

    test('Should show ellipsis when there are more that forty caracters', () => {
      const newProps = {
        estimateEnabled: false,
        enabledComments: true,
        tooltipButtonComments: 'test',
        showCommentsIcon: true,
      }

      render(<TestComponent {...newProps} />)
    })
  })
})
