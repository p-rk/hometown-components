import { styled, injectGlobal } from 'styled-components';
import { normalize } from 'polished';

/* eslint-disable */
injectGlobal`
  ${normalize()}
`;
/* eslint-enable */

const sizes = {
  small: {
    'font-size': '0.8em',
    margin: '1em',
    width: '10rem'
  },
  medium: {
    'font-size': '1rem',
    margin: '1em',
    width: '14rem'
  },
  large: {
    'font-size': '1.5em',
    margin: '1em',
    width: '18rem'
  }
};

const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};

  font-size: ${props => sizes[props.size]['font-size']};
  margin: ${props => sizes[props.size].margin};
  width: ${props => sizes[props.size].width};

  padding: 1em 2em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  &:hover {
    background: ${props => props.primary ? 'black' : 'red'};
    color: ${props => props.primary ? 'white' : 'blue'};
  }

  @media(max-width: 767px) {
    background: ${props => props.primary ? 'red' : 'white'};
    color: ${props => props.primary ? 'white' : 'red'};
  }
`;

const TomatoButton = Button.extend`
  color: tomato;
  border-color: tomato;
`;

// We're replacing the <button> tag with an <a> tag, but reuse all the same styles
const Link = Button.withComponent('a');

// Use .withComponent together with .extend to both change the tag and use additional styles
const TomatoLink = Link.extend`
  color: tomato;
  border-color: tomato;
`;

Button.defaultProps = {
  size: 'medium'
};

export { Button, TomatoButton, Link, TomatoLink };
