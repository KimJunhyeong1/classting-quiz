import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styled, { css } from 'styled-components';
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { IoHome } from 'react-icons/io5';
import { MdSettingsBackupRestore, MdOutlineStickyNote2 } from 'react-icons/md';

import { timeSpentState } from '../../recoil/resultInfo';
import resultInfoState from '../../recoil/resultInfo/atom';
import { useNavigate } from 'react-router-dom';
import quizState from '../../recoil/quiz/atom';
import { useQueryClient } from '@tanstack/react-query';

ChartJS.register(ArcElement, Tooltip, Legend);

function ResultPage() {
  const [resultInfo, setResultInfo] = useRecoilState(resultInfoState);
  const timeSpent = useRecoilValue(timeSpentState);
  const setQuiz = useSetRecoilState(quizState);
  const resetQuiz = useResetRecoilState(quizState);
  const resetResultInfo = useResetRecoilState(resultInfoState);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

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

  console.log(resultInfo);
  return (
    <Wrapper>
      <ResultTitle>결과</ResultTitle>
      <TimeSpent>{`시간: ${timeSpent}`}</TimeSpent>
      <ChartWrapper>
        <Pie data={data} />
      </ChartWrapper>
      <IconListWrapper>
        <IconWrapper>
          <HomeIcon
            onClick={() => {
              resetQuiz();
              resetResultInfo();
              queryClient.removeQueries(['questions']);
              navigate('/');
            }}
          />
          <span>홈</span>
        </IconWrapper>
        <IconWrapper>
          <BackIcon
            onClick={() => {
              setResultInfo((prev) => ({
                ...prev,
                startDate: new Date(),
                correctNum: 0,
                incorrectNum: 0,
                incorrectQuestions: [],
              }));
              setQuiz((prev) => ({ ...prev, solvingState: 'retry' }));
              navigate('/quiz');
            }}
          />
          <span>다시 풀기</span>
        </IconWrapper>
        <IconWrapper>
          <ReviewIcon
            onClick={() => {
              setQuiz((prev) => ({ ...prev, solvingState: 'review' }));
              navigate('/review');
            }}
          />
          <span>리뷰</span>
        </IconWrapper>
      </IconListWrapper>
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

const IconListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-top: 25px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`;

const IconMixin = css`
  padding: 8px;
  border: 2px solid;
  border-radius: 50%;
  font-size: 50px;
`;

const HomeIcon = styled(IoHome)`
  ${IconMixin}
  color: ${(props) => props.theme.colors.yellow};
`;

const BackIcon = styled(MdSettingsBackupRestore)`
  ${IconMixin}
  color: white;
  background-color: ${(props) => props.theme.colors.red};
`;

const ReviewIcon = styled(MdOutlineStickyNote2)`
  ${IconMixin}
  color: ${(props) => props.theme.colors.main};
`;

const ChartWrapper = styled.div`
  width: 300px;
  height: 300px;
`;

export default ResultPage;
