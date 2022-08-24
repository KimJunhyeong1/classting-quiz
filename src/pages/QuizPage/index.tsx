import AnswerList from '../../components/AnswerList';
import NextQuestionButton from '../../components/NextQuestionButton';
import QuestionWindow from '../../components/QuestionWindow';

function QuizPage() {
  return (
    <>
      <QuestionWindow />
      <AnswerList />
      <NextQuestionButton />
    </>
  );
}

export default QuizPage;
