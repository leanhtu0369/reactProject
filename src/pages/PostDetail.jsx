import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const PostDetail = () => {
  const [post, setPost] = useState(null)
  const { id } = useParams()

  const fetchPost = id => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        setPost(response.data)
      })
  }

  useEffect(() => {
    fetchPost(id)
  }, [])

  return(
    <>
      {
        post && <h2>{post.title}</h2> 
      }
    </>
  )
}

export default PostDetail
