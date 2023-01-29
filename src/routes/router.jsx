import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/pages/login/login";
import Home from "../components/pages/home/home";
import SignUp from "../components/pages/signup/signup";
import Community from "../components/pages/community/community";
import AdminDashboard from "../components/pages/dashboard/dashboard";


import { useState } from "react";

import Topbar from "../components/pages/dashboard/global/Topbar";


import Dashboard from "../components/pages/dashboard/dashboard";
import Team from "../components/pages/dashboard/team";
import Invoices from "../components/pages/dashboard/invoices";
import Contacts from "../components/pages/dashboard/contacts";
import Bar from "../components/pages/dashboard/bar";
import Form from "../components/pages/dashboard/form";
import Line from "../components/pages/dashboard/line";
import Pie from "../components/pages/dashboard/pie";
import FAQ from "../components/pages/dashboard/faq";
import Geography from "../components/pages/dashboard/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import Calendar from "../components/pages/dashboard/calendar/calendar";
import ContactManger from "../components/pages/contact-manger/contact-manger";
import CommunityCategory from "../components/pages/community-category/community-category";
import { CreateCommunityForm } from "../components/features/create-community/community-create";

const Router = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/community/:id" element={<Community />} />
              <Route path='/category/:id' element={<CommunityCategory/>}/>
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/contact" element={<ContactManger/>}/>
              <Route path="/create-community" element={<CreateCommunityForm/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Router;
