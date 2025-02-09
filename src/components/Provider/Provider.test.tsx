import { Text } from 'react-native';

import { render } from '@/test/utils';

import { Provider } from './Provider';

describe('<Provider/>', () => {
  const setup = () =>
    render(
      <Provider>
        <Text>Children</Text>
      </Provider>
    );

  test('render children', () => {
    const container = setup();
    expect(container.getByText('Children')).toBeTruthy();
  });
});
