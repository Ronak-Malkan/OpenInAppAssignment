import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import { DeviceContext } from "../../context/device-width-context";
import HomeNavBar from "../../components/home-nav-bar/home-nav-bar";
import HomeDashboard from "../../components/home-dashboard/home-dashboard";

import "./home.css";

const Home = () => {
   const { user } = useContext(UserContext);
   const { isMobile } = useContext(DeviceContext);
   const navigate = useNavigate();
   const [showNavBar, setShowNavBar] = useState(true);

   useEffect(() => {
      if (!user) {
         navigate("/");
      }
   });

   useEffect(() => {
      if (isMobile) setShowNavBar(false);
   }, [isMobile]);

   return (
      <div className="home-page-container">
         {showNavBar && <HomeNavBar />}
         <HomeDashboard showNavBar={showNavBar} setShowNavBar={setShowNavBar} />
      </div>
   );
};

export default Home;
