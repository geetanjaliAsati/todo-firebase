import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "../Components/SigninPage";
import Profile from "../Components/ProfilePage";
import Home from "../Components/HomePage";
// import history from "./history";

function Navs() {
  return (
    // <Router history={history}>
    //   <Switch>
    //     <Route exact path="/">
    //       <SignIn />
    //     </Route>
    //     <Route path="/profile">
    //       <Profile />
    //     </Route>
    //     <Route path="/home">
    //       <Home />
    //     </Route>
    //   </Switch>
    // </Router>

    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/home"
            element={ <Home />}
          />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default Navs;
