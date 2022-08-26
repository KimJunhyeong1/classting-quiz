import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { AiTwotoneStar } from 'react-icons/ai';

import { useQuestionsQuery } from '../../hooks/useQuestionsQuery';
import quizState from '../../recoil/quiz/atom';
import { Props } from './type';
import resultInfoState from '../../recoil/resultInfo/atom';

function QuestionWindow({ onSelect, questionNum }: Props) {
  const quiz = useRecoilValue(quizState);
  const resultInfo = useRecoilValue(resultInfoState);
  const { data } = useQuestionsQuery({
    select: onSelect,
    enabled: quiz.solvingState === 'new',
  });

  return (
    <Wrapper>
      <QuestionTitle>
        {quiz.solvingState === 'review' ? `리뷰: 문제${questionNum}번` : `문제 ${questionNum}번`}
      </QuestionTitle>
      <PointWrapper>
        <PointIcon />
        <PointText>{resultInfo.correctNum}</PointText>
      </PointWrapper>
      <QuestionView dangerouslySetInnerHTML={{ __html: `${data?.question}` }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: 10px;
  height: 300px;
`;

const QuestionTitle = styled.span`
  font-size: 28px;
  font-weight: 800;
`;

const PointWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 10px;
  width: 50px;
  font-size: 30px;
`;

const PointIcon = styled(AiTwotoneStar)`
  color: ${(props) => props.theme.colors.yellow};
`;

const PointText = styled.span`
  color: ${(props) => props.theme.colors.main};
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
