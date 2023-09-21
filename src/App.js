import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/sign-in/sign-in";
import Home from "./routes/home/home";

function App() {
   return (
      <Routes>
         <Route path="/" element={<SignIn />} />
         <Route path="/home" element={<Home />} />
      </Routes>
   );
}

export default App;
