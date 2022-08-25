import QuestionWindow from '../components/QuestionWindow';
import { render, screen } from '../setupTests';

describe('<QuestionWindow/>', () => {
  it('Question title successfully rendered', () => {
    const handleSelect = (data: Array<number>) => data[1];
    render(<QuestionWindow onSelect={handleSelect} questionNum={1} />);

    const questionTitle = screen.getByText(/문제/i);

    expect(questionTitle).toBeInTheDocument();
  });
});
