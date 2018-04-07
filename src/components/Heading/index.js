import styled from 'styled-components';

const Heading = styled.h4`
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
  color: ${props => props.color ? props.color : props.theme.colors.primary};

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

Heading.defaultProps = {
  fontSize: '1.5rem',
  fontFamily: 'SFPDRegular',
  mt: '0.625em',
  mb: '0.625em'
};

export default Heading;
