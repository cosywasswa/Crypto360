import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import CryptoHome from '../components/cryptoHome';

const mockStore = configureStore([]);

describe('cryptoHome component', () => {
  const mockcryptos = [
    {
      key: 'bitcoin',
      id: 'bitcoin',
      rank: '1',
      symbol: 'BTC',
      name: 'Bitcoin',
    },
    {
      key: 'ethereum',
      id: 'ethereum',
      rank: '2',
      symbol: 'ETH',
      name: 'Ethereum',
    },
  ];

  const Store = mockStore({
    cryptoList: {
      cryptoArr: mockcryptos,
      loading: false,
      isError: false,
      searchQuery: '',
    },
  });
  it('should match the snapshot', () => {
    const tree = renderer
      .create(

        <Provider store={Store}>
          <BrowserRouter>
            <CryptoHome />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
