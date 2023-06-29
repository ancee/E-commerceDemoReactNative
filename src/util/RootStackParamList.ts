import {CategoriesProduct} from '../state/categoriesProductsSlice';

export type RootStackParamList = {
  SPLASH_SCREEN_NAME: undefined;
  HOME_TAB_SCREEN_NAME: undefined;
  HOME_SCREEN_NAME: undefined;
  DETAIL_SCREEN_NAME: {item: CategoriesProduct};
};
