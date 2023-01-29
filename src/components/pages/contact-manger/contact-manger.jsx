import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../../features/contact-form/contact-form";
import "./contact-manger.css";

const ContactManger = () => {
  return (
    <Container className="ContactManger">
      <h1 className="d-flex justify-content-center align-items-center mt-2">Contact</h1>
      <span className="align-self-center">
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within a matter of hours to
        help you.
      </span>
      <Row>
        <Col sm={12} className="d-flex justify-content-center mt-4">
          <ContactForm className="contactForm" />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactManger;
