import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Header, Navigation } from "../../components";
const Public = () => {
    return (
        <Fragment>
            <Header />
            <Navigation />
            <Outlet />
        </Fragment>
    );
};

export default Public;
