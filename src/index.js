import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserContextProvider } from "./context/user-context";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <GoogleOAuthProvider clientId="404176567594-6rula9b9euohi7vv2nrpo5dp7u2h1duh.apps.googleusercontent.com">
         <BrowserRouter>
            <UserContextProvider>
               <App />
            </UserContextProvider>
         </BrowserRouter>
      </GoogleOAuthProvider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
