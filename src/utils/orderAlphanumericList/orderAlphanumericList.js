/**
 *
 * @param {array} list to be ordered alphabetically by given prop of type string and numeric by given prop of type number
 * @param {string} stringKey prop of type string to be used for ordering
 * @param {string} numberKey prop of type number to be used for ordering
 * @param {string} numericOrder 'asc' or 'desc'
 * @returns {array} ordered list alphabetically by given prop of type string and numeric by given prop of type number
 */

const ASC = 'asc'
const DESC = 'desc'

export const orderAlphanumericList = ({ list, stringKey, numberKey = null, numericOrder = DESC }) => {
  const listSortedAlphabetic = list.sort((itemA, itemB) => itemA[stringKey].localeCompare(itemB[stringKey]))

  if (numberKey) {
    const mappedListWitouthRepeatedNames = listSortedAlphabetic
      .filter((_, index) => {
        const nextIndex = index + 1 <= listSortedAlphabetic.length ? index + 1 : index
        return (
          listSortedAlphabetic[index][stringKey] !==
          (listSortedAlphabetic[nextIndex] && listSortedAlphabetic[nextIndex][stringKey])
        )
      })
      .map(item => listSortedAlphabetic.filter(listItem => listItem[stringKey] === item[stringKey]))

    const numericOrderedList = mappedListWitouthRepeatedNames.map(listItem => {
      if (numericOrder === DESC) {
        return listItem.sort((itemA, itemB) => itemB[numberKey] - itemA[numberKey])
      }
      if (numericOrder === ASC) {
        return listItem.sort((itemA, itemB) => itemA[numberKey] - itemB[numberKey])
      }
    })

    return numericOrderedList.reduce((acc, item) => [...acc, ...item], [])
  }

  return listSortedAlphabetic
}
