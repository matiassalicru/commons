declare global {
  interface Window {
    dataLayer: Array<unknown>
  }
}

const EXCLUDED_COMPAINES = [2336, 60, 1601, 528, 718, 2194, 1952, 2477]

/**
 * Loguea un evento en amplitude.
 *
 * @param {string} event Nombre del evento para envíar a Amplitude
 * @param {object} params Información para enviar al evento de Amplitude
 * @param {number} companyId Id de la compañia para el evento
 */
export default function dispatchAmplitude(
  event: string,
  companyId: number,
  params: Record<string, unknown> = {}
): void {
  if (event) {
    if (!EXCLUDED_COMPAINES.includes(companyId)) {
      window?.dataLayer?.push({
        event: 'Amplitude',
        amplitude: {
          event,
          params,
        },
      })
    } else {
      console.info('Amplitude event (dev)', event, params)
    }
  }
}
