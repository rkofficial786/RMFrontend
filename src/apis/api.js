import createApiInstance from './createApiInstance';

export const myApi = 'https://routine-manager.vercel.app/api/v1';

const api = createApiInstance(myApi, 'Routine Manager');

export default api.instance;
