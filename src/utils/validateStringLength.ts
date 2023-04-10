/**
 * Function to validate if a given string has reached a given length
 * @param {string} value - String to be validated
 * @param {string} length - Number of characters to validate
 */
export const validateStringLength = (value: string, length: number): boolean => {
  return String(value).length <= length
}
