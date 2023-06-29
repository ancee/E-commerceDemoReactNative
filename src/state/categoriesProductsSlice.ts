import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosInstance from '../services/AxiosInstance';

export const fetchProducts = createAsyncThunk(
  'users/fetchByIdStatus',
  async () => {
    const response = await axiosInstance.get('products');
    console.debug(
      'fetchProducts',
      `fetchProducts response is :  ${response.data}`,
    );
    return response.data;
  },
);
export interface IProject {
  title: string;
  data: CategoriesProduct[];
}

export interface CategoriesProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: null;
}

export interface Progress {
  isLoading: boolean;
  error: string;
}

export interface CategoriesProductModel {
  categoriesProductList: IProject[];
  progress: Progress;
}

const progressValue: Progress = {
  isLoading: false,
  error: '',
};
const initialState: CategoriesProductModel = {
  categoriesProductList: [],
  progress: progressValue,
};

const categoriesProductsSlice = createSlice({
  name: 'CategoriesProducts',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.progress.isLoading = true;
      console.debug(
        'categoriesProductsSlice',
        `state.progress.isLoading ${state.progress.isLoading}`,
      );
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.progress.isLoading = false;
      state.categoriesProductList = [];
      console.debug(
        'categoriesProductsSlice',
        `state.progress.isLoading ${state.progress.isLoading} and payload length is ${action.payload.length}`,
      );
      const categoriesProductList: CategoriesProduct[] = [];
      for (let i = 0; i < action.payload.length; i++) {
        console.log('categoriesProductsSlice', action.payload[i].image);
        categoriesProductList.push(action.payload[i] as CategoriesProduct);
      }

      const map: Map<string, CategoriesProduct[]> = new Map();
      for (let i = 0; i < categoriesProductList.length; i++) {
        if (map.has(categoriesProductList[i].category)) {
          const list = map.get(categoriesProductList[i].category);
          list?.push(categoriesProductList[i]);
          if (list) {
            map.set(categoriesProductList[i].category, list);
          }
        } else {
          const list: CategoriesProduct[] = [];
          list?.push(categoriesProductList[i]);
          map.set(categoriesProductList[i].category, list);
        }
      }
      const arrLocal: IProject[] = [];
      console.debug('useEffect', `map value is ${map.size}`);
      //map.forEach((data, title) => arrLocal.push({title, data}));
      for (const [title, data] of map) {
        arrLocal.push({title, data});
      }
      console.debug('useEffect', `arrLocal value is ${arrLocal.length}`);
      state.categoriesProductList = arrLocal;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.progress.isLoading = true;
      state.progress.error = action.error.message ? action.error.message : '';
      console.debug(
        'categoriesProductsSlice',
        `state.progress.isLoading ${state.progress.isLoading} and error is ${state.progress.error}`,
      );
    });
  },
});

export const categoriesProductsSliceActions = categoriesProductsSlice.actions;
export default categoriesProductsSlice.reducer;
