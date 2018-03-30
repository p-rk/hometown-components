import styled from 'styled-components';

const sizes = {
  small: {
    'font-size': '0.8em',
    margin: '1em',
    width: '10rem'
  },
  medium: {
    'font-size': '1.4rem',
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

  ${props => props.theme.width[props.width]};
  
  padding: 1em 2em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Link = Button.withComponent('a');

Button.defaultProps = {
  theme: {
    width: '1'
  },
  size: 'small',
  fontSize: '1.2em'
};

export { Button, Link };
