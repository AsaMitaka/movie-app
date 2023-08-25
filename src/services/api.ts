import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { api_key: 'adc11c3feb758cbde026a4ceda0fa5ab' },
});

export default api;
