/**
 * Function to remove html tags from a string
 * @param {string} value - String with html tags
 */
export const normalizeStringWithHtmlTags = (value: string): string => {
  return value.replace(/<\/?[^>]+(>|$)/g, '')
}

/**
 * Function to delete formated html inner spaces
 * @param {string} value - String parsed from html tags
 */
export const deleteHtmlSpaces = (value: string): string => {
  return value.replace(/&nbsp;/gi, '')
}
