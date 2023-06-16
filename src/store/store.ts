// import {
//     FLUSH,
//     PAUSE,
//     PERSIST,
//     persistReducer,
//     PURGE,
//     REGISTER,
//     REHYDRATE,
// } from 'redux-persist';
// import {
//     Action,
//     CombinedState,
//     combineReducers,
//     configureStore,
// } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import mainSlice from './slices/mainSlice';
// import userSlice from './slices/userSlice';
// import { googleApi } from './slices/api';
// import menuSlice from './slices/menuSlice';

// export type RootState = {
//     main: any;
//     user: any;
//     google: any;
//     menu: any;
//     hackathon: any;
// };

// const reducers = combineReducers<CombinedState<RootState>, Action<any>>({
//     main: mainSlice,
//     user: userSlice,
//     [googleApi.reducerPath]: googleApi.reducer,
//     menu: menuSlice,
//     hackathon: hackathonSlice,
// });

// const persistConfig = {
//     key: 'root',
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
//     reducer: persistedReducer,
//     devTools: process.env.NODE_ENV !== 'production',
//     middleware: (getDefaultMiddleware) => {
//         return getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }).concat([googleApi.middleware]);
//     },
// });

// export default store;
