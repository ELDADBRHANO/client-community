import "./hero-section.css";
import { Col, Container, Row, Button, Image } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className="backgorundColor">
      <Container className="mt-5 mb-5">
        <Row>
          <Col className="d-flex flex-column">
            <div className="d-flex flex-column align-items-center">
              <h1 className="HeadLineTitle">
                Grow your audience on social and beyond
              </h1>
              <h3 className="SpanSecondLine mb-5 mt-5">
                Welcome to International Community, A website that provides
                community management in the most correct and convenient way.
              </h3>
            </div>
            <Col className="mt-3">
              <button className="btnAllPage mx-2" href="/">
                Click Here
              </button>
              <button className="btnAllPage2" href="/">
                Click Here
              </button>
              {/* <Button variant="outline-info" className="m-1 w-25">
              Click Here
            </Button>
            <Button className="m-1 w-25">Click Here</Button> */}
            </Col>
          </Col>
          <Col className="imgDiv d-flex justify-content-center">
            <Image src="https://img.freepik.com/free-vector/multicultural-people-standing-together_74855-6583.jpg?w=1380&t=st=1674602516~exp=1674603116~hmac=b5f2a07d25ca17cc21f19a5115952fa719ce582c52b62262c220b88703a88604" className="HeroSectionImg" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
