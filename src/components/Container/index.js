import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: ${props => props.theme.breakpoints('xs')}) {
    max-width: 540px;
  }
  @media (min-width: ${props => props.theme.breakpoints('sm')}) {
    max-width: 720px;
  }
  @media (min-width: ${props => props.theme.breakpoints('md')}) {
    max-width: 960px;
  }
  @media (min-width: ${props => props.theme.breakpoints('lg')}) {
    max-width: ${props => props.type === 'cf' ? '100%' : '1140px'};
  }
`;

Container.defaultProps = {
  type: 'cf'
};

export default Container;
