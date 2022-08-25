import { useNavigate } from 'react-router-dom';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { Question } from '../../api/type';
import AnswerList from '../../components/AnswerList';
import NextQuestionButton from '../../components/NextQuestionButton';
import QuestionWindow from '../../components/QuestionWindow';
import quizState from '../../recoil/quiz/atom';
import resultInfoState from '../../recoil/resultInfo/atom';

function QuizPage() {
  const [quiz, setQuiz] = useRecoilState(quizState);
  const handleSelect = (data: Question[]) => data[quiz.questionsIndex];
  const setResultInfo = useSetRecoilState(resultInfoState);
  const resetQuiz = useResetRecoilState(quizState);
  const navigate = useNavigate();

  const isLastQuestion = quiz.questionsIndex === quiz.questionsNum - 1;
  const isNextButtonVisible = quiz.currentQuestionState !== 'pending';
  const handleNextButtonClick = () => {
    if (quiz.currentQuestionState === 'correct') {
      setResultInfo((prev) => ({ ...prev, correctNum: prev.correctNum + 1 }));
    } else if (quiz.currentQuestionState === 'incorrect') {
      setResultInfo((prev) => ({ ...prev, incorrectNum: prev.incorrectNum + 1 }));
    }

    if (isLastQuestion) {
      resetQuiz();
      setResultInfo((prev) => ({ ...prev, endDate: new Date() }));
      navigate('/result', { replace: true });

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
    <Wrapper>
      <QuestionWindow onSelect={handleSelect} questionNum={quiz.questionsIndex + 1} />
      <AnswerList onSelect={handleSelect} />
      <NextQuestionButton
        onNextButtonClick={handleNextButtonClick}
        isVisible={isNextButtonVisible}
        isLast={isLastQuestion}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  width: 100%;
  height: 100%;
`;

export default QuizPage;
