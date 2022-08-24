import { selector } from 'recoil';
import resultInfoState from './atom';

const timeSpentState = selector({
  key: 'timeSpentState',
  get: ({ get }) => {
    const resultInfo = get(resultInfoState);

    const timeSpentMinutes = Math.floor(
      (resultInfo.endDate.getTime() - resultInfo.startDate.getTime()) / 1000 / 60,
    );
    const timeSpentSeconds = Math.floor(
      ((resultInfo.endDate.getTime() - resultInfo.startDate.getTime()) / 1000) % 60,
    );

    return `${timeSpentMinutes}분 ${timeSpentSeconds}초`;
  },
});

export default timeSpentState;
