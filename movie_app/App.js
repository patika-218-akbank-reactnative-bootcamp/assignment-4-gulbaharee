import React from 'react';
import StackNavigator from './src/navigator/StackNavigator';
import {store} from './src/store/index';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
};

export default App;
