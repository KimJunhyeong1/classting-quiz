import { useNavigate } from 'react-router-dom';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import quizState from '../../recoil/quiz/atom';
import resultInfoState from '../../recoil/resultInfo/atom';

function NextQuestionButton() {
  const [quiz, setQuiz] = useRecoilState(quizState);
  const setResultInfo = useSetRecoilState(resultInfoState);
  const resetQuiz = useResetRecoilState(quizState);
  const navigate = useNavigate();

  const isLastQuestion = quiz.questionsIndex === quiz.questionsNum - 1;
  const handleNextButtonClick = () => {
    if (quiz.currentQuestionState === 'correct') {
      setResultInfo((prev) => ({ ...prev, correctNum: prev.correctNum + 1 }));
    } else if (quiz.currentQuestionState === 'incorrect') {
      setResultInfo((prev) => ({ ...prev, incorrectNum: prev.incorrectNum + 1 }));
    }

    if (isLastQuestion) {
      resetQuiz();
      setResultInfo((prev) => ({ ...prev, endDate: new Date() }));
      navigate('/result');

      return;
    }

    setQuiz((prev) => ({
      ...prev,
      currentQuestionState: 'pending',
      selectedAnswer: '',
      questionsIndex: prev.questionsIndex + 1,
    }));
  };

  return (
    <>
      {quiz.currentQuestionState !== 'pending' && (
        <button onClick={handleNextButtonClick}>
          {quiz.questionsIndex === quiz.questionsNum - 1 ? '퀴즈 종료' : '다음 문제'}
        </button>
      )}
    </>
  );
}

export default NextQuestionButton;
