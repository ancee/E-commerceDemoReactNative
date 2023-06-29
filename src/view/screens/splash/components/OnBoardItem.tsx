import React from 'react';

// import all the components we are going to use
import {StyleSheet, View, Text, Image} from 'react-native';
import {OnBoardingModel} from '../model/OnBoardingModel';

type OnBoardingModelProps = {
  item: OnBoardingModel;
};

const RenderItem = (props: OnBoardingModelProps) => {
  return (
    <View
      style={[
        styles.onBoardItemStyle,
        {backgroundColor: props.item.backgroundColor},
      ]}>
      <Text style={styles.introTitleStyle}>{props.item.title}</Text>
      <Image style={styles.introImageStyle} source={{uri: props.item.image}} />
      <Text style={styles.introTextStyle}>{props.item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  onBoardItemStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 100,
  },
});

export default RenderItem;
