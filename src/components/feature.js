import styled from 'styled-components';
import Image from 'next/image';

const StyledDiv = styled.div`
  margin-bottom: 80px;
`;

const Content = styled(StyledDiv)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  p a {
    color: var(--blue);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    text-decoration: underline;
  }

  h3 {
    margin: 0 32px 0 0;
    width: 208px;
  }

  p {
    width: 368px;
  }

  @media (max-width: 500px) {
    display: block;

    h3 {
      margin: 0 0 16px 0;
      width: auto;
    }

    p {
      width: auto;
    }
  }
`;

const StyledImg = styled(Image)`
  border-radius: 12px;
`;

const Feature = (props) => (
  <StyledDiv>
    <Content>{props.children}</Content>
    <StyledImg src={props.image} height={props.height} width="608px" />
  </StyledDiv>
);

export default Feature;
