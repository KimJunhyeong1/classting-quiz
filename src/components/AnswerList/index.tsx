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
  return (
    <>
      <ul>
        {viewList?.map((view) => (
          <AnswerEntry
            key={view}
            color={view === quiz.selectedAnswer ? quiz.currentQuestionState : 'pending'}
            onClick={() => {
              if (quiz.currentQuestionState !== 'pending') return;

              setQuiz((prev) => ({
                ...prev,
                currentQuestionState: view === data?.correct_answer ? 'correct' : 'incorrect',
                selectedAnswer: view,
              }));
            }}
          >
            {view}
          </AnswerEntry>
        ))}
      </ul>
    </>
  );
}

const handleColorType = (color: string | undefined) => {
  switch (color) {
    case 'correct':
      return 'color: white; background: Blue;';
    case 'incorrect':
      return 'color: white; background: Red;';
    case 'pending':
      return 'color: black; background: #eee;';
  }
};

const AnswerEntry = styled.li`
  ${(props) => handleColorType(props.color)}
`;

export default AnswerList;
