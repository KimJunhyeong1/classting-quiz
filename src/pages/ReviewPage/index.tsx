import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Question } from '../../api/type';
import NextQuestionButton from '../../components/NextQuestionButton';
import QuestionWindow from '../../components/QuestionWindow';
import ReviewList from '../../components/ReviewList';
import resultInfoState from '../../recoil/resultInfo/atom';

function ReviewPage() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const resultInfo = useRecoilValue(resultInfoState);
  const navigate = useNavigate();

  const currentReview = resultInfo.incorrectQuestions[reviewIndex];
  const currentQuestionIndex = currentReview.questionIndex;
  const selectedAnswer = currentReview.selectedAnswer;
  const isLastReview = reviewIndex === resultInfo.incorrectQuestions.length - 1;
  const isNextButtonVisible = true;
  const handleSelect = (data: Question[]) => data[currentQuestionIndex];

  const handleNextButtonClick = () => {
    if (isLastReview) {
      navigate('/result', { replace: true });

      return;
    }

    setReviewIndex((prev) => prev + 1);
  };

  return (
    <Wrapper>
      <QuestionWindow onSelect={handleSelect} questionNum={currentQuestionIndex + 1} />
      <ReviewList onSelect={handleSelect} selectedAnswer={selectedAnswer} />
      <NextQuestionButton
        onNextButtonClick={handleNextButtonClick}
        isVisible={isNextButtonVisible}
        isLast={isLastReview}
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

export default ReviewPage;
