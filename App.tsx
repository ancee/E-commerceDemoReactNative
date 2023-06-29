import React from 'react';

// import all the components we are going to use

//import AppIntroSlider to use it
import AppNavigator from './src/util/AppNavigator';
import {Provider} from 'react-redux';
import store from './src/state/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
