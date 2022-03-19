import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Garnish from './garnish';

const StyledA = styled.a`
  align-items: center;
  background: var(--blue);
  border-radius: 12px;
  color: var(--pink);
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Cascadia', monospace;
  font-size: 16px;
  justify-content: center;
  line-height: 24px;
  margin: 0 auto;
  padding: 12px 12px 12px 20px;
  position: relative;
  transition: transform 0.2s ease;
  width: max-content;

  .garnish {
    margin-left: 16px;
  }

  :hover {
    transform: ${(props) => (props.down ? 'rotate(2deg)' : 'rotate(-2deg)')};
    span {
      transform: translateX(91px);
    }
    .garnish {
      background: var(--red);
    }

    :active {
      .garnish {
        transform: scale(0.85);
      }
    }
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Button = (props) => (
  <StyledA {...props} href={props.link} target="_blank">
    {props.text}
    <Garnish type={props.type} />
  </StyledA>
);

const toastAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  75% {
    opacity: 1;
    transform: translateY(-40px) rotate(-8deg);
  }
  99% {
    opacity: 0;
    transform: translateY(-40px) rotate(-8deg);
  }
  100% {
    transform: translateY(0) rotate(8deg);
  }
`;

const StyledDiv = styled.div`
  position: relative;
  margin: 0 auto;

  .toast {
    background: var(--green);
    border-radius: 12px;
    color: var(--dark);
    font-family: 'Basteleur', serif;
    font-size: 16px;
    left: 0;
    line-height: 24px;
    margin 0 auto;
    opacity: 0;
    padding: 12px 20px;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    width: max-content;
    z-index: 2;

    &[toast='1'] {
      animation: ${toastAnimation} 0.75s ease;
    }
  }
`;

export const ToastButton = (props) => {
  const [toast, setToast] = useState(0);

  return (
    <StyledDiv>
      <div
        className="toast"
        toast={toast}
        onAnimationEnd={() => {
          setToast(0);
        }}
      >
        {props.toast}
      </div>
      <Button
        as="div"
        {...props}
        text={props.text}
        type={props.type}
        onClick={() => {
          navigator.clipboard.writeText(props.clip);
          setToast(1);
        }}
      />
    </StyledDiv>
  );
};

export default Button;
