import { React } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useNavigation } from "react-router";

const MainOutlate = () => {
  const navigation = useNavigation();
  const isNavigation = Boolean(navigation.location);
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-230px)]">
        {isNavigation && <h1 className="text-8xl">Loading.......... </h1>}
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainOutlate;
