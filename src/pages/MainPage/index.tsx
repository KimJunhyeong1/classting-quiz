import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import quizState from '../../recoil/quiz';
import resultInfoState from '../../recoil/resultInfo/atom';

function MainPage() {
  const setQuiz = useSetRecoilState(quizState);
  const setResultInfo = useSetRecoilState(resultInfoState);
  const resetQuiz = useResetRecoilState(quizState);
  const resetResultInfo = useResetRecoilState(resultInfoState);
  const queryClient = useQueryClient();

  useEffect(() => {
    resetQuiz();
    resetResultInfo();
    queryClient.removeQueries(['questions']);
  }, []);

  const handleSolveButtonClick = () => {
    setQuiz((prev) => ({ ...prev, solvingState: 'new' }));
    setResultInfo((prev) => ({ ...prev, startDate: new Date() }));
  };

  return (
    <Wrapper>
      <img src='classting_logo.png' alt='logo' />
      <StartButton to={'/quiz'} onClick={handleSolveButtonClick} replace={false}>
        퀴즈 풀기
      </StartButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const StartButton = styled(Link)`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 100px;
  font-size: 18px;
  font-weight: 700;

  transition: all 0.25s ease-in 0s, transform 0.25s ease-in 0s;

  :hover {
    transform: scale(1.1);
  }
`;

export default MainPage;
