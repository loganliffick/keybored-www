import styled from 'styled-components';
import Button, { ToastButton } from './button';

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 80px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    display: block;
  }
`;

const StyledButton = styled(Button)`
  color: var(--red);
  background: var(--pink);
`;

const StyledToastButton = styled(ToastButton)`
  color: var(--red);
  background: var(--pink);
`;

const SquiggleContainer = styled(StyledDiv)`
  display: flex;
  width: max-content;
  margin-bottom: 0;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    width: 100%;
    margin 24px auto;
    justify-content: center;
  }
`;

const Squiggle = styled.svg`
  color: var(--yellow);
  margin: 0 16px;

  &.up {
    display: block;

    @media (max-width: 600px) {
      display: none;
    }
  }

  &.down {
    display: none;

    @media (max-width: 600px) {
      display: block;
    }
  }
`;

const Install = () => {
  return (
    <StyledDiv>
      <StyledToastButton text="npm i keybored" type="copy" clip="npm i keybored" toast="copied!" />
      <SquiggleContainer>
        <Squiggle className="up" width="120" height="56" viewBox="0 0 120 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M117.25 32.4849C102.75 48.9833 82.25 47.9836 66.25 30.4834C37.7816 -0.654423 67.25 -11.0156 87.25 22.9838C107.25 56.9832 49.75 67.4849 29.25 32.4849C8.75 -2.51507 38.75 1.48325 47.75 22.9838C62.6046 58.4708 24.25 54.9829 2.75 41.9834M117.25 32.4849L108.75 30.4833M117.25 32.4849V41.9834"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Squiggle>
        <Squiggle className="down" width="112" height="75" viewBox="0 0 112 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.12762 2C18.5 10.5 -8.10023 40.7121 7.1275 41C15.6957 41.162 16.9313 29.1382 25.4999 29C35.7754 28.8342 35.7827 46.6046 46 45.5C56.2172 44.3954 53.1747 25.504 62.4999 25C72.4352 24.463 71.1474 43.7755 81.5 43.5C92.8983 43.1967 90.8486 20 98.8276 20C109.828 20 112.5 46.5 98.8276 73.5M98.8276 73.5C103.123 71.1569 109.828 67.5 109.828 67.5M98.8276 73.5C96.7968 69.79 93.6275 64 93.6275 64"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Squiggle>
      </SquiggleContainer>
      <StyledButton text="Add the CSS" type="link" link="https://github.com/loganliffick/keybored/blob/main/src/css/keybored.css" />
    </StyledDiv>
  );
};

export default Install;
