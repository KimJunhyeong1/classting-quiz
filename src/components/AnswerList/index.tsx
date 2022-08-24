import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { useQuestionsQuery } from '../../hooks/useQuestionsQuery';
import quizState from '../../recoil/quiz/atom';

function AnswerList() {
  const [quiz, setQuiz] = useRecoilState(quizState);
  const { data } = useQuestionsQuery({
    select: (data) => data[quiz.questionsIndex],
    enabled: quiz.isCurrentSolving,
  });

  const viewList = data?.incorrect_answers.concat(data?.correct_answer);
  const handleEntryClick = (view: string) => {
    if (quiz.currentQuestionState !== 'pending') return;

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

const handleColorType = (color: string | undefined) => {
  switch (color) {
    case 'correct':
      return 'color: white; background: #65cdca; border-color: #65cdca';
    case 'incorrect':
      return 'color: white; background: #fe7e64; border-color: #fe7e64';
    case 'pending':
      return 'color: #00c795; background: white; border-color: #00c795';
  }
};

const Wrapper = styled.div`
  margin-top: 30px;
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  padding: 0;
  list-style-type: none;
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

export default AnswerList;
