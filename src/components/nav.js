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

  .logo {
    color: var(--logo);
    font-family: 'Basteleur', serif;
    font-size: 40px;
    font-weight: 800;
    letter-spacing: -2%;
    line-height: 48px;
  }

  .link {
    color: var(--logo);
    font-family: Georgia, serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
  }
`;

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;

  a {
    margin: 24px 12px 0 12px;
  }
`;

const Nav = () => {
  return (
    <NavWrap>
      <StyledDiv>
        <a className="logo" href="https://keyboredjs.com">
          keybored
        </a>
        <StyledNav>
          <a className="link" href="#features">
            Features
          </a>
          <a className="link" href="#guides">
            Guides
          </a>
          <a className="link" href="#futures">
            Futures
          </a>
        </StyledNav>
      </StyledDiv>
    </NavWrap>
  );
};

export default Nav;
