// import {
//     ActionReducerMapBuilder,
//     CaseReducer,
//     PayloadAction,
//     createAsyncThunk,
//     createSlice,
// } from '@reduxjs/toolkit';
// import {
//     CompanyProps,
//     NotificationsProps,
//     UserStateProps,
// } from '../interfaces/user.interface';
// import { ClientSignupProps } from '../../pages/Auth/Client/ClientSignup';
// import { proxyAddress } from '../../utils/Link';
// import { AuthProps, LoginProps } from '../../pages/Auth/Login';
// import axios from 'axios';
// import { UserSignupProps } from '../../pages/Auth/User/UserSignup';

// const initialState: UserStateProps = {
//     account: null,
//     defaultCurrency: 'USDC',
// };

// export const signupClient = createAsyncThunk<any, ClientSignupProps>(
//     'signup-client',
//     async (values) => {
//         try {
//             const { data }: any = await axios.post(
//                 `${proxyAddress}/user/client-register`,
//                 values,
//             );
//             return data;
//         } catch (e: any | unknown) {
//             throw e.response.data.msg;
//         }
//     },
// );

// export const signupUser = createAsyncThunk<any, UserSignupProps>(
//     'user-signup',
//     async (values) => {
//         try {
//             const { data }: any = await axios.post(
//                 `${proxyAddress}/user/user-register`,
//                 values,
//             );
//             return data;
//         } catch (e: any | unknown) {
//             throw e.response.data.msg;
//         }
//     },
// );

// export const login = createAsyncThunk<any, LoginProps>(
//     'login-user',
//     async (values) => {
//         try {
//             const { data }: any = await axios.post(
//                 `${proxyAddress}/user/login`,
//                 values,
//             );
//             return data;
//         } catch (e: any | unknown) {
//             throw e.response.data.msg;
//         }
//     },
// );

// export const requestPassword = createAsyncThunk<any, AuthProps>(
//     'request-password',
//     async (values) => {
//         try {
//             const { data }: any = await axios.post(
//                 `${proxyAddress}/user/request-password`,
//                 values,
//             );
//             return data;
//         } catch (e: any | unknown) {
//             throw e.response.data.msg;
//         }
//     },
// );

// export const changePassword = createAsyncThunk<any, AuthProps>(
//     'change-password',
//     async (values) => {
//         try {
//             const { data }: any = await axios.post(
//                 `${proxyAddress}/user/change-password`,
//                 values,
//             );
//             return data;
//         } catch (e: any | unknown) {
//             throw e.response.data.msg;
//         }
//     },
// );

// export const loadUser = createAsyncThunk<any>(
//     'load-user',
//     async () => {
//         const token = localStorage.getItem('token');

//         try {
//             const { data }: any = await axios.get<UserStateProps>(
//                 `${proxyAddress}/user`,
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

// export const profileUpdate = createAsyncThunk<any, LoginProps>(
//     'update-user-profile',
//     async (values) => {
//         const token = localStorage.getItem('token');
//         const headers = { 'x-access-token': token };

//         try {
//             const { data }: any = await axios.put(`${proxyAddress}/user`, values, {
//                 headers,
//             });
//             return data;
//         } catch (e: any | unknown) {
//             throw e.response.data.msg;
//         }
//     },
// );

// export const clientCompanyUpdate = createAsyncThunk<any, CompanyProps>(
//     'update-client-company-details',
//     async (values) => {
//         const token = localStorage.getItem('token');
//         const headers = { 'x-access-token': token };

//         try {
//             const { data }: any = await axios.put(`${proxyAddress}/company`, values, {
//                 headers,
//             });
//             return data;
//         } catch (e: any | unknown) {
//             throw e.response.data.msg;
//         }
//     },
// );

// export const updateNotificationsSettings = createAsyncThunk<
//     any,
//     NotificationsProps
// >('update-notifications-settings', async (values) => {
//     const token = localStorage.getItem('token');
//     const headers = { 'x-access-token': token };
//     try {
//         const { data }: any = await axios.put(
//             `${proxyAddress}/user/notifications`,
//             values, {
//             headers,
//         });
//         return data;
//     } catch (e: any | unknown) {
//         throw e.response.data.msg;
//     }
// });

// export const userSlice = createSlice<
//     UserStateProps,
//     {
//         setAccount: CaseReducer<UserStateProps, PayloadAction<any>>;
//         resetRegErrMsg: CaseReducer<UserStateProps>;
//         resetRegistered: CaseReducer<UserStateProps>;
//         resetUser: CaseReducer<UserStateProps>;
//         resetPasswordRequested: CaseReducer<UserStateProps>;
//         resetChangedRequested: CaseReducer<UserStateProps>;
//         logoutUser: CaseReducer<UserStateProps>;
//         resetProfileUpdated: CaseReducer<UserStateProps>;
//         resetCompanyUpdated: CaseReducer<UserStateProps>;
//         resetNotificationsUpdated: CaseReducer<UserStateProps>;
//     },
//     'user'
// >({
//     name: 'user',
//     initialState,
//     reducers: {
//         setAccount: (state, { payload }: PayloadAction<any>) => {
//             state.account = payload;
//         },
//         resetRegErrMsg: (state) => {
//             state.errMsg = null;
//         },
//         resetRegistered: (state) => {
//             state.isRegistered = false;
//         },
//         resetUser: (state) => {
//             state.user = null;
//         },
//         resetPasswordRequested: (state) => {
//             state.passwordRequestedProps = null;
//         },
//         resetChangedRequested: (state) => {
//             state.changedPasswordProps = null;
//         },
//         logoutUser: (state) => {
//             state.user = null;
//             state.isAuthenticated = false;
//             state.token = null;
//             localStorage.removeItem('token');
//         },
//         resetProfileUpdated: (state) => {
//             state.updatedProfile = false;
//         },
//         resetCompanyUpdated: (state) => ({ ...state, updatedCompany: false }),
//         resetNotificationsUpdated: (state) => ({ ...state, updatedNotifications: false }),
//     },
//     extraReducers(builder: ActionReducerMapBuilder<UserStateProps>) {
//         //signup client
//         builder.addCase(signupClient.pending, (state) => {
//             state.isRegistering = true;
//         });

//         builder.addCase(signupClient.fulfilled, (state) => {
//             state.isRegistering = false;
//             state.isRegistered = true;
//         });

//         builder.addCase(signupClient.rejected, (state, action) => {
//             state.isRegistering = false;
//             state.errMsg = {
//                 msg: action.error.message,
//                 Id: 'CLIENT_REGISTER_ERROR',
//             };
//         });

//         //signup user
//         builder.addCase(signupUser.pending, (state) => {
//             state.isRegistering = true;
//         });

//         builder.addCase(signupUser.fulfilled, (state, { payload }) => {
//             state.isRegistering = false;
//             state.isRegistered = payload.isRegistered;
//         });

//         builder.addCase(signupUser.rejected, (state, action) => {
//             state.isRegistering = false;
//             state.errMsg = {
//                 msg: action.error.message,
//                 Id: 'USER_REGISTER_ERROR',
//             };
//         });

//         //login user
//         builder.addCase(login.pending, (state) => {
//             state.loggin = true;
//         });

//         builder.addCase(login.fulfilled, (state, { payload }) => {
//             state.loggin = false;
//             state.isAuthenticated = payload.isAuthenticated;
//             state.user = payload.user;
//             state.token = payload.token;
//             localStorage.setItem('token', payload.token);
//         });

//         builder.addCase(login.rejected, (state, action) => {
//             state.loggin = false;
//             state.user = null;
//             state.errMsg = {
//                 msg: action.error.message,
//                 Id: 'LOGIN_ERROR',
//             };
//         });

//         //forgot password
//         // builder.addCase(requestPassword.pending, (state) => {
//         //   state.requesting = true;
//         // });

//         // builder.addCase(requestPassword.fulfilled, (state, { payload }) => {
//         //   state.requesting = false;
//         //   state.passwordRequestedProps = payload;
//         // });

//         // builder.addCase(requestPassword.rejected, (state, action) => {
//         //   state.requesting = false;
//         //   state.errMsg = {
//         //     msg: action.error.message,
//         //     Id: 'REQUEST_PASSWORD_ERROR',
//         //   };
//         // });

//         // change password
//         // builder.addCase(changePassword.pending, (state) => {
//         //   state.requesting = true;
//         // });

//         // builder.addCase(changePassword.fulfilled, (state, { payload }) => {
//         //   state.requesting = false;
//         //   state.changedPasswordProps = payload;
//         // });

//         // builder.addCase(changePassword.rejected, (state, action) => {
//         //   state.requesting = false;
//         //   state.errMsg = {
//         //     msg: action.error.message,
//         //     Id: 'CHANGE_PASSWORD_ERROR',
//         //   };
//         // });

//         //load user
//         builder.addCase(loadUser.pending, (state) => { });

//         builder.addCase(loadUser.fulfilled, (state, { payload }) => {
//             state.user = payload.user;
//             state.isAuthenticated = true;
//         });

//         builder.addCase(loadUser.rejected, (state, action) => {
//             state.isAuthenticated = false;
//             localStorage.removeItem('token');
//             state.errMsg = {
//                 msg: action.error.message,
//                 Id: 'LOAD_USER_ERROR',
//             };
//         });

//         // client profile settings
//         builder.addCase(profileUpdate.pending, (state) => {
//             state.updatingProfile = true;
//         });

//         builder.addCase(profileUpdate.fulfilled, (state, { payload }) => {
//             state.updatingProfile = false;
//             state.updatedProfile = payload.updated;
//         });

//         builder.addCase(profileUpdate.rejected, (state, action) => {
//             state.updatingProfile = false;
//             state.errMsg = {
//                 msg: action.error.message,
//                 Id: 'PROFILE_UPDATE_ERROR',
//             };
//         });

//         // client company settings
//         builder.addCase(clientCompanyUpdate.pending, (state) => {
//             state.updatingCompany = true;
//         });

//         builder.addCase(clientCompanyUpdate.fulfilled, (state) => {
//             state.updatingCompany = false;
//             state.updatedCompany = true;
//         });

//         builder.addCase(clientCompanyUpdate.rejected, (state, action) => {
//             state.updatingCompany = false;
//             state.errMsg = {
//                 msg: action.error.message,
//                 Id: 'CLIENT_COMPANY_SETTINGS_ERROR',
//             };
//         });

//         // client notification settings
//         builder.addCase(updateNotificationsSettings.pending, (state) => {
//             state.updatingNotifications = true;
//         });

//         builder.addCase(
//             updateNotificationsSettings.fulfilled,
//             (state) => {
//                 state.updatingNotifications = false;
//                 state.updatedNotifications = true;
//             },
//         );

//         builder.addCase(updateNotificationsSettings.rejected, (state, action) => {
//             state.updatingNotifications = false;
//             state.errMsg = {
//                 msg: action.error.message,
//                 Id: 'CLIENT_NOTIFICATIONS_SETTINGS_ERROR',
//             };
//         });
//     },
// });

// export const {
//     setAccount,
//     resetRegErrMsg,
//     resetRegistered,
//     resetUser,
//     resetPasswordRequested,
//     resetChangedRequested,
//     logoutUser,
//     resetProfileUpdated,
//     resetCompanyUpdated,
//     resetNotificationsUpdated,
// } = userSlice.actions;

// export default userSlice.reducer;
