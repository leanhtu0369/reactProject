import React, { useEffect, useState } from "react";

import axios from "axios";

import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { setUser } from "../redux/state/user";

const Home = () => {
  const [posts, setPosts] = useState([])
  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()

  const fetchPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_start=10&_limit=5')
      .then(response => {
        setPosts(response.data)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  const fetchPhotos = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_start=20&_limit=5')
      .then(response => {
        setPhotos(response.data)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  const logout = () => {
    dispatch(
      setUser(null)
    )
  }

  useEffect(() => {
    fetchPosts()
    fetchPhotos()
  }, [])

  return(
    <>
      <h1>Home page</h1>

      <button onClick={logout}>Logout</button>

      <h2>Danh sách bài viết nổi bật</h2>
      {
        isLoading && <p>Loading...</p>
      }

      {
        posts.map(post => (
          <div className="post-item" key={post.id}>
            <Link to={'/posts/' + post.id}>{post.title}</Link>
          </div>
        ))
      }

      <h2>Danh sách ảnh nổi bật</h2>

      {
        isLoading && <p>Loading...</p>
      }


      {
        photos.map(photo => (
          <div className="photo-item" key={photo.id}>
            <img src={photo.thumbnailUrl} alt=""/>
          </div>
        ))
      }
    </>
  )
}

export default Home
