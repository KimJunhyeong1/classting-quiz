import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { useQuestionsQuery } from '../../hooks/useQuestionsQuery';
import quizState from '../../recoil/quiz/atom';
import { Props } from './type';

function QuestionWindow({ onSelect, questionNum }: Props) {
  const quiz = useRecoilValue(quizState);
  const { data } = useQuestionsQuery({
    select: onSelect,
    enabled: quiz.solvingState === 'new',
  });

  return (
    <Wrapper>
      <QuestionTitle>
        {quiz.solvingState === 'review' ? `리뷰: 문제${questionNum}번` : `문제 ${questionNum}번`}
      </QuestionTitle>
      <QuestionView dangerouslySetInnerHTML={{ __html: `${data?.question}` }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  height: 300px;
`;

const QuestionTitle = styled.span`
  font-size: 25px;
`;

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
