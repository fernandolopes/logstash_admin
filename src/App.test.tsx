import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Components from './components';

test('renders learn react link', () => {

  render(
    <Provider store={store}>
      <Components />
    </Provider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement);
});
