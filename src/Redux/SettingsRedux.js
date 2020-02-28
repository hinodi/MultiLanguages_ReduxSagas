import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import i18n from "i18n-js"

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  changeLanguage: ['language']
})

export const SettingsTypes = Types

export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  language: i18n.locale.substr(0, 2) // take over the recognized, or default if not recognized, language locale as initial state
})

/* ------------- Reducers ------------- */
export const changeLanguage = (state, { language }) => {
  console.log('hinodi language vô đây coi', language);
  return state.merge({
    language
  })
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_LANGUAGE]: changeLanguage,
})