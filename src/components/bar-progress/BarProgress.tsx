import { ReactElement, useEffect, useState } from 'react'
import { BarProgressProp } from './BarProgress.interface'
// Styles
import { SCWrapperBars, SCBaseBar, SCPrimaryBar } from './style'

/**
 * Este componente renderiza una barra de progreso reprentada por dos barras con diferentes colores.
 * "colorBaseBar" representa el color base por defecto,
 * mientras que "colorPrimaryBar" nos va a permitir tener un feedback visual del progreso.
 * El calculo del progreso lo hace a partir de la prop "progress".
 */

const defaultProps = {
  progress: 0,
  colorPrimaryBar: '#333333',
  height: 5,
  borderRadius: 50,
  colorBaseBar: '#ededed',
} as BarProgressProp

export function BarProgress({
  progress,
  colorPrimaryBar,
  height,
  borderRadius,
  colorBaseBar,
}: BarProgressProp): ReactElement {
  const [widthBar, setWidthBar] = useState(0)

  useEffect(() => {
    setWidthBar(progress)
  }, [progress])

  return (
    <SCWrapperBars propHeight={height} borderRadius={borderRadius} data-testid="BarWrapper">
      <SCBaseBar propColor={colorBaseBar} />
      <SCPrimaryBar setColor={colorPrimaryBar} progress={widthBar} />
    </SCWrapperBars>
  )
}

BarProgress.defaultProps = defaultProps
