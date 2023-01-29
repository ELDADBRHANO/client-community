import "./subject-card.css";
import { Container, Row, Col } from "react-bootstrap";
import SubjectCardMaker from "../subject-card-maker/subject-card-maker";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { categoriesContext } from "../../../contexts/categories";
const SubjectCard = () => {
  const { categories, setCategories } = useContext(categoriesContext);
 
  const arrayCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // console.log(categories);
  const findById = (id,index) => {
    const subId = categories.find(item=>item._id === id)
    return subId
  };

  return (
    <div className="subjec-container">
          <Container>
      <Row>
        {categories?.map((item,i) => {
          return (
            <Col sm={3} className="mt-3 mb-3">
              <Link onClick={()=>findById(item._id)} to={`/category/${item._id}?index=${i}`}>
                <SubjectCardMaker  data={item} type="category" />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
    </div>

  );
};

export default SubjectCard;
