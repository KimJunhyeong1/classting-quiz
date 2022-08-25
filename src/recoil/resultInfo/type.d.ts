type IncorrectQuestion = {
  questionIndex: number;
  selectedAnswer: string;
};

export interface IResultInfoState {
  startDate: Date;
  endDate: Date;
  correctNum: number;
  incorrectNum: number;
  incorrectQuestions: incorrectQuestions[];
}
