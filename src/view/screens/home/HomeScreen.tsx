import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBarComponent from './components/SearchBarComponent';
import DiscountBanner from './components/DiscountBanner';
import ShortCutComponents from './components/ShortCutComponents';
import CategoriesProductComponent from './components/CategoriesProductComponent';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.parentContainer}>
      <SearchBarComponent />
      <DiscountBanner />
      <ShortCutComponents />
      <CategoriesProductComponent />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    padding: 16,
    flexDirection: 'column',
    backgroundColor: '#FBFBFB',
  },
});
