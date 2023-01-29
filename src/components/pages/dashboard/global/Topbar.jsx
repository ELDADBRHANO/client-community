import "./Topbar.css";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Container className="mb-3 mt-3">
      <Row className="align-items-center">
        <Col sm={3} className="d-flex justify-content-start">
          <Link to={"/"}>
            <Image src="/images/pagelogo.png" className="navMainLogo" />
          </Link>
        </Col>
        <Col
          sm={6}
          className="navLinks d-flex justify-content-around align-items-center h4"
        >
          <Link to={"/"}>Home</Link>
          <Link to={"/community"} className="p-3">
            Community
          </Link>
          <Link to={"/dashboard"}>Dashboard</Link>
        </Col>
        <Col sm={3} className="d-flex justify-content-end">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <Link to={"/login"}>
              <PersonOutlinedIcon />
            </Link>
          </IconButton>
        </Col>
      </Row>
    </Container>
  );
};

export default Topbar;
