import React from 'react';
import { render } from 'react-dom';
import Button from 'components/Buttons';

const Index = () => (
  <div>
    <Button primary>Test WER</Button>
  </div>
);

render(<Index />, document.getElementById('root'));
