import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react-hooks';
import { ReactNode } from 'react';

import { fetchQuestions } from '../api';
import { useQuestionsQuery } from '../hooks/useQuestionsQuery';

jest.mock('../api/index');

const mockedFetchQuestions = jest.mocked(fetchQuestions, true);

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const MOCK_DATA = [
  {
    category: 'Entertainment: Film',
    type: 'multiple',
    difficulty: 'easy',
    question: 'What was the title of the first Bond movie, released in 1962?',
    correct_answer: 'Dr. No',
    incorrect_answers: ['From Russia with Love', 'Goldfinger', 'Thunderball'],
  },
  {
    category: 'History',
    type: 'multiple',
    difficulty: 'hard',
    question: 'What did the first vending machines in the early 1880&#039;s dispense?',
    correct_answer: 'Post cards',
    incorrect_answers: ['Alcohol', 'Cigarettes', 'Sodas '],
  },
  {
    category: 'Entertainment: Comics',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'What is the name of the main character in the webcomic Gunnerkrigg Court by Tom Siddell?',
    correct_answer: 'Antimony',
    incorrect_answers: ['Bismuth', 'Mercury', 'Cobalt'],
  },
  {
    category: 'Celebrities',
    type: 'multiple',
    difficulty: 'hard',
    question: 'What was the religion of famous singer &quot;Freddie Mercury&quot;?',
    correct_answer: 'Zoroastrianism',
    incorrect_answers: ['Paganism', 'Ashurism', 'Judaism'],
  },
  {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'What video game sparked controversy because of its hidden &quot;Hot Coffee&quot; minigame?',
    correct_answer: 'Grand Theft Auto: San Andreas',
    incorrect_answers: ['Grand Theft Auto: Vice City', 'Hitman: Blood Money', 'Cooking Mama'],
  },
];

describe('useQuestionsQuery', () => {
  test('Fetch the Questions through the hook.', async () => {
    mockedFetchQuestions.mockResolvedValue(MOCK_DATA);

    const { waitFor, result } = renderHook(() => useQuestionsQuery(), {
      wrapper,
    });

    await waitFor(() => {
      return result.current.isSuccess;
    });

    expect(mockedFetchQuestions).toHaveBeenCalledTimes(1);
    expect(result.current.data).toBeDefined();
    expect(result.current.data).toEqual(MOCK_DATA);
  });
});
