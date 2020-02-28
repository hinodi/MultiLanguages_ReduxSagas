import React from 'react'
import { Provider } from 'react-redux'

import './src/i18n';
import createStore from './src/Redux'

import Screen from './src';

// create our store
const store = createStore()

const App = () =>
  <Provider store={store}>
    <Screen />
  </Provider>

export default App