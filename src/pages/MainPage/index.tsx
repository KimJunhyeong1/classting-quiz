import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import quizState from '../../recoil/quiz';

function MainPage() {
  const setQuizState = useSetRecoilState(quizState);

  return (
    <>
      <Link
        to={'/quiz'}
        onClick={() => setQuizState((prev) => ({ ...prev, isCurrentSolving: true }))}
      >
        문제 풀기
      </Link>
    </>
  );
}

export default MainPage;
