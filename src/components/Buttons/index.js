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
    },
    custom: {
      color: `${props.color}`,
      backgroundColor: `${props.bg}`,
      borderColor: `${props.bc}`,
      border: `${props.border}`
    },
    link: {
      color: `${props.theme.colors.textExtraLight}`,
      border: 'none'
    }
  };

  return typeObj[type];
};

const Button = styled.button`
  border: ${props => props.border};
  font-family: ${props => props.theme.fontFamily[props.fontFamily]};
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

  ${props => props.height && { height: props.height }}
  ${props => props.p && { padding: props.p }}
  ${props => props.pt && { paddingTop: props.pt }}
  ${props => props.pr && { paddingRight: props.pr }}
  ${props => props.pb && { paddingBottom: props.pb }}
  ${props => props.pl && { paddingLeft: props.pl }}

  &:hover {
    background: ${props => props.type === 'default' ? '#ae8873' : 'transparent'};
    color: ${props => props.type === 'default' ? '#FFF' : '#ae8873'};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

Button.defaultProps = {
  theme: {
    lineHeights: 1
  },
  size: 'default',
  btnType: 'default',
  border: '1px solid',
  fontFamily: 'medium'
};

export default Button;
