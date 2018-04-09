import styled from 'styled-components';

const Section = styled.section`
  box-sizing: border-box;

  display: ${props => props.display};
  background: ${props => props.bg};

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

  > * {
    box-sizing: border-box;
  }
`;

Section.defaultProps = {
  display: 'block',
  mb: '1.5rem',
  p: '0.9375rem',
  bg: 'transparent'
};

export default Section;
