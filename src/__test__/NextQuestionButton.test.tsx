import NextQuestionButton from '../components/NextQuestionButton';
import { render, screen, fireEvent } from '../setupTests';

describe('<NextQuestionButton/>', () => {
  it('If it is not the last question, the next question button is rendered.', () => {
    const handleButtonClick = jest.fn();
    render(
      <NextQuestionButton onNextButtonClick={handleButtonClick} isVisible={true} isLast={false} />,
    );

    const buttonText = screen.getByText('다음 문항');

    expect(buttonText).toBeInTheDocument();
  });

  it('If it is the last question, the end button is rendered.', () => {
    const handleButtonClick = jest.fn();
    render(
      <NextQuestionButton onNextButtonClick={handleButtonClick} isVisible={true} isLast={true} />,
    );

    const buttonText = screen.getByText('종료');

    expect(buttonText).toBeInTheDocument();
  });

  it('When the button is clicked, the event callback function is executed.', () => {
    const handleButtonClick = jest.fn();
    render(
      <NextQuestionButton onNextButtonClick={handleButtonClick} isVisible={true} isLast={true} />,
    );

    const buttonText = screen.getByText('종료');

    fireEvent.click(buttonText);

    expect(handleButtonClick).toHaveBeenCalledTimes(1);
  });

  it('Buttons are not visible when the problem is not solved.', () => {
    const handleButtonClick = jest.fn();
    render(
      <NextQuestionButton onNextButtonClick={handleButtonClick} isVisible={false} isLast={false} />,
    );

    const buttonText = screen.queryByText('다음 문항');

    expect(buttonText).not.toBeInTheDocument();
  });
});
