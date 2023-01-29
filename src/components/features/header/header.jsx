import React from "react";
import { Container } from "react-bootstrap";
import Topbar from "../../pages/dashboard/global/Topbar";
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import NavbarHeader from "../navbar/navbar";
import "./header.css";
import { ColorModeContext, useMode } from "../../../theme";
const Header = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Container className="header">
          {/* <NavbarHeader/> */}
          {/* <Topbar  setIsSidebar={setIsSidebar}/> */}
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Header;
