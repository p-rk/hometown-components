import styled from 'styled-components';

const display = (props, type, width) => {
  const typeObj = {
    block: {
      display: 'block',
      width: `${width}`,
      float: 'left',
      position: 'relative',
    },
    flex: {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: '100%'
    }
  };

  return typeObj[type];
};

const Div = styled.div`
  ${props => display(props, props.display, props.width)};
  
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
  width: '100%'
};

export default Div;
