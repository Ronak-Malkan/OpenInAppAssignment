import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/sign-in/sign-in";
import Home from "./routes/home/home";
import { useEffect } from "react";

function App() {
   useEffect(() => {
      console.log(window.innerHeight, window.innerWidth);
   });
   return (
      <Routes>
         <Route path="/" element={<SignIn />} />
         <Route path="/home" element={<Home />} />
      </Routes>
   );
}

export default App;
