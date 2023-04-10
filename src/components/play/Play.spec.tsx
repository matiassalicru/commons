import { render } from '@testing-library/react'
import { Play } from './Play'
import { PlayStatus } from './Play.interface'

const setup = (mock = {}) =>
  render(
    <Play
      status={PlayStatus.play}
      taskID={0}
      handleClick={() => {
        // default function
      }}
      wordingTip=""
      dataRobotId=""
      {...mock}
    />
  )

describe('<Play />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})

describe('<Play showTooltip={false} />', () => {
  test('Should be in the document - showTooltip false', () => {
    const { container } = render(
      <Play
        status={PlayStatus.play}
        taskID={0}
        handleClick={() => null}
        wordingTip=""
        dataRobotId=""
        showTooltip={false}
      />
    )

    expect(container).toBeInTheDocument()
  })
})
