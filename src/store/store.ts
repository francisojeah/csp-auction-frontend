import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import {
    Action,
    CombinedState,
    combineReducers,
} from '@reduxjs/toolkit';
import menuSlice from './slices/menuSlice';

export interface RootState {
    string1: string;
    menu: number;
}


const initialState: RootState = {
    string1: "",
    menu: 0
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
        menu: menuSlice

    }
});