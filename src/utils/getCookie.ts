/**
 * @param cName: cookie name
 * @returns cookie value || undefined
 */
export function getCookie(cName: string): string | undefined {
  const name = `${cName}=`
  const cDecoded = decodeURIComponent(document.cookie)
  const cArr = cDecoded.split('; ')
  let res: string | undefined
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) res = val.substring(name.length)
  })
  return res
}
