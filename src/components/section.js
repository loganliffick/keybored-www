import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 0 24px;
  padding-top: 160px;
  width: 100%;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: ${(props) => (props.large ? 'var(--width-1)' : 'var(--width-2)')};
`;

const Section = (props) => (
  <StyledSection>
    <Container {...props}>{props.children}</Container>
  </StyledSection>
);

export default Section;
