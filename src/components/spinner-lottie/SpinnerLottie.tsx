import { ReactElement } from 'react'
import Lottie from 'react-lottie'
import animationData from './spinner.json'
import corYellow from './COR_Preload_Yellow.json'
import corGrey from './COR_Preload_Gray.json'
// Styles
import { SCWrapperLottie } from './style'
import { SpinnerLottieProps } from './SpinnerLottie.interface'

const LOTTIE_CONFIG = {
  loop: true,
  autoplay: true,
  animationData: '',
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const getSpinnerType = (type: string) => {
  if (type === 'cor-grey') return corGrey
  if (type === 'cor-yellow') return corYellow
  return animationData
}
export function SpinnerLottie({
  size = 20,
  width,
  height,
  withShadow = false,
  background = '',
  type = 'default',
}: SpinnerLottieProps): ReactElement {
  const spinnerType = getSpinnerType(type)

  return (
    <SCWrapperLottie size={size} width={width} height={height} withShadow={withShadow} background={background}>
      <Lottie options={{ ...LOTTIE_CONFIG, animationData: spinnerType }} isClickToPauseDisabled />
    </SCWrapperLottie>
  )
}
