import styled from 'styled-components';

const display = (props, type) => {
  const typeObj = {
    block: {
      width: `${props.theme.col[props.col]}`,
      float: 'left',
      position: 'relative',
    },
    flex: {
      maxWidth: `${props.theme.col[props.col]}`,
      flex: `0 0 ${props.theme.col[props.col]}`,
      width: '100%'
    },
    flexEqual: {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: `${props.theme.col[props.col]}`,
      flex: `0 0 ${props.theme.col[props.col]}`,
      width: '100%'
    }
  };

  return typeObj[type];
};

const Div = styled.div`
  display: block;
  ${props => display(props, props.display)};

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

  box-sizing: border-box;
  > *, ::after, ::before {
    box-sizing: border-box;
  }
`;

Div.defaultProps = {
  display: 'block',
  col: '12'
};

export default Div;
