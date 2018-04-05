import styled from 'styled-components';

const Row = styled.div`
  display: ${props => props.display};
  flex-wrap: ${props => props.flexWrap};
  flex-direction ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  //margin-right: -15px;
  //margin-left: -15px;
`;

Row.defaultProps = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'flex-start',
  justifyContent: 'flex-start',
  alignItems: 'wrap'
};

export default Row;
