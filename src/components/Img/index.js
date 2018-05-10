import styled from 'styled-components';

const Img = styled.img`
  display: block;
  max-width: 100%;

  height: ${props => props.height};
  float: ${props => props.float};

  ${props => props.ta && { textAlign: props.ta }}
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

Img.defaultProps = {
  float: 'none',
  height: 'auto'
};

export default Img;