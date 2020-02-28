import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { SettingsTypes } from '../Redux/SettingsRedux'

/* ------------- Sagas ------------- */
import { updateLanguage } from './SettingsSaga'

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield takeLatest(SettingsTypes.CHANGE_LANGUAGE, updateLanguage)
}