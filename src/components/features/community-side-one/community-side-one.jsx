import "./community-side-one.css";
import { Container, Row, Col, Image } from "react-bootstrap";

const CommunitySideOne = () => {
  return (
    <Container>
      <Col className="listCard">
        <ul className="ListLinkMenu">
          <h4>Social Accounts</h4>
          <li>
            <i class="bi bi-facebook mx-3"></i>
            <a className="mx-3" href="#">
              Facebook Link
            </a>
          </li>
          <li>
            <i class="bi bi-facebook mx-3"></i>
            <a className="mx-3" href="#">
              Facebook Link
            </a>
          </li>
          <li>
            <i class="bi bi-facebook mx-3"></i>
            <a className="mx-3" href="#">
              Facebook Link
            </a>
          </li>
          <li>
            <i class="bi bi-facebook mx-3"></i>
            <a className="mx-3" href="#">
              Facebook Link
            </a>
          </li>
          <li>
            <i class="bi bi-facebook mx-3"></i>
            <a className="mx-3" href="#">
              Facebook Link
            </a>
          </li>
        </ul>
      </Col>
      <Col className="listCard mt-4">
        <ul className="ListLinkMenu">
          <h4>People Viewed Profile</h4>
          <li className="userAdd">
            <Image src='./images/communitylogo.png' className="addProfileImg"/>
            <h6>Name User</h6>
            <button className="btnAddUser">Add</button>
          </li>
          <li className="userAdd">
            <Image src='./images/communitylogo.png' className="addProfileImg"/>
            <h6>Name User</h6>
            <button className="btnAddUser">Add</button>
          </li>
          <li className="userAdd">
            <Image src='./images/communitylogo.png' className="addProfileImg"/>
            <h6>Name User</h6>
            <button className="btnAddUser">Add</button>
          </li>
          <li className="userAdd">
            <Image src='./images/communitylogo.png' className="addProfileImg"/>
            <h6>Name User</h6>
            <button className="btnAddUser">Add</button>
          </li>
        </ul>
      </Col>
    </Container>
  );
};

export default CommunitySideOne;
