import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import quizState from '../../recoil/quiz/atom';

function ProtectedRoute() {
  const quiz = useRecoilValue(quizState);

  if (!quiz.isCurrentSolving) return <Navigate to={'/'} replace />;

  return <Outlet />;
}

export default ProtectedRoute;
