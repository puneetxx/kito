import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button and reacts to click', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);

  const btn = screen.getByText('Click Me');
  expect(btn).toBeInTheDocument();

  fireEvent.click(btn);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
