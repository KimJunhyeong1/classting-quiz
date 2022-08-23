import axios from 'axios';

import { fetchQuestionsRes } from './type';

const API = axios.create({ baseURL: 'https://opentdb.com/api.php' });

export const fetchQuestions = async () => {
  const response = await API.get<fetchQuestionsRes>('/', {
    params: { amount: 5, type: 'multiple' },
  });

  return response.data;
};
