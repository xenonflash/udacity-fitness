import React from 'react';
import { View } from 'react-native';
import AddEntry from './components/AddEntry'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <AddEntry />
        </View>
      </Provider>
    );
  }
}
