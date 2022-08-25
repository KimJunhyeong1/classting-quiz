import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { useQuestionsQuery } from '../../hooks/useQuestionsQuery';
import quizState from '../../recoil/quiz/atom';
import { handleColorType } from '../../shared/utils';
import { ListWrapper } from '../shared/ListWrapper';
import { Props } from './type';

function ReviewList({ onSelect, selectedAnswer }: Props) {
  const quiz = useRecoilValue(quizState);
  const { data } = useQuestionsQuery({
    select: onSelect,
    enabled: quiz.solvingState === 'new',
  });

  const viewList = data?.incorrect_answers.concat(data?.correct_answer).sort();

  const handleEntryType = (view: string) => {
    if (view === selectedAnswer) return 'incorrect';

    if (view === data?.correct_answer) return 'correct';

    return 'pending';
  };

  return (
    <Wrapper>
      <ListWrapper>
        {viewList?.map((view) => (
          <AnswerEntry
            key={view}
            color={handleEntryType(view)}
            dangerouslySetInnerHTML={{ __html: `${view}` }}
          ></AnswerEntry>
        ))}
      </ListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 30px;
`;

const AnswerEntry = styled.li`
  width: 400px;
  height: 50px;
  border: 2px solid;
  border-radius: 15px;
  ${(props) => handleColorType(props.color)};
  text-align: center;
  line-height: 50px;
`;

export default ReviewList;
