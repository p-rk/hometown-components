import styled from 'styled-components';

const sizes = {
  small: {
    'font-size': '1em',
    margin: '1em',
  },
  medium: {
    'font-size': '2em',
    margin: '2em',
  },
  large: {
    'font-size': '3em',
    margin: '3em',
  }
};

const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: ${props => sizes[props.theme.size]['font-size']};
  padding: 1em 2em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  @media(max-width: 767px) {
    background: ${props => props.primary ? 'red' : 'white'};
    color: ${props => props.primary ? 'white' : 'red'};
  }
`;

Button.defaultProps = {
  theme: {
    size: 'large'
  }
};

export default Button;
