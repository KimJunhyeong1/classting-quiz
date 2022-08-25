import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import quizState from '../../recoil/quiz/atom';
import resultInfoState from '../../recoil/resultInfo/atom';

function ProtectedRoute() {
  const quiz = useRecoilValue(quizState);
  const resultInfo = useRecoilValue(resultInfoState);

  if (quiz.solvingState === 'pending' && resultInfo.correctNum + resultInfo.incorrectNum === 0)
    return <Navigate to={'/'} replace />;

  return <Outlet />;
}

export default ProtectedRoute;
