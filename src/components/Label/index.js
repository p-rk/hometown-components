import styled from 'styled-components';

const Label = styled.label`
  font-size: ${props => props.fontSize};
  font-style: ${props => props.fontStyle};
  font-weight: ${props => props.theme.fontFamily[props.fontFamily]};
  color: ${props => props.theme.colors[props.color]};
  text-align: ${props => props.ta};
  display: ${props => props.display};
  vertical-align: ${props => props.va};

  ${props => props.bg && { background: props.bg }}
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

const FeedBackMessage = styled(Label)`
  color: ${props => props.theme.colors[props.type]};
  font-size: 13px;
  margin-bottom: 0;
  font-weight: 400;
`;

Label.defaultProps = {
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontFamily: 'medium',
  mb: '5px',
  mt: '5px',
  type: 'note',
  color: 'textDark',
  ta: 'left',
  display: 'inline-block',
  va: 'inherit'
};

export { Label, FeedBackMessage };
