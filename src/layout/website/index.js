import React from "react";
import { Outlet} from "react-router";

import Header from "./component/header";
import Footer from "./component/footer";




const Website = () => {
    return (
    <div className="page-holder">
                <Header/>
                <Outlet/>
                <Footer />
    </div>
    )
}
export default Website