import "./community-create.css";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const CreateCommunityForm = () => {
  const [step, setStep] = useState(0);
  const [hideButton, setHideButton] = useState(0);

  // const handleInputChange = (e) => {
  //   e.preventDefault()
  //   const { name, value } = e.target;
  //   onchangeClientForm((prev) => {
  //     return { ...prev, [name]: value };
  //   })
    
  // }

  const [communityForm, setCommunityForm] = useState({
    communityName: "",
    communityDescription: "",
    communityRules: "",
    isPrivate: ""
  })

  const step_form = step + 1;

  const Form = () => {
    if (step == 0) {
      return <Login />;
    } else if (step == 1) {
      return <Contact />;
    } else if (step == 2) {
      return <Social />;
    } else if (step == 3) {
      return <Welcome />;
    }
  };
  const Login = () => {
    return (
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center">
            <div className="form_body">
              <div className="header">
                <h1>Basic Details</h1>
                <span>{step_form}</span>
              </div>
              <div className="form_data">
                <div className="input_field">
                  <input type="text" required />
                  <span>Community Name</span>
                </div>

                <div className="input_field">
                  <input type="text" required />
                  <span>Community Description</span>
                </div>

                <div className="input_field">
                  <input type="text" required />
                  <span>Community Rules</span>
                </div>

                <div className="input_field">
                  <select name="privacy" id="">
                    <option value="privacy">Privacy</option>
                    <option value="private">Private</option>
                    <option value="public">Public</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="footer">
              <button
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                Next
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };

  const Contact = () => {
    return (
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center">
            <div className="form_body">
              <div className="header">
                <h1>Contact Info</h1>
                <span>{step_form}</span>
              </div>
              <div className="form_data">
                <div className="input_field">
                  <input type="text" required />
                  <span>Country</span>
                </div>

                <div className="input_field">
                  <input type="text" required />
                  <span>City</span>
                </div>

                <div className="input_field">
                  <input type="email" required />
                  <span>Email</span>
                </div>

                <div className="input_field">
                  <input type="text" required />
                  <span>Phone Number</span>
                </div>
              </div>
            </div>
            <div className="footer">
              <button
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Previous
              </button>
              <button
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                Next
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };

  const Social = () => {
    return (
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center">
            <div className="form_body">
              <div className="header">
                <h1>Social Info</h1>
                <span>{step_form}</span>
              </div>
              <div className="form_data">
                <div className="input_field">
                  <input type="text" required />
                  <span>Facebook</span>
                </div>

                <div className="input_field">
                  <input type="text" required />
                  <span>Instgram</span>
                </div>

                <div className="input_field">
                  <input type="text" required />
                  <span>Linkedin</span>
                </div>

                <div className="input_field">
                  <input type="text" required />
                  <span>Twitter</span>
                </div>
              </div>
            </div>
            <div className="footer">
              <button
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Previous
              </button>
              <button
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                Finish
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };

  const Welcome = () => {
    return (
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center">
            <div className="final">
              <div className="final_content">
                <span className="check">
                  <i class="bi bi-check-circle-fill"></i>
                </span>
                <p>
                  Your Information has been submitted! We will contact you soon!
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    <Container>
      <Row>
        <Col className="d-flex flex-column justify-content-center">
          <div class="form">
            <div className="cardStyle">
              <div>{<Form />}</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

//   export default  CreateCommunityForm
