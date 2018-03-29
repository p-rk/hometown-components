import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Button from '../components/Buttons';

test('It should return Button', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('It should have these styles', () => {
  const tree = renderer.create(<Button primary />).toJSON();
  expect(tree).toHaveStyleRule('background', 'palevioletred');
});
