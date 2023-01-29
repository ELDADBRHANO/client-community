import "./subject-card-maker.css";
import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { categoriesContext } from "../../../contexts/categories";
const SubjectCardMaker = ({ data, type }) => {


  return (
    <div className="d-flex flex-column align-items-center mainCard">
          <Image src={data?.pic} className="CardCircleLogo" />
          <h4 className="cardTitle">{data?.name}</h4>
    </div>
  );
};

export default SubjectCardMaker;
