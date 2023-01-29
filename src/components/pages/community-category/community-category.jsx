import { stepClasses } from "@mui/material";
import { Container, Row, Col,Image } from "react-bootstrap";
import { Link, useSearchParams, useParams } from "react-router-dom";
import SubjectCardMaker from "../../features/subject-card-maker/subject-card-maker";
import "./community-category.css";
import { useContext } from "react";
import { categoriesContext } from "../../../contexts/categories";

const CommunityCategory = () => {
  const { categories, setCategories } = useContext(categoriesContext);
  const { id } = useParams();
  const category = categories.filter((category) => category._id === id);

  const [searchParams] = useSearchParams();
  const index = searchParams.get('index')
  
  console.log(index);
  console.log(category);
  const imgArray = ["https://sm.ign.com/ign_il/cover/t/the-last-o/the-last-of-us-part-1_cbff.jpg",
"https://ftw.usatoday.com/wp-content/uploads/sites/90/2022/07/Dual_Athlete_GEN5_UE_CROP_SOCIAL_1920x1080.jpg?w=1000&h=600&crop=1",
"https://cdn.vox-cdn.com/thumbor/_T2SKE5cdUeI_nDkXARGiqSQWLg=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20076683/Screen_Shot_2020_07_10_at_6.08.04_AM.png"]
  return (
    <Container className="CommunityCategory">
      <h1 className="d-flex justify-content-center mt-4 mb-5">
        Community Category
      </h1>
      <Row className="d-flex align-items-center">
      {category[0]?.community?.map((com,i) => (
         <Col sm={4}>
          <div key={i} className="mainCard2">
              <Link to={`/community/${com._id}?index=${i}`}>
              <Image src={`${imgArray[i]}`} className="CardCircleLogo" />
              </Link>
              <h3 className="cardTitle">{com.name}</h3>
            </div>
         </Col>
            
        ))}
      </Row>
    </Container>
  );
};

export default CommunityCategory;