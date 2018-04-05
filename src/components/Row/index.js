import styled from 'styled-components';

const display = (props, type) => {
  const typeObj = {
    block: {
      display: `${props.display}`,
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
  ${props => display(props, props.display)};
  margin-right: -15px;
  margin-left: -15px;
`;

Row.defaultProps = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'flex-start',
  justifyContent: 'flex-start',
  alignItems: 'wrap'
};

export default Row;
