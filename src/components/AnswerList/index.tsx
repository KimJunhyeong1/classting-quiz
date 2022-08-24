import { useSetRecoilState } from 'recoil';
import quizState from '../../recoil/quiz/atom';
import { Props } from './type';

function AnswerList({ viewList }: Props) {
  const setQuiz = useSetRecoilState(quizState);

  return (
    <>
      <ul>
        {viewList?.map((view) => (
          <li
            key={view}
            onClick={() => {
              setQuiz((prev) => ({ ...prev, currentQuizSolved: true }));
            }}
          >
            {view}
          </li>
        ))}
      </ul>
    </>
  );
}

export default AnswerList;
