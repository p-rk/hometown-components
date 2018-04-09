import styled from 'styled-components';

const Section = styled.section`
  box-sizing: border-box;
  ${props => props.display};
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
  mb: '1.5rem'
};

export default Section;
