import styled from 'styled-components';

const ColorBlock = styled.div`
  display: block;
  border-radius: 2px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: ${props => props.bg};
  width: ${props => props.width};
  height: ${props => props.height};

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
`;

ColorBlock.defaultProps = {
  display: 'block',
  width: '30px',
  height: '30px',
  bg: '#d5c4b8'
};

export default ColorBlock;
