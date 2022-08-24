import styled from 'styled-components';
import AnswerList from '../../components/AnswerList';
import NextQuestionButton from '../../components/NextQuestionButton';
import QuestionWindow from '../../components/QuestionWindow';

function QuizPage() {
  return (
    <Wrapper>
      <QuestionWindow />
      <AnswerList />
      <NextQuestionButton />
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
