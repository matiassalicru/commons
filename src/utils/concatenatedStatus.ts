import { linksProps, warnConcatenatedReturn } from './utils.interface'

const FINISHED = 'finalizada'
const NEW = 'nueva'
const FATHER = 'father'
const SON = 'son'
/**
 * Verifica si la tareas está concateda y si tiene dependencias finish to start.
 *
 * @param {object} links objeto que contiene data de la tarea antecesora y predecesora
 */

export default function warnConcatenated(links: linksProps): warnConcatenatedReturn {
  let fatherTaskeDependencies = false

  if (links?.source.length) {
    fatherTaskeDependencies = links?.source.some((source: { status: string }) => source.status !== FINISHED)
  }

  let sonTaskDependencies = false

  if (links?.target.length) {
    sonTaskDependencies = links?.target.some((target: { status: string }) => target.status !== NEW)
  }

  const STATUS = {
    hasDependencies: fatherTaskeDependencies || sonTaskDependencies,
    type: fatherTaskeDependencies ? FATHER : SON,
    status: fatherTaskeDependencies ? FINISHED : NEW,
  }

  return STATUS
}
