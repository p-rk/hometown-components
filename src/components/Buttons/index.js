import styled from 'styled-components';

const sizes = {
  default: {
    padding: '.375rem .75rem',
    fontSize: '1rem'
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

const btnType = (props, type) => {
  const typeObj = {
    default: {
      color: `${props.theme.colors.textExtraLight}`,
      backgroundColor: 'transparent',
      borderColor: `${props.theme.colors.border}`,
    },
    primary: {
      color: `${props.theme.colors.white}`,
      backgroundColor: `${props.theme.colors.primary}`,
      borderColor: `${props.theme.colors.primary}`
    }
  };

  return typeObj[type];
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
  transition: color .15s ease-in-out, background-color .15s ease-in-out,
  border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  ${props => sizes[props.size]};
  ${props => btnType(props, props.btnType)};

  &:hover {
    background: ${props => props.btnType === 'default' ? '#ae8873' : 'transparent'};
    color: ${props => props.btnType === 'default' ? '#FFF' : '#ae8873'};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// font-size: ${props => props.fs};
const Link = Button.withComponent('a');

Button.defaultProps = {
  theme: {
    lineHeights: 1
  },
  size: 'default',
  btnType: 'default'
};

export { Button, Link };
