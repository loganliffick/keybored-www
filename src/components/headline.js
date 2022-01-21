import styled from 'styled-components';

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  text-align: center;

  h4 {
    max-width: 448px;
    margin: 0 auto;
  }
`;

const Headline = (props) => <StyledDiv>{props.children}</StyledDiv>;

export default Headline;
