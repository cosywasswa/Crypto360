import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

describe('test the navBar Component', () => {
  it('should render navBar correctly', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <navBar />
      </BrowserRouter>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
