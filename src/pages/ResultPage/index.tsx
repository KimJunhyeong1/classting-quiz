import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styled from 'styled-components';
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
    <Wrapper>
      <ResultTitle>결과</ResultTitle>
      <TimeSpent>{`시간: ${timeSpent}`}</TimeSpent>
      <ChartWrapper>
        <Pie data={data} />
      </ChartWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ResultTitle = styled.h2`
  font-size: 40px;
  color: ${(props) => props.theme.colors.main};
`;

const TimeSpent = styled.h3`
  font-size: 30px;
`;

const ChartWrapper = styled.div`
  width: 300px;
  height: 300px;
`;

export default ResultPage;
