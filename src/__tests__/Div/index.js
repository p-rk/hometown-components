import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Div from '../../components/Div';

test('It should return Div', () => {
  const tree = renderer.create(<Div />).toJSON();
  expect(tree).toMatchSnapshot();
});
