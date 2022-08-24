import { useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { fetchQuestions } from '../../api';
import AnswerList from '../../components/AnswerList';
import QuestionWindow from '../../components/QuestionWindow';
import quizState from '../../recoil/quiz/atom';

function QuizPage() {
  const [quiz, setQuiz] = useRecoilState(quizState);
  const { data } = useQuery(['questions'], fetchQuestions, {
    refetchOnWindowFocus: false,
    enabled: quiz.isCurrentSolving,
  });

  const currentQuiz = data?.results[quiz.questionsIndex];
  const viewList = currentQuiz?.incorrect_answers.concat(currentQuiz?.correct_answer);

  return (
    <>
      <QuestionWindow
        question={currentQuiz?.question || ''}
        category={currentQuiz?.category || ''}
        difficulty={currentQuiz?.difficulty || ''}
      />
      <AnswerList viewList={viewList || []} />
    </>
  );
}

export default QuizPage;
