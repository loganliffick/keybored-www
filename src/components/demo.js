import Keybored from 'keybored';
import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0% {
    opacity: 0%;
  }
`;

const bounce = keyframes`
  from {
    transform: scale(1);
    box-shadow: 6px 6px 0px var(--red);
  }
  to {
    transform: scale(0.95);
    box-shadow: 0px 0px 0px var(--red);
  }
`;

const StyledDiv = styled.div`
  width: 100%;

  .keyboredContainer {
    margin: 80px auto;
  }

  #write {
    width: 100%;
    background: var(--pink);
    content: 'tset';
    color: var(--red);
    font-family: 'Cascadia', monospace;
    font-size: 80px;
    font-weight: 400;
    line-height: 88px;
    padding: 32px;
    border-radius: 24px;
    height: 200px;
    display: flex;
    align-items: center;
    // box-shadow: 4px 4px 0px var(--blue), 8px 8px 0px var(--green), 12px 12px 0px var(--dark);
    box-shadow: 6px 6px 0px var(--red);

    &:after {
      content: '|';
      animation: ${blink} 1.25s steps(2) infinite;
    }

    &[bounce='1'] {
      animation: ${bounce} 0.1s linear;
    }
  }
`;

const Demo = (props) => {
  const [bounce, setBounce] = useState(0);
  useEffect(() => {
    Keybored({
      whatKey: false,
      keyboard: 'std',
      nestIn: '.keyboredContainer',
      function: (key) => {
        let writer = document.getElementById('write');
        let script = writer.innerHTML.split('');
        const enterKey = document.querySelector('.Enter');
        let audio = new Audio('./sounds/toggle-off.m4a');
        setBounce(1);

        const shaker = () => {
          if (key === 'Enter' || key === 'Backspace') {
          } else {
            audio.play();
          }
          enterKey.style.transform = 'rotate(-8deg) scale(1.25)';
          setTimeout(() => {
            enterKey.style.transform = 'rotate(0deg)  scale(1)';
          }, 50);
        };

        const enterKeySpike = () => {
          enterKey.style.background = 'var(--pink)';
          enterKey.style.color = 'var(--red)';
          enterKey.style.border = '1px solid var(--red)';
          enterKey.style.boxShadow = 'var(--shadow-static) var(--red)';
        };

        const enterKeyCalm = () => {
          enterKey.style.background = 'var(--key-background)';
          enterKey.style.color = 'var(--key-color)';
          enterKey.style.border = '1px solid var(--key-border-color)';
          enterKey.style.boxShadow = 'var(--shadow-static) var(--shadow-color)';
        };

        if (script.length >= 14) {
          enterKeySpike();
          shaker();
          if (key === 'Enter') {
            enterKeyCalm();
            writer.innerHTML = '';
          } else if (key === 'Backspace') {
            enterKeyCalm();
          } else {
            writer.innerHTML = writer.innerHTML;
          }
        } else if (key === 'Space') {
          event.preventDefault();
          writer.innerHTML = writer.innerHTML + ' ';
        } else if (key === 'Enter') {
          writer.innerHTML = '';
        } else {
          writer.innerHTML = writer.innerHTML + key.charAt(3).toLowerCase();
        }
        if (key === 'Backspace') {
          script.pop();
          writer.innerHTML = script.join('');
        }
        if (key === 'Space') {
          event.preventDefault();
        }
      },
    });
  }, []);
  return (
    <StyledDiv>
      <p
        id="write"
        bounce={bounce}
        onAnimationEnd={() => {
          setBounce(0);
        }}
      >
        type sum
      </p>
      <div className="keyboredContainer"></div>
    </StyledDiv>
  );
};

export default Demo;
