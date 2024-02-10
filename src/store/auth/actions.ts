import {createAsyncThunk} from '@reduxjs/toolkit';

import axios from 'axios';
import authApiEndpoint from '../../apis/authApi/config';
import authApi from '../../apis/authApi';

export const registerUser = createAsyncThunk(
  `${authApiEndpoint.registerUser}Post`,
  async payload => {
    const {status, data} = await authApi.registerUser(payload);
    return {status, data};
  },
);

export const loginUser = createAsyncThunk(
  `${authApiEndpoint.loginUser}Post`,
  async payload => {
    const {status, data} = await authApi.loginUser(payload);
    return {status, data};
  },
);

export const sendOtp = createAsyncThunk(
  `${authApiEndpoint.senOtp}Post`,
  async payload => {
    const {status, data} = await authApi.sendOtp(payload);
    console.log(payload,"payload");
    return {status, data};
  },
);

// export const loginSocialAccount = createAsyncThunk(
//   `${authApiEndpoint.socialAccount}Post`,
//   async payload => {
//     const {status, data} = await authApi.loginSocialAccount(payload);
//     return {status, data};
//   },
// );
