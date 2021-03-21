import BasicAuth from "./auth/BasicAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";

export const router = [
  {  
    path: '/login',
    exact: false,
    Component: <Login />
  },

  {  
    path: '/',
    exact: true,
    Component: <BasicAuth Component={Home} routeName="Home" />
  },

  {  
    path: '/posts',
    exact: true,
    Component: <BasicAuth Component={Posts} routeName="Posts"/>
  },

  {  
    path: '/posts/:id',
    exact: true,
    Component: <BasicAuth Component={PostDetail} routeName="PostDetail"/>
  }
]
