import ErrorFallback from '../components/ErrorFallback';
import { render, screen, fireEvent } from '../setupTests';

describe('<ErrorFallback />', () => {
  const customError = new Error('Network Error');

  it('When an error occurs, it is successfully rendered with an error message.', () => {
    const mockResetCallBack = jest.fn();

    render(<ErrorFallback error={customError} resetErrorBoundary={mockResetCallBack} />);

    const errorTitle = screen.getByText('Something went wrong:');
    const errorMessage = screen.getByText('Network Error');

    expect(errorTitle).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
  });

  it('When the Try again button is pressed, the callback function received in Props is executed.', () => {
    const mockResetCallBack = jest.fn();

    render(<ErrorFallback error={customError} resetErrorBoundary={mockResetCallBack} />);

    const resetButton = screen.getByText('Try again');

    fireEvent.click(resetButton);

    expect(mockResetCallBack).toHaveBeenCalledTimes(1);
  });
});
