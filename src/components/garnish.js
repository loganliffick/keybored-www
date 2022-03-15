import styled from 'styled-components';

const StyledDiv = styled.div`
  background: var(--dark);
  border-radius: 12px;
  color: var(--lite);
  font-family: 'Cascadia', monospace;
  font-size: 16px;
  height: 32px;
  line-height: 24px;
  overflow: hidden;
  padding: 4px 8px;
  position: relative;
  text-align: left;
  text-transform: uppercase;
  width: 54px;
  transition: all 0.2s ease;
  transition-property: transform, background;
`;

const StyledSpan = styled.span`
  position: absolute;
  transition: 0.25s ease;
  ::after {
    content: '${(props) => (props.type === 'copy' ? '+' : '->')}';
    position: absolute;
    left: -90px;
    text-align: center;
    top: 0px;
    width: 100%;
  }
`;

const Garnish = (props) => (
  <StyledDiv className="garnish">
    <StyledSpan {...props}>{props.type}</StyledSpan>
  </StyledDiv>
);

export default Garnish;
