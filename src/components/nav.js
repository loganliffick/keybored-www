import styled from 'styled-components';

const NavWrap = styled.header`
  position: fixed;
  top: 0;
  padding-top: 40px;
  width: 100vw;
  z-index: 10;
`;

const StyledDiv = styled.div`
  text-align: center;
  max-width: 608px;
  margin: 0 auto;

  h2 {
    margin-bottom: 24px;
  }
`;

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  gap: 24px;
  justify-content: center;
`;

const Nav = () => {
  return (
    <NavWrap>
      <StyledDiv>
        <a href="#">
          <h2>keybored</h2>
        </a>
        <StyledNav>
          <a href="#">
            <h4>Features</h4>
          </a>
          <a href="#">
            <h4>Guides</h4>
          </a>
          <a href="#">
            <h4>Futures</h4>
          </a>
        </StyledNav>
      </StyledDiv>
    </NavWrap>
  );
};

export default Nav;
