
import Button from "./components/Button";
import {Container, Row, Col} from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <h2>Welcome to Somemone's Website</h2>
      </Row>
      <Row>
        <Col>I'm not really doing anything with this website right now, but soon I will be. I make Minecraft servers, and some other things with less quality. As you can see from this website, graphic design is my passion. Personal websites are cool, they're like 0.99/year, so you should get one too.<br /> <br /> </Col>
        <Col>
          In the meantime, you can press this button (which changes colors). <br /> <Button />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
