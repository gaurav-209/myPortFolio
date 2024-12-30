import React from 'react'
import './Pagination.css'

const Pagination = (totalPosts, postPerPage) => {
let pages = []

for(let i = 1; Math.ceil(i<= totalPosts/postPerPage); i++){
    pages.push(i)
}

  return (
    <div className='page'>
        {
            pages.map((page, index) =>{
                return <button key={index}>{page}</button>
            })
        }
    </div>
  )
}

export default Pagination