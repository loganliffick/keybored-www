import styled from 'styled-components';
import Button from './button';
import Image from 'next/image';

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

const StyledImage = styled(Image)`
  @media (max-width: 600px) {
    position: static;
    transform: translateX(20px);
  }
`;

const Squiggle = styled.svg`
  margin: 0 16px;

  @media (max-width: 600px) {
    margin: 40px auto;
    width: 100%;
  }
`;

const Steps = () => (
  <StyledDiv>
    <StyledButton
      text="npm i keybored"
      type="copy"
      onClick={() => {
        navigator.clipboard.writeText('npm i keybored');
      }}
    />
    <Squiggle width="118" height="56" viewBox="0 0 118 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M116.25 32.4849C101.75 48.9833 81.25 47.9836 65.25 30.4834C36.7816 -0.654423 66.25 -11.0156 86.25 22.9838C106.25 56.9832 48.75 67.4849 28.25 32.4849C7.75 -2.51507 37.75 1.48325 46.75 22.9838C61.6046 58.4708 23.25 54.9829 1.75 41.9834M116.25 32.4849L107.75 30.4833M116.25 32.4849V41.9834"
        stroke="var(--yellow)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Squiggle>
    <StyledButton text="Add the CSS" type="link" link="https://github.com/loganliffick/keybored/blob/main/src/css/keybored.css" />
  </StyledDiv>
);

export default Steps;
