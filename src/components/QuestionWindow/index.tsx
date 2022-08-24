import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useQuestionsQuery } from '../../hooks/useQuestionsQuery';
import quizState from '../../recoil/quiz/atom';

function QuestionWindow() {
  const quiz = useRecoilValue(quizState);
  const { data } = useQuestionsQuery({
    select: (data) => data[quiz.questionsIndex],
    enabled: quiz.isCurrentSolving,
  });
  console.log(data);

  return (
    <Wrapper>
      <QuestionTitle>{`문제 ${quiz.questionsIndex + 1}`}</QuestionTitle>
      <QuestionView dangerouslySetInnerHTML={{ __html: `${data?.question}` }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionTitle = styled.h3``;

const QuestionView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 230px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 20px;
  color: white;
  text-align: center;
  font-size: 20px;
`;

export default QuestionWindow;
