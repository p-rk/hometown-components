import React from 'react';
import { render } from 'react-dom';
import Button from '../components/Buttons';

const Index = () => (
  <div>
    <Button>Normal</Button>
    <Button primary>Test 2</Button>
  </div>
);

render(<Index />, document.getElementById('root'));
