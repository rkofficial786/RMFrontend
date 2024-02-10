import {createSlice} from '@reduxjs/toolkit';
import {registerUser, loginUser, sendOtp} from './actions';

const initialState = {
  token: '',
  userData: null,
  
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setInitialState: () => {
      return initialState;
    },

    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    
  },
  extraReducers: builder => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      const {status, data} = action.payload;

      if (status === 200) {
        return {
          ...state,
        };
      } else {
        return initialState;
      }
    });
    builder.addCase(loginUser.fulfilled, (state, {payload}) => {
      const {status, data} = payload;

      if (status === 200) {
        return {
          ...state,
          token: data.token,
        };
      } else {
        return initialState;
      }
    });
    builder.addCase(loginUser.rejected, () => {
      return initialState;
    });
    builder.addCase(sendOtp.fulfilled, (state, {payload}) => {
      const {status, data} = payload;
      if (status === 200) {
        return initialState;
      }
    });
  },
});

export const {setInitialState, setUserData} = AuthSlice.actions;

export {registerUser, sendOtp, loginUser};
export default AuthSlice.reducer;
