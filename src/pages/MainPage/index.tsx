import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import quizState from '../../recoil/quiz';
import resultInfoState from '../../recoil/resultInfo/atom';

function MainPage() {
  const setQuiz = useSetRecoilState(quizState);
  const setResultInfo = useSetRecoilState(resultInfoState);

  const handleSolveButtonClick = () => {
    setQuiz((prev) => ({ ...prev, solvingState: 'new' }));
    setResultInfo((prev) => ({ ...prev, startDate: new Date() }));
  };

  return (
    <Wrapper>
      <img src='classting_logo.png' alt='logo' />
      <StartButton to={'/quiz'} onClick={handleSolveButtonClick}>
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
`;

export default MainPage;
