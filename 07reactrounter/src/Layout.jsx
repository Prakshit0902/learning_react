import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";


function Layout(){
    return (
        <>
        <Header />

        {/* Outlet is used to dynamic changes of the elements present here above this the elements will be same below
        also the elements will be same but the outlet will differ */}
        <Outlet />

        <Footer />
        </>
    )
}

export default Layout