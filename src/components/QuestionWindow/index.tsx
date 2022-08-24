import { useRecoilValue } from 'recoil';
import { useQuestionsQuery } from '../../hooks/useQuestionsQuery';
import quizState from '../../recoil/quiz/atom';

function QuestionWindow() {
  const quiz = useRecoilValue(quizState);
  const { data } = useQuestionsQuery({
    select: (data) => data[quiz.questionsIndex],
    enabled: quiz.isCurrentSolving,
  });

  return (
    <>
      <h3>{data?.category}</h3>
      <span>{data?.difficulty}</span>
      <h2>{data?.question}</h2>
    </>
  );
}

export default QuestionWindow;
