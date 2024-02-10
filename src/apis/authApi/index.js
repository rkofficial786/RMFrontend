import api from '../api';
import authApiEndpoint from './config';

const authApi = {
  async registerUser(payload) {
    return await api.post(`${authApiEndpoint.registerUser}`, payload);
  },
  async loginUser(payload) {
    return await api.post(`${authApiEndpoint.loginUser}`, payload);
  },
  async sendOtp(payload) {
    console.log(payload,"payload2");
    return await api.post(`${authApiEndpoint.senOtp}`, payload);
  },
};

export default authApi;
