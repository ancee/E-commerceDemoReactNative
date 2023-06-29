import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function DiscountBanner() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>A Summer Surprise </Text>
      <Text style={styles.textSubTitle}>Cashback 20% </Text>
    </View>
  );
}

export default DiscountBanner;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: '#49388C',
  },
  textTitle: {
    color: 'white',
    paddingStart: 10,
    fontSize: 14,
  },
  textSubTitle: {
    color: 'white',
    fontSize: 24,
    paddingStart: 10,
    fontWeight: 'bold',
  },
});
