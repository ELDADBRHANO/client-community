import { Container, Row, Col, Image } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { categoriesContext } from "../../../contexts/categories";
import "./community-center.css";
let subId;
const CommunityCenter = ({ data }) => {
  const { categories, setCategories } = useContext(categoriesContext);
  const [searchParams] = useSearchParams();
  const index = searchParams.get("index");
  const [community, setCommunity] = useState(categories[0]?.community[index]);

  useEffect(() => {
    const key = `community${community?._id}-category${categories[0]._id}`;
    const item = JSON.parse(localStorage.getItem(key))
    if (item) {
      setCommunity(item);
    } else {
      localStorage.setItem(key, JSON.stringify(community));
    }
  }, []);
  // const findById = (id) => {
  //   // console.log(community);

  //   subId = community?.find((item) => item?._id === id);
  //   // console.log(subId);
  //   if (subId) {
  //     return subId;
  //   } else console.log("problem");
  // };
  // findById(data);

  return (
    <Container>
      <Col>
        <div className="d-flex align-items-center mb-3">
          <div className="mx-2 d-flex align-items-center">
            <Image
              src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png"
              className="postCardImg2"
            />
            <h6 className="mx-2">User Name</h6>
          </div>
          <button className="btn nextBtn">Upload activity</button>
        </div>
        <form action="/action_page.php">
          <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
        </form>
      </Col>
      {community?.users?.map((item) => (
        <Col className="mt-3 mb-2">
          <div className="postCard">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex">
                <Image src={item.pic} className="postCardImg" />
                <div className="mx-2">
                  <h6>{`${item.firstName} ${item.lastName}`}</h6>
                  <span className="">last time update 5min</span>
                </div>
              </div>

              <div>
                <button className="btnPostCard">
                  <i class="bi bi-three-dots-vertical"></i>
                </button>
              </div>
            </div>
            <div className="mt-3 TextPostCard">
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                suscipit aperiam quas corporis laudantium iure esse? Veritatis,
                ea. Quibusdam culpa vero consequatur sed facere dolorem. Maxime
                ratione cupiditate quod illum.
              </span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <div>
                <button className="btnPostCard mx-2">
                  <i class="bi bi-hand-thumbs-up-fill"></i>
                </button>
                <button className="btnPostCard">
                  <i class="bi bi-chat-dots"></i>
                </button>
              </div>
              <button className="btnPostCard">
                <i class="bi bi-eye"></i>
              </button>
            </div>
          </div>
        </Col>
      ))}

      <Col></Col>
    </Container>
  );
};

export default CommunityCenter;
