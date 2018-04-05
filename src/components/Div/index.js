import styled from 'styled-components';

const Div = styled.div`
  display: ${props => props.display};
  padding-right: 15px;
  padding-left: 15px;
  // width: 50%;
  // -webkit-box-flex: 0;
  // -ms-flex: 0 0 50%;
  // flex: 0 0 50%;
  // max-width: 50%;
`;

Div.defaultProps = {
  display: 'block'
};

export default Div;
