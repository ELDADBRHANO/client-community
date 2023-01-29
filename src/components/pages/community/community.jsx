import { Container, Row, Col } from "react-bootstrap";
import CommunityCenter from "../../features/community-center/community-center";
import CommunityNavbar from "../../features/community-navbar/community-navbar";
import CommunitySideOne from "../../features/community-side-one/community-side-one";
import CommunitySideTwo from "../../features/community-side-two/community-side-two";
import ContactForm from "../../features/contact-form/contact-form";
import { useParams } from "react-router-dom";
import "./community.css";

const Community = () => {
  const { id } = useParams();
  // console.log(id);
  return (
    <Container>
      <CommunityNavbar data={id} />
      <Row>
        <Col sm={4}><CommunitySideOne/></Col>
        <Col sm={5}><CommunityCenter data={id}/></Col>
        <Col sm={3}><CommunitySideTwo/></Col>
      </Row>
    </Container>
  );
};

export default Community;
