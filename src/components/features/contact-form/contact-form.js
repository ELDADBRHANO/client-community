import React, { useState } from "react";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import contact from "../../../services/contact";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  
  // const handleDefault = (e) => {
  // return  e.preventDefault();
  // };
  const sendMangerMsg = () => {
    let mail = {
      from: "managedata57@gmail.com",
      email: email,
      msg: msg,
      name: name,
      subject: subject,
    };
    return mail ? contact(mail) : console.log("problem");
  };
  return (
    <form>
      <MDBInput
        onChange={(e) => {
          setName(e.target.value);
        }}
        id="form4Example1"
        wrapperClass="mb-4"
        label="Name"
      />
      <MDBInput
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        id="form4Example2"
        wrapperClass="mb-4"
        label="Email address"
      />
      <MDBInput
        onChange={(e) => {
          setSubject(e.target.value);
        }}
        type="subject"
        id="form4Example2"
        wrapperClass="mb-4"
        label="Subject"
      />
      <MDBInput
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        wrapperClass="mb-4"
        textarea
        id="form4Example3"
        rows={4}
        label="Message"
      />

      <MDBCheckbox
        wrapperClass="d-flex justify-content-center mb-4"
        id="form4Example4"
        label="Send me a copy of this message"
        // defaultChecked
      />

      <MDBBtn
        onClick={() => {
          sendMangerMsg();
        }}
        type="submit"
        className="mb-4"
        block
      >
        send
      </MDBBtn>
    </form>
  );
}
