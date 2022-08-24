import { atom } from 'recoil';
import { IQuizState } from './type';

const quizState = atom<IQuizState>({
  key: 'quizState',
  default: {
    isCurrentSolving: false,
  },
});

export default quizState;
