/**
 * Function to remove html tags from a string
 * @param {string} value - String with html tags
 */
export const deleteSpecialCharacters = (value: string): string => value.replace(/[^A-Z0-9]+/gi, '')
