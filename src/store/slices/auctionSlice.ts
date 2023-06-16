// import {
//     ActionReducerMapBuilder,
//     CaseReducer,
//     PayloadAction,
//     createAsyncThunk,
//     createSlice,
// } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { proxyAddress } from '../../utils/Link';
// import { HackathonProps } from '../interfaces/hackathon.interface';

// export const subscribe = () => { };

// const initialState: HackathonProps = {};

// export const initHackathon = createAsyncThunk<any, any>(
//     'init-hackathon',
//     async (values) => {
//         const token = localStorage.getItem('token');

//         try {
//             const { data }: any = await axios.post(
//                 `${proxyAddress}/hackathon/init`,
//                 values,
//                 {
//                     headers: { 'x-access-token': token },
//                 },
//             );
//             return data;
//         } catch (e: any | unknown) {
//             throw e.response.data.msg;
//         }
//     },
// );

// export const sendHackathon = createAsyncThunk(
//     'create-hackathon',
//     async (values) => {
//         const token = localStorage.getItem('token');

//         try {
//             const { data }: any = await axios.post(
//                 `${proxyAddress}/hackathon/send`,
//                 values,
//                 {
//                     headers: { 'x-access-token': token },
//                 },
//             );
//             return data;
//         } catch (e: any | unknown) {
//             throw e.response.data.msg;
//         }
//     },
// );

// export const auctionSlice = createSlice<
//     HackathonProps,
//     {
//         resetInitialized: CaseReducer<HackathonProps>;
//         resetSent: CaseReducer<HackathonProps>;
//         resetErrMsg: CaseReducer<HackathonProps>;
//     },
//     'main'
// >({
//     name: 'main',
//     initialState,
//     reducers: {
//         resetInitialized: (state) => ({ ...state, initialized: false }),
//         resetSent: (state) => ({ ...state, sent: false }),
//         resetErrMsg: (state) => ({ ...state, errMsg: null }),
//     },
//     extraReducers: (builder: ActionReducerMapBuilder<HackathonProps>) => {
//         // inititalize a hackthon
//         builder.addCase(initHackathon.pending, (state) => {
//             state.initializing = true;
//         });

//         builder.addCase(initHackathon.fulfilled, (state, { payload }) => {
//             state.initializing = false;
//             state.initialized = true;
//             state.escrowProps = payload;
//         });

//         builder.addCase(initHackathon.rejected, (state, action) => {
//             state.initializing = false;
//             state.errMsg = {
//                 msg: action.error.message,
//                 Id: 'INIT_ESCROW_ERROR',
//             };
//         });

//         // create a hackthon
//         builder.addCase(sendHackathon.pending, (state) => {
//             state.sending = true;
//         });

//         builder.addCase(sendHackathon.fulfilled, (state, { payload }) => {
//             state.sending = false;
//             state.sent = true;
//             state.escrowProps = payload;
//         });

//         builder.addCase(sendHackathon.rejected, (state, action) => {
//             state.sending = false;
//             state.errMsg = {
//                 msg: action.error.message,
//                 Id: 'CREATE_HACKATHON_ERROR',
//             };
//         });
//     },
// });

// export const { resetInitialized, resetSent, resetErrMsg } =
//     auctionSlice.actions;

// export default auctionSlice.reducer;
