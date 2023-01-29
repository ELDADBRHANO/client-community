import "./contact-section.css";
import { Col, Container, Row, Button, Image } from "react-bootstrap";

const ContactSection = () => {
  return (
    <Container className="ContactSection">
      <Row>
        <Col className="imgDiv d-flex justify-content-center" sm={7}>
          <Image src="./images/contactus.avif" className="ContactSectionImg" />
        </Col>
        <Col className="d-flex flex-column">
          <h1 className="HeadLineTitle">
            Grow your audience on social and beyond
          </h1>
          <h3 className="SpanSecondLine mb-5 mt-5">
            Welcome to lawmarket, A website that provides service and legal
            advice to everyone. You can find contract agreements and lawyers
            from all types of fields on our website, As of 2023, we are
          </h3>
          <Col className="mt-3">
            <button className=" btnAllPage m-1 w-50">
              Click Here
            </button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
