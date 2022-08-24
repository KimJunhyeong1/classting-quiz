import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import quizState from '../../recoil/quiz';
import resultInfoState from '../../recoil/resultInfo/atom';

function MainPage() {
  const setQuiz = useSetRecoilState(quizState);
  const setResultInfo = useSetRecoilState(resultInfoState);

  const handleSolveButtonClick = () => {
    setQuiz((prev) => ({ ...prev, isCurrentSolving: true }));
    setResultInfo((prev) => ({ ...prev, startDate: new Date() }));
  };

  return (
    <>
      <Link to={'/quiz'} onClick={handleSolveButtonClick}>
        문제 풀기
      </Link>
    </>
  );
}

export default MainPage;
