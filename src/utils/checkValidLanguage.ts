import { langObject } from './utils.interface'

export default function checkValidLanguage(validLanguages: langObject, currLanguage: string): string {
  return validLanguages[currLanguage] ? currLanguage : 'en'
}
