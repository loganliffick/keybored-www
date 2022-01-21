import styled from 'styled-components';

const StyledSVG = styled.svg`
  position: absolute;
  top: ${(props) => props.top || 'none'};
  left: ${(props) => props.left || 'none'};
  right: ${(props) => props.right || 'none'};
  z-index: 0;
  transition: transform 0.2s ease;

  &:hover {
    transform: ${(props) => (props.opposite ? 'rotate(-10deg)' : 'rotate(20deg)')};
  }

  @media (max-width: 500px) {
    z-index: -1;
  }
`;

const Flower = (props) => {
  return (
    <StyledSVG {...props} width={props.size} height={props.size} viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M42.1204 54.8029C49.4587 52.0263 54.3509 47.6164 41.7942 38.7966L36.4128 35.04L36.7389 34.3867L39.8373 34.7133C53.5356 36.1833 57.4493 33.7333 56.9601 24.5869C56.4709 16.5837 54.1879 10.8671 41.7942 20.0136L36.2497 24.0969L35.7605 23.6069L37.2281 20.177C42.6096 7.60053 41.6311 3.02729 32.8251 0.740674C25.1607 -1.21928 18.9638 -0.0759749 23.693 13.9704L25.813 20.177L25.1607 20.3403L22.5515 18.0537C12.2778 9.07051 7.54865 8.58052 2.81951 16.257C-1.42042 23.1169 -2.72501 29.3234 12.4409 28.9968L19.4531 28.8335V29.6501L16.5177 31.4467C4.7764 38.6333 2.81951 42.7165 8.5271 49.7397C13.5824 55.9462 19.4531 58.8862 23.693 44.5131L25.6499 37.9799L26.3022 38.1433L27.1175 41.5732C30.216 54.9663 33.6405 58.0695 42.1204 54.8029Z"
        fill={props.color}
      />
    </StyledSVG>
  );
};

export default Flower;
