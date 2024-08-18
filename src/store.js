import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/ProductSlice';
import colorReducer from './reducers/ColorSlice';
import brandReducer from './reducers/BrandSlice';
import cardreducer from './reducers/CardSlice';
const store = configureStore({
    reducer: {
        products: productReducer,
        colors: colorReducer,
        brand: brandReducer,
        card: cardreducer
    },
});

export default store;