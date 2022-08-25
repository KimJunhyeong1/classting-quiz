import { atom } from 'recoil';
import { IQuizState } from './type';

const quizState = atom<IQuizState>({
  key: 'quizState',
  default: {
    solvingState: 'pending',
    questionsNum: 5,
    questionsIndex: 0,
    currentQuestionState: 'pending',
    selectedAnswer: '',
  },
});

export default quizState;
