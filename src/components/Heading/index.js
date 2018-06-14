import styled from 'styled-components';

const Heading = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lh};
  color: ${props => props.theme.colors[props.color]};

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
  ${props => props.ls && { letterSpacing: props.ls }}
`;

Heading.defaultProps = {
  fontSize: '1.5rem',
  fontWeight: '400',
  mt: '0.625em',
  mb: '0.625em',
  lh: '1.2',
  color: 'primary'
};

export default Heading;
