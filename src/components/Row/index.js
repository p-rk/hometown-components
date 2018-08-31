import styled from 'styled-components';

const display = (props, type) => {
  const typeObj = {
    block: {
      display: `${props.display}`,
      clear: 'both'
    },
    flex: {
      display: `${props.display}`,
      flexWrap: `${props.flexWrap}`,
      flexDirection: `${props.flexDirection}`,
      justifyContent: `${props.justifyContent}`,
      alignItems: `${props.alignItems}`,
    }
  };

  return typeObj[type];
};

const Row = styled.div`
  box-sizing: border-box;
  margin-right: -15px;
  margin-left: -15px;
  position: relative;

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

  &:before, &:after {
    box-sizing: border-box;
    display: table;
    content: " ";
  }

  &:after {
    clear: both;
  }
`;

Row.defaultProps = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'flex-start',
  justifyContent: 'flex-start',
  alignItems: 'npwrap'
};

export default Row;
