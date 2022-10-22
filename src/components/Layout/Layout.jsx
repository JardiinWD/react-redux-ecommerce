import React, { Fragment } from "react";
// My components' import
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

const Layout = () => {
   return (
      <Fragment>
         {/* Header Component */}
         <Header />
         {/* Routers Component */}
         <Fragment>
            <Routers />
         </Fragment>
         {/* Footer Component */}
         <Footer />
      </Fragment>
   );
};

export default Layout;
