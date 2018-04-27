import styled from 'styled-components';

const Text = styled.p`
  font-size: ${props => props.fontSize};
  text-transform: ${props => props.backgroundColor};
  font-weight: ${props => props.backgroundColor};
  color: ${props => props.backgroundColor};
  align: ${props => props.backgroundColor};
  line-height: ${props => props.lh};

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

Text.defaultProps = {
  fontSize: '0.875rem',
  textTransform: 'inherit',
  fontWeight: '400',
  color: '0 0 0, 0.75',
  align: 'left',
  mt: '0.625rem',
  mb: '0.625rem',
  lh: '1.6',
};

export default Text;
