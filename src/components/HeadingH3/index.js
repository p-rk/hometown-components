import styled from 'styled-components';

const Heading = styled.h3`
  ${props => props.ellipsis && {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }}

  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
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
  ${props => props.ta && { textAlign: props.ta }}
  ${props => props.tt && { textTransform: props.tt }}
  ${props => props.fontWeight && { fontWeight: props.fontWeight }}
  ${props => props.display && { display: props.display }}
`;

Heading.defaultProps = {
  fontSize: '1.5rem',
  fontFamily: 'regular',
  mt: '0.625em',
  mb: '0.625em',
  pb: '2px',
  lh: '1.2',
  color: 'primary',
  ellipsis: true
};

export default Heading;
