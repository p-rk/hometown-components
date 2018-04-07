import styled from 'styled-components';

const types = {
  default: {
    textDecoration: 'none'
  },
  lt: {
    textDecoration: 'line-through'
  }
};

const Span = styled.span`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  text-align: ${props => props.ta};

  ${props => types[props.type]};

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

Span.defaultProps = {
  type: 'default',
  color: 'rgba(0, 0, 0, 0.4)',
  fontSize: '1rem',
  ta: 'left',
};

export default Span;
