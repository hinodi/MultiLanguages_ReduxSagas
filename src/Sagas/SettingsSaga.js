import i18n from "i18n-js"

export function* updateLanguage(action) {
  const { language, type } = action
  i18n.locale = language
}