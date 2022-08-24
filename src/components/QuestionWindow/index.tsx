import { Props } from './type';

function QuestionWindow({ question, category, difficulty }: Props) {
  return (
    <>
      <h3>{category}</h3>
      <span>{difficulty}</span>
      <h2>{question}</h2>
    </>
  );
}

export default QuestionWindow;
