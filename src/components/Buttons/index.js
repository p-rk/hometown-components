import styled from 'styled-components';

// console.log('Current theme: ', this.props.theme);

const sizes = {
  default: {
    padding: '.375rem .75rem',
    // fontSize: '1rem',
    fontSize: `${props => props.fs1}`
  },
  small: {
    padding: '.25rem .5rem',
    fontSize: '.875rem'
  },
  large: {
    padding: '.5rem 1rem',
    fontSize: '1.25rem'
  },
  block: {
    display: 'block',
    width: '100%',
    padding: '.375rem .75rem',
    fontSize: '1rem'
  },
};

const btnType = {
  default: {
    // color: `${props.theme.colors.textExtraLight}`
    // backgroundColor: 'transparent',
    // borderColor: `${props => props.theme.colors.border}`
  },
  primary: {
    // color: `${props => props.theme.colors.white}`,
    // backgroundColor: `${props => props.theme.colors.primary}`,
    // borderColor: `${props => props.theme.colors.primary}`
  }
};

const Button = styled.button`
  border: 1px solid;
  line-height: 1.5;
  display: inline-block;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: color .15s ease-in-out,
  background-color .15s ease-in-out,
  border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  font-size: ${props => props.fs};
  ${props => sizes[props.size]};
  ${props => btnType[props.btnType]};
`;

const Link = Button.withComponent('a');

Button.defaultProps = {
  theme: {
    lineHeights: 1
  },
  size: 'default',
  btnType: 'default',
  fs: '1rem',
  fs1: '2rem'
};

export { Button, Link };
