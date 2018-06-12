import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Empty from 'components/Empty';

import Theme from 'components/Theme';

const Index = () => (
  <ThemeProvider theme={Theme}>
    <Empty
      title="No items yet !!"
      subTitle="Add items to it"
      btnName="Continue Shopping"
      url="/"
      imgURL="http://via.placeholder.com/350x150"
      bg="#fafafa"
    />
  </ThemeProvider>
);

render(<Index />, document.getElementById('root'));
