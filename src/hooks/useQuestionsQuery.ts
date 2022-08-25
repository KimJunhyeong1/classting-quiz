import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { fetchQuestions } from '../api';
import { Question } from '../api/type';

export const useQuestionsQuery = (options?: UseQueryOptions<Question[], AxiosError, Question>) =>
  useQuery<Question[], AxiosError, Question>(['questions'], fetchQuestions, {
    refetchOnWindowFocus: false,
    cacheTime: Infinity,
    ...options,
  });
