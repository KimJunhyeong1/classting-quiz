export type SolvingState = 'pending' | 'new' | 'retry' | 'review';
export type QuestionState = 'pending' | 'correct' | 'incorrect';
export interface IQuizState {
  solvingState: SolvingState;
  questionsNum: number;
  questionsIndex: number;
  currentQuestionState: QuestionState;
  selectedAnswer: string;
}
