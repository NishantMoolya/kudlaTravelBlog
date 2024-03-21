import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer';
import searchReducer from './reducers/searchReducer';
import placeReducer from './reducers/placeReducer';
import blogReducer from './reducers/blogReducer';

const store =  configureStore({
  reducer: {
    user:userReducer,
    searchplace:searchReducer,
    placeInfos:placeReducer,
    blogInfos:blogReducer
  },
});

export default store;