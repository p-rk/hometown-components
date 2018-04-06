import styled from 'styled-components';

const Label = styled.label`
  font-size: ${props => props.fontSize};
  font-style: ${props => props.fontStyle};
  font-family: ${props => props.vertical ? props.fontFamily : ''};
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.textDark};
  ${props => props.mb && { marginBottom: props.mb }}
  ${props => props.mt && { marginTop: props.mt }}
  display: inline-block;
`;

const FeedBackMessage = styled(Label)`
  color: ${props => props.theme.colors[props.type]};
`;

Label.defaultProps = {
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontFamily: 'SFPDMedium',
  mb: '5px',
  mt: '5px',
  type: 'note'
};

export { Label, FeedBackMessage };
