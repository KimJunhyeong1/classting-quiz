import { atom } from 'recoil';
import { IQuizState } from './type';

const quizState = atom<IQuizState>({
  key: 'quizState',
  default: {
    isCurrentSolving: false,
    questionsIndex: 0,
    currentQuestionState: 'pending',
    selectedAnswer: '',
  },
});

export default quizState;
