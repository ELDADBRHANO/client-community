import "./community-navbar.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { categoriesContext } from "../../../contexts/categories";
import { useSearchParams, useParams } from "react-router-dom";
// let community;
const CommunityNavbar = ({ data }) => {
  const { categories, setCategories } = useContext(categoriesContext);

  const [searchParams] = useSearchParams();
  const index = searchParams.get("index");
  const [community, setCommunity] = useState(categories[0]?.community[index]);

  useEffect(() => {
    const key = `community${community?._id}-category${categories[0]._id}`;
    const item = JSON.parse(localStorage.getItem(key));
    console.log('>>>>>>>>>>>>>>>',item)
    if (item) {
      setCommunity(item);
    } else {
      localStorage.setItem(key, JSON.stringify(community));
    }
  }, []);
  // const findById = (id) => {
  // console.log(categories);

  //    community = community?.find(item=>item?._id === id)
  //   console.log(community);
  //   if(community){
  //     return community
  //   }else console.log('problem');
  // };
  // findById(data)
  console.log(community);

  console.log(community?.communityDescription);
  return (
    <Container>
      <div className="backgroundImg">
        <Image src={community.img} className="CommunityBackgroundImg" />
      </div>
      <div className="listCommunity">
        <ul className="mt-2">
          <li>
            <a className="btn" href="/contact">
              Content
            </a>
          </li>
          <li>
            <a className="btn" href="/contact">
              Content
            </a>
          </li>
          <li>
            <a className="btn" href="/contact">
              Content
            </a>
          </li>
          <li>
            <a className="btn" href="/contact">
              Content
            </a>
          </li>
        </ul>
      </div>
      <div className="communityTitle">
        <div className="mt-4">
          <h1>{community?.name}</h1>
          <h6>{community?.communityDescription}</h6>
        </div>
        <button className="btnJoin">Join</button>
      </div>
    </Container>
  );
};

export default CommunityNavbar;
