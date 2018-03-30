import React from 'react';
import { render } from 'react-dom';
import Input from '../components/Inputs';
import { Button } from '../components/Buttons';
import Div from '../components/Div';

const Index = () => (
  <div>
    <Div display="block">
      <Button size="medium">Default</Button>
    </Div>
    <Div display="flex">
      <Button size="small" primary>Small with Primary</Button>
      <Button size="medium">Medium</Button>
    </Div>
    <Button size="large">Large</Button>
    <br />
    <Input />
  </div>
);

render(<Index />, document.getElementById('root'));
