import styled from 'styled-components';

const NavWrap = styled.header`
  position: fixed;
  top: 0;
  padding-top: 40px;
  width: 100vw;
  z-index: 10;
  mix-blend-mode: difference;
`;

const StyledDiv = styled.div`
  text-align: center;
  max-width: 608px;
  margin: 0 auto;

  h2 {
    margin-bottom: 24px;
  }
  h2,
  a {
    color: var(--logo);
  }
`;

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;

  a {
    margin: 0 12px 0 12px;
  }
`;

const Nav = () => {
  return (
    <NavWrap>
      <StyledDiv>
        <h2>
          <a href="https://keyboredjs.com">keybored</a>
        </h2>
        <StyledNav>
          <h4>
            <a href="#features">Features</a>
          </h4>

          <h4>
            <a href="#guides">Guides</a>
          </h4>

          <h4>
            <a href="#futures">Futures</a>
          </h4>
        </StyledNav>
      </StyledDiv>
    </NavWrap>
  );
};

export default Nav;
