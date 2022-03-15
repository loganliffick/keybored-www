import styled from 'styled-components';

const StyledDiv = styled.div`
  text-align: left;

  p {
    margin: 8px 0px 24px 0px;

    &:last-of-type {
      margin: 8px 0px 0px 0px;
    }
  }
`;

const Row = styled(StyledDiv)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-right: 32px;

  h4,
  h5 {
    color: var(--yellow);
    width: 144px;
  }

  h5 {
    color: var(--green);
  }

  @media (max-width: 350px) {
    padding-right: 0px;
  }
`;

const Divider = styled(StyledDiv)`
  width: 100%;
  height: 1px;
  background: var(--yellow);
  margin: 8px 0;
`;

const Table = (props) => (
  <>
    <Row>
      <h4>Name</h4>
      <h4>Type</h4>
      <h4>Default</h4>
    </Row>
    <Divider />
    <Row>
      <h5>{props.name}</h5>
      <h5>{props.type}</h5>
      <h5>{props.value}</h5>
    </Row>
    <p>{props.description}</p>
  </>
);

const Options = (props) => (
  <StyledDiv {...props}>
    <h3>Options</h3>
    <Table name="whatKey" type="boolean" value="false" description="Helper function. Logs key input to the console."></Table>
    <Table name="keyboard" type="string" value="'.std'" description="Keyboard selector. Input ‘.wasd’ to see an alternative."></Table>
    <Table name="nestIn" type="string" value="'body'" description="This value determines where your keybored is placed in your app."></Table>
    <Table name="function" type="function" value="NA" description="This is where the magic happens! Create a function that uses keybored’s output values to do the thing."></Table>
  </StyledDiv>
);

export default Options;
