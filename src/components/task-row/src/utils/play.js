/**
 *
 * Verify if the taskId has play active
 *
 * @param {String} taskId
 */
export const isPlayActive = taskId => {
  const counterData = localStorage?.TimeKeeper ? JSON.parse(localStorage?.TimeKeeper) : {}
  return +counterData?.taskId === +taskId
}

export default isPlayActive
