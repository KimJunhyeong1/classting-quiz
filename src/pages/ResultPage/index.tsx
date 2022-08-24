import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useRecoilValue } from 'recoil';
import { timeSpentState } from '../../recoil/resultInfo';
import resultInfoState from '../../recoil/resultInfo/atom';

ChartJS.register(ArcElement, Tooltip, Legend);

function ResultPage() {
  const resultInfo = useRecoilValue(resultInfoState);
  const timeSpent = useRecoilValue(timeSpentState);

  const data = {
    labels: ['오답', '정답'],
    datasets: [
      {
        label: '# of Quiz',
        data: [resultInfo.incorrectNum, resultInfo.correctNum],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  console.log(resultInfo.endDate, resultInfo.startDate);
  return (
    <>
      {timeSpent}
      <Pie data={data} />
    </>
  );
}

export default ResultPage;
