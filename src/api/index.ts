import axios from 'axios';

import { fetchQuestionsRes } from './type';

const API = axios.create({ baseURL: 'https://opentdb.com/api.php' });

API.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export const fetchQuestions = async () => {
  const response = await API.get<fetchQuestionsRes>('/', {
    params: { amount: 5, type: 'multiple' },
  });

  return response.data.results;
};
