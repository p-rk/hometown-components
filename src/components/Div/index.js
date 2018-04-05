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
  box-sizing: border-box;
  padding-right: 15px;
  padding-left: 15px;

  ${props => display(props, props.display, props.width)};
`;

Div.defaultProps = {
  display: 'block',
  width: 'auto'
};

export default Div;
