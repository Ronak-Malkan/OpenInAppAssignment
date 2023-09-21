import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user-context";

const Home = () => {
   const { user } = useContext(UserContext);
   const navigate = useNavigate();

   useEffect(() => {
      if (!user) {
         navigate("/");
      }
   });
   return <div></div>;
};

export default Home;
