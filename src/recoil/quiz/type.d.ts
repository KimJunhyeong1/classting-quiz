export type QuestionState = 'pending' | 'correct' | 'incorrect';
export interface IQuizState {
  isCurrentSolving: boolean;
  questionsNum: number;
  questionsIndex: number;
  currentQuestionState: QuestionState;
  selectedAnswer: string;
}
