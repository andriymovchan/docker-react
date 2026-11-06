import {render, screen} from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/changed again/i);
  expect(linkElement).toBeInTheDocument();
});