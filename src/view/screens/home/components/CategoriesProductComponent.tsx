import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../../state/store';
import {
  CategoriesProduct,
  IProject,
  fetchProducts,
} from '../../../../state/categoriesProductsSlice';
import {capitalizeFirstLetter} from '../../../../util/extentionFunctions';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DETAIL_SCREEN_NAME} from '../../../../util/AppNavigator';

function CategoriesProductComponent() {
  const value = useSelector((state: RootState) => state.counter);
  //const [arr, setArr] = useState([]);

  const categoriesProductsValue = useSelector(
    (state: RootState) => state.categoriesProducts,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <View style={styles.parentContainer}>
      {/* <Text style={styles.text}>{value.count}</Text> */}
      {categoriesProductsValue.progress.isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={categoriesProductsValue.categoriesProductList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <CategoriesNestedListItem itemParent={item} />
          )}
        />
      )}
    </View>
  );
}
export const CategoriesNestedListItem = ({
  itemParent,
}: {
  itemParent: IProject;
}) => {
  return (
    <View>
      <Text style={styles.header}>
        {capitalizeFirstLetter(itemParent.title)}
      </Text>
      <FlatList
        data={itemParent.data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <CategoriesProductItem item={item} />}
      />
    </View>
  );
};

export const CategoriesProductItem = ({item}: {item: CategoriesProduct}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const handleClick = () => {
    navigation.navigate(DETAIL_SCREEN_NAME, {item: item});
  };
  return (
    <TouchableOpacity style={styles.categoryItemView} onPress={handleClick}>
      <Image style={styles.categoryItemImage} source={{uri: item.image}} />
      <View style={styles.overlay} />
      <Text
        style={styles.categoryItemText}
        numberOfLines={2}
        ellipsizeMode="tail">
        {capitalizeFirstLetter(item.title)}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoriesProductComponent;

const styles = StyleSheet.create({
  parentContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 0,
    flex: 1,
    borderRadius: 20,
    marginTop: 20,
  },
  categoryItemView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: 'black',
    margin: 8,
  },
  categoryItemImage: {
    flex: 1,
    width: 200,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    height: 100,
  },
  categoryItemText: {
    fontSize: 16,
    padding: 8,
    color: 'white',
    position: 'absolute',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'black',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    opacity: 0.5,
  },
  itemView: {
    backgroundColor: 'grey',
    margin: 8,
    padding: 8,
  },
  text: {
    color: 'black',
    padding: 8,
    fontSize: 18,
  },
  header: {
    color: 'black',
    padding: 8,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
