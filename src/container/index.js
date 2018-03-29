import React from 'react';
import { render } from 'react-dom';
import Input from '../components/Inputs';

const Index = () => (
  <div>
    <Input />
  </div>
);

render(<Index />, document.getElementById('root'));
