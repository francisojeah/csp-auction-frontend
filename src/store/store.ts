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


import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import {
    Action,
    CombinedState,
    combineReducers,
} from '@reduxjs/toolkit';

export interface RootState {
    string1: string;
}


const initialState: RootState = {
    string1: "",
}


const sportSlice1 = createSlice({
    name: "sports1",
    initialState: initialState.string1,
    reducers: {
        updateSport1: (state, action: PayloadAction<string>) => {
            return action.payload
        }

    }
})






export const { updateSport1 } = sportSlice1.actions;


export const store = configureStore({
    reducer: {
        string1: sportSlice1.reducer,
    }
});