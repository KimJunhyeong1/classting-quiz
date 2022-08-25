import { fireEvent, screen } from '@testing-library/react';

import { render } from '../setupTests';
import MainPage from '../pages/MainPage';
import { RecoilObserver } from './RecoilObserver';
import quizState from '../recoil/quiz';

describe('<MainPage />', () => {
  it('Logo and Start button are successfully rendered', () => {
    render(<MainPage />);

    const logo = screen.getByRole('img');
    const quizStartButton = screen.getByText('퀴즈 풀기');

    expect(quizStartButton).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'classting_logo.png');
    expect(logo).toHaveAttribute('alt', 'logo');
  });

  it('The quiz status changes when you click the Start Quiz button.', () => {
    const onChange = jest.fn();
    const defaultQuizState = {
      currentQuestionState: 'pending',
      questionsIndex: 0,
      questionsNum: 5,
      selectedAnswer: '',
      solvingState: 'pending',
    };

    render(
      <>
        <RecoilObserver node={quizState} onChange={onChange} />
        <MainPage />
      </>,
    );
    const quizStartButton = screen.getByText('퀴즈 풀기');

    fireEvent.click(quizStartButton);

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith(defaultQuizState);
    expect(onChange).toHaveBeenCalledWith({
      ...defaultQuizState,
      solvingState: 'new',
    });
  });
});
