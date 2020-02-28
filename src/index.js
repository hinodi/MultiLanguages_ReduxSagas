import React, { Component } from 'react'
import { View, Text, Picker, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import SettingsActions from './Redux/SettingsRedux'
import i18n from "i18n-js"

class SettingsContainer extends Component {
  render() {
    const languageOptions = Object.keys(i18n.translations).map((lang, i) => {
      return (
        <Picker.Item
          key={i}
          label={i18n.translations[lang].label}
          value={lang}
        />
      )
    })

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          {i18n.t('settings.language')}
        </Text>
        <Picker style={styles.picker}
          selectedValue={this.props.language}
          onValueChange={this._languageChanged}
        >
          {languageOptions}
        </Picker>
      </View>
    )
  }

  _languageChanged = (newLang) => {
    this.props.changeLanguage(newLang)
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.settings.language,
  }
}

const mapStateToDispatch = dispatch => ({
  changeLanguage: (newLang) => dispatch(SettingsActions.changeLanguage(newLang))
})

export default connect(mapStateToProps, mapStateToDispatch)(SettingsContainer)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    textAlign: 'left',
    marginVertical: 10,
    marginLeft: 10,
  },
  picker: {
    flex: 1,
  }
});