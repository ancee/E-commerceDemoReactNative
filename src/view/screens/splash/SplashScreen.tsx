import React from 'react';

// import all the components we are going to use

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import {slides} from './model/OnBoardingModel';
import RenderItem from './components/OnBoardItem';
import {HOME_TAB_SCREEN_NAME} from '../../../util/AppNavigator';
//import {useNavigation} from '@react-navigation/native';

const SplashScreen = ({navigation}: {navigation: any}) => {
  //const navigationNew = useNavigation();

  const onDone = () => {
    navigation.replace(HOME_TAB_SCREEN_NAME);
  };
  const onSkip = () => {
    navigation.replace(HOME_TAB_SCREEN_NAME);
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={RenderItem}
      onDone={onDone}
      showSkipButton={true}
      onSkip={onSkip}
    />
  );
};
export default SplashScreen;
