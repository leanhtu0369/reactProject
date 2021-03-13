import React from "react";
import "./scss/index.scss";
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from "./pages/Login";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Link to="/">Go to Home</Link>
        <Link to="/login">Go to Login</Link>

        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/posts/:id">
            <PostDetail></PostDetail>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
