import styled from 'styled-components';

const ColorBlock = styled.div`
  border-radius: 2px;
  border: 3px solid #FFF;
  background-color: ${props => props.bg};
  width: ${props => props.width};
  height: ${props => props.height};
  max-width: ${props => props.width};
  flex: 0 0 ${props => props.width};

  ${props => props.m && { margin: props.m }}
  ${props => props.mt && { marginTop: props.mt }}
  ${props => props.mr && { marginRight: props.mr }}
  ${props => props.mb && { marginBottom: props.mb }}
  ${props => props.ml && { marginLeft: props.ml }}
  ${props => props.p && { padding: props.p }}
  ${props => props.pt && { paddingTop: props.pt }}
  ${props => props.pr && { paddingRight: props.pr }}
  ${props => props.pb && { paddingBottom: props.pb }}
  ${props => props.pl && { paddingLeft: props.pl }}

  ${props => props.active && {
    boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.22)',
    border: '3px solid #FFF'
  }}
`;

ColorBlock.defaultProps = {
  display: 'block',
  width: '24px',
  height: '24px',
  bg: '#d5c4b8',
  mr: '0.3125rem',
  mb: '0.3125rem'
};

export default ColorBlock;
