import styled from 'styled-components';

const StyledSection = styled.section`
  background: ${(props) => (props.dark ? 'var(--dark)' : 'none')};
  padding: ${(props) => (props.dark ? '224px 24px 160px 24px' : '160px 24px 0px 24px')};
  position: relative;
  margin-bottom: ${(props) => (props.dark ? '64px' : '0px')};
  margin-top: ${(props) => (props.dark ? '224px' : '0px')};
  width: 100%;

  &::before {
    background: url('/images/border.svg') top center;
    content: ${(props) => (props.dark ? '""' : 'none')};
    height: 64px;
    left: 0;
    position: absolute;
    top: -64px;
    width: 100%;
  }

  &::after {
    background: url('/images/border.svg') top center;
    bottom: -64px;
    content: ${(props) => (props.dark ? '""' : 'none')};
    height: 64px;
    left: 0;
    position: absolute;
    transform: rotate(180deg);
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    color: ${(props) => (props.dark ? 'var(--lite)' : 'var(--dark)')};
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: ${(props) => (props.large ? 'var(--width-2)' : 'var(--width-1)')};
  padding-top: ${(props) => (props.hero ? '40px' : '0px')};
`;

const Section = (props) => (
  <StyledSection {...props}>
    <Container {...props}>{props.children}</Container>
  </StyledSection>
);

export default Section;
