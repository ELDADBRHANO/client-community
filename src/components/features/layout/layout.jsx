import React from "react";
import Router from "../../../routes/router";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = () => {
    return (
        <>
        {/* <Header/> */}
        <Router/>
        <Footer/>
        </>
    )
}

export default Layout;