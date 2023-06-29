import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import SVGFlash from '../../../../../assets/icons/flash.svg';
import SVGBill from '../../../../../assets/icons/bill.svg';
import SVGGame from '../../../../../assets/icons/game.svg';
import SVGGift from '../../../../../assets/icons/gift.svg';

function ShortCutComponents() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <SVGFlash> </SVGFlash>
        </View>
        <Text style={styles.textTitle}>Flash</Text>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <SVGBill> </SVGBill>
        </View>
        <Text style={styles.textTitle}>Bill</Text>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <SVGGame> </SVGGame>
        </View>
        <Text style={styles.textTitle}>Game</Text>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <SVGGift> </SVGGift>
        </View>
        <Text style={styles.textTitle}>Gift</Text>
      </View>
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <SVGGift> </SVGGift>
        </View>
        <Text style={styles.textTitle}>More</Text>
      </View>
    </View>
  );
}

export default ShortCutComponents;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  subContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    height: 70,
    width: 70,
    borderRadius: 10,
    backgroundColor: '#F9E7DB',
    alignItems: 'center',
  },
  textTitle: {
    color: 'grey',
    fontSize: 14,
  },
  textSubTitle: {
    color: 'white',
    fontSize: 24,
    paddingStart: 10,
    fontWeight: 'bold',
  },
});
