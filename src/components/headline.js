import styled from 'styled-components';

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  margin-bottom: ${(props) => (props.small ? '40px' : '80px')};

  h4 {
    max-width: 448px;
    margin: 0 auto 40px auto;
  }
`;

const Headline = (props) => <StyledDiv {...props}>{props.children}</StyledDiv>;

export default Headline;
