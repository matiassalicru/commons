import { ReactElement } from 'react'
import Lottie from 'react-lottie'
import animationData from './COR-Lottie.json'

// Styles
import { SCWrapperLottie } from './style'
import { CORLottieProps } from './CORLottie.interface'

const LOTTIE_CONFIG = {
  loop: true,
  autoplay: true,
  animationData: '',
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

export function CORLottie({ width = 20, height = 20 }: CORLottieProps): ReactElement {
  return (
    <SCWrapperLottie width={width} height={height}>
      <Lottie options={{ ...LOTTIE_CONFIG, animationData }} isClickToPauseDisabled />
    </SCWrapperLottie>
  )
}
