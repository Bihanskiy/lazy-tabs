import axios from 'axios';

const BASE_URL = "./"

export const api = axios.create({
  baseURL: BASE_URL,
});

const responseSuccessInterceptor = (response) => {
  const data = response.data;

  return { data, };
};

const errorInterceptor = (error) => {
  const responseError = error?.response?.data;

  return { error: responseError || error };
};

api.interceptors.response.use(responseSuccessInterceptor, errorInterceptor);
