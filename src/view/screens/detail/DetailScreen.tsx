import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {CategoriesProduct} from '../../../state/categoriesProductsSlice';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../../util/RootStackParamList';
import {DETAIL_SCREEN_NAME} from '../../../util/AppNavigator';

const win = Dimensions.get('window');
const width = win.width;

type DetailScreenRouteProp = RouteProp<
  RootStackParamList,
  typeof DETAIL_SCREEN_NAME
>;

interface Props {
  route?: DetailScreenRouteProp;
}

const DetailScreen: React.FC<Props> = props => {
  const item: CategoriesProduct | undefined = props.route?.params?.item;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewImage}>
        <ImageBackground style={styles.image} source={{uri: item?.image}} />
      </View>

      <Text style={styles.text}>
        cschsdcscbhsbcdsbcskcbskcbwjcbwjcbbbjbjdbcjdbcjdbcjbcjdcbdcbjdbcjdbcdjcbjdbcjdbcjdbcjdbcjdbcjdbcjdcjdbcjdcjdcjdjcjdcjdcjdcdjcjdcjdcjdcdbcj
      </Text>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
  },
  viewImage: {
    height: 200,
    margin: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 8,
    borderColor: 'black',
    borderWidth: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'center',
    alignSelf: 'stretch',
  },
  text: {
    padding: 10,
    margin: 10,
    fontSize: 50,
    borderColor: 'black',
    borderWidth: 5,
    height: 200,
    alignSelf: 'stretch',
  },
});
