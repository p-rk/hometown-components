import styled from 'styled-components';

const Link = styled.a`
  color: ${props => props.color ? props.color : props.theme.colors.primary};
  border: none;
  text-decoration: none;
  transition: color .15s ease-in-out, background-color .15s ease-in-out,
  border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  &:hover {
    color: ${props => props.color ? props.hoverColor : props.theme.colors.textDark};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

Link.defaultProps = {
  fontSize: '1rem'
};

export default Link;
