import { Pagination } from "antd";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

const Posts = () => {
  const [listPost, setListPost] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [totalPage, setTotalPage] = useState(0)

  const totalRecords = 100

  const start = useMemo(() => {
    return (currentPage - 1) * pageSize
  }, [currentPage])

  const fetchData = () => {
    axios(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${pageSize}`)
      .then(response => {
        setListPost(response.data)
        const totalPages = Math.ceil(totalRecords / pageSize)
        setTotalPage(totalPages)
      })
  }

  const paginate = num => {
    setCurrentPage(num)
  }

  useEffect(() => {
    fetchData()
  }, [currentPage])

  const pagingNumber = useMemo(() => {
    const pagination = []

    for (let index = 1; index <= totalPage; index++) {
      pagination.push(
        <li 
          className={`page-item ${index === currentPage ? 'active' : ''}`}
          key={index}
          onClick={() => paginate(index)}
        >
          <span className="page-link">{index}</span>
        </li>
      )
    }

    return pagination
  }, [totalPage, currentPage])

  const goToPrev = () => {
    const newPage = Math.max(currentPage - 1, 1)
    setCurrentPage(newPage)
  }

  const goToNext = () => {
    const newPage = Math.min(currentPage + 1, totalPage)
    setCurrentPage(newPage)
  }

  useEffect(() => {
    fetchData()
  }, [])

  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

  return (
    <>
      <div className="container">
        <h1>List posts</h1>

        <ul className="list-group">
          {
            listPost.map(post => (
              <li 
                className="list-group-item" 
                key={post.id} 
              >
                [{post.id}] {post.title}
              </li>
              )
            )
          }
        </ul>

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item" onClick={goToPrev}><span className="page-link">Previous</span></li>
            {
              pagingNumber
            }
            <li className="page-item" onClick={goToNext}><span className="page-link">Next</span></li>
          </ul>
        </nav>

        <Pagination
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={currentPage}
          total={100}
        />
      </div>
    </>
  )
}

export default Posts
