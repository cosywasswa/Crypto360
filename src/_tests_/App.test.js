import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import Store from '../redux/store';

const MockApp = () => (
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>
);

describe('App', () => {
  render(<MockApp />);

  it('renders without crashing', async () => {
    const { asFragment } = render(<MockApp />);
    expect(asFragment()).toMatchSnapshot();
    expect(true).toBeTruthy();
  });
});
