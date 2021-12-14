import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './drawer/drawer';
import {Provider} from 'react-redux'
import store from './store/store';


export default function App() {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}
