import { atom } from 'recoil';
import { IResultInfoState } from './type';

const resultInfoState = atom<IResultInfoState>({
  key: 'resultInfoState',
  default: {
    startDate: new Date(),
    endDate: new Date(),
    correctNum: 0,
    incorrectNum: 0,
  },
});

export default resultInfoState;
