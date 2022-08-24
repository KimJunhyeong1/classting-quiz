import { useRecoilState } from 'recoil';
import quizState from '../../recoil/quiz/atom';

function NextQuestionButton() {
  const [quiz, setQuiz] = useRecoilState(quizState);

  return (
    <>
      {quiz.currentQuestionState !== 'pending' && (
        <button
          onClick={() =>
            setQuiz((prev) => ({
              ...prev,
              currentQuestionState: 'pending',
              selectedAnswer: '',
              questionsIndex: prev.questionsIndex + 1,
            }))
          }
        >
          다음 문제
        </button>
      )}
    </>
  );
}

export default NextQuestionButton;
