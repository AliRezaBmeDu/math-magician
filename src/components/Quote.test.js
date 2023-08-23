import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

// Mock the fetch function and provide a mock implementation
global.fetch = jest.fn(() => Promise.resolve({
  json: async () => [{ quote: 'Mocked Quote', author: 'Mocked Author' }],
}));

it('should render without crashing', async () => {
  const component = renderer.create(<Quote />);
  await component.root.findByType(Quote); // Wait for async actions to complete
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});