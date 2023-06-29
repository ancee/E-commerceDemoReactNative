import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, TextInput, View} from 'react-native';
import {IconInCircle} from '../../../../util/globalComponents/IconInCircle';

function SearchBarComponent() {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.searchParentContainer}>
      {/* search bar container */}
      <View style={styles.searchContainer}>
        <Icon style={styles.searchIcon} name="search" color="#000" size={20} />
        <TextInput
          placeholder="Search Product"
          style={styles.inputStyle}
          value={text}
          onChangeText={onChangeText}
        />
      </View>
      {/* cart and notification icon */}
      <View style={styles.cartAndNotificationIconContainer}>
        <IconInCircle
          name="shopping-cart"
          size={20}
          color="black"
          style={styles.searchIcon}
          borderWidth={1}
          backgroundColor="#F4F4F5"
          circleSize={50}
        />
        <IconInCircle
          name="bell"
          size={20}
          color="black"
          backgroundColor="#F4F4F5"
          style={styles.searchIcon}
          borderWidth={1}
          circleSize={50}
        />
      </View>
    </View>
  );
}

export default SearchBarComponent;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FBFBFB',
  },
  searchParentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    flex: 6,
    borderColor: 'grey',
    borderRadius: 25,
    backgroundColor: '#F4F4F5',
    marginLeft: 10,

    alignItems: 'center',
    padding: 2,
    paddingStart: 10,
    paddingEnd: 10,
  },
  cartAndNotificationIconContainer: {
    flex: 4,
    alignItems: 'center',
    alignSelf: 'center',

    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
  },
  searchIcon: {
    padding: 5,
    alignSelf: 'center',
  },
  cartIconView: {
    flex: 1,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#F4F4F5',
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 5,
    alignItems: 'center',
    alignContent: 'center',
  },
});
