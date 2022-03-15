import styled from 'styled-components';
import Garnish from './garnish';

const StyledDiv = styled.div``;

const Container = styled(StyledDiv)`
  background: ${(props) => props.background || 'var(--pink)'};
  border-radius: 12px;
  color: ${(props) => props.color || 'var(--blue)'};
  margin-bottom: 40px;
  padding: 24px;
  transition: transform 0.2s ease;
  width: 100%;

  h3 {
    word-break: break-word;
  }

  h3,
  h4 {
    color: inherit;
    width: auto;
  }

  .garnish {
    margin-bottom: 16px;
  }

  :hover {
    transform: ${(props) => (props.down ? 'rotate(2deg)' : 'rotate(-2deg)')};
    span {
      transform: translateX(91px);
    }
    .garnish {
      background: var(--red);
    }
  }
`;

const Headline = styled(StyledDiv)`
  align-items: center;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
`;

const Card = (props) => (
  <a href={'https://github.com/loganliffick/keybored/issues/' + props.n} target="_blank">
    <Container {...props}>
      <Headline>
        <h3>{props.title}</h3>
        <Garnish type="link" />
      </Headline>
      <h4>{props.content}</h4>
    </Container>
  </a>
);

export default Card;
