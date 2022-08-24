export type QuestionState = 'pending' | 'correct' | 'incorrect';
export interface IQuizState {
  isCurrentSolving: boolean;
  questionsIndex: number;
  currentQuestionState: QuestionState;
  selectedAnswer: string;
}
