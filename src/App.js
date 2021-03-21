import React from "react";
import "./style/index.scss";
import { DatePicker } from 'antd';


import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { router } from "./router";
import { Provider } from "react-redux";
import store from "./redux/store";

import BackgroundApp from "./components/BackgroundApp";

const App = () => {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Link to="/">Go to Home</Link>
        <Link to="/posts">Go to Posts</Link>
        <Link to="/login">Go to Login</Link>
        <Link to="/antd">Go to Antd</Link>

        <Switch>
          {/* <Route path="/" exact>
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/posts/:id">
            <PostDetail></PostDetail>
          </Route> */}

          {
            router.map((CurrentRoute, index) => (
              <Route 
                path={CurrentRoute.path}
                exact={CurrentRoute.exact}
                key={index}
              >
                {CurrentRoute.Component}
              </Route>
            ))
          }
        </Switch>

        <BackgroundApp />
      </BrowserRouter>      
    </Provider>
  )
}

export default App
