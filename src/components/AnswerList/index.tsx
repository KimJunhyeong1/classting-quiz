import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { useQuestionsQuery } from '../../hooks/useQuestionsQuery';
import quizState from '../../recoil/quiz/atom';
import resultInfoState from '../../recoil/resultInfo/atom';
import { handleColorType } from '../../shared/utils';
import { ListWrapper } from '../shared/ListWrapper';
import { Props } from './type';

function AnswerList({ onSelect }: Props) {
  const [quiz, setQuiz] = useRecoilState(quizState);
  const setResultInfo = useSetRecoilState(resultInfoState);
  const { data } = useQuestionsQuery({
    select: onSelect,
    enabled: quiz.solvingState === 'new',
  });

  const viewList = data?.incorrect_answers.concat(data?.correct_answer).sort();
  const handleEntryClick = (view: string) => {
    if (quiz.currentQuestionState !== 'pending') return;

    if (view !== data?.correct_answer) {
      setResultInfo((prev) => ({
        ...prev,
        incorrectQuestions: [
          ...prev.incorrectQuestions,
          { questionIndex: quiz.questionsIndex, selectedAnswer: view },
        ],
      }));
    }

    setQuiz((prev) => ({
      ...prev,
      currentQuestionState: view === data?.correct_answer ? 'correct' : 'incorrect',
      selectedAnswer: view,
    }));
  };

  return (
    <Wrapper>
      <ListWrapper>
        {viewList?.map((view) => (
          <AnswerEntry
            key={view}
            color={view === quiz.selectedAnswer ? quiz.currentQuestionState : 'pending'}
            onClick={() => handleEntryClick(view)}
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
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;

  :hover {
    transform: translateY(-10%);
  }
`;

export default AnswerList;
