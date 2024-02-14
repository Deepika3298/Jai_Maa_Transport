import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/blogs'
import ReactHtmlParser from 'react-html-parser'

function Blog() {
    const { id } = useParams()
    const [blog, setBlog] = useState({})

    useEffect(() => {
        setBlog(data.find(a => a.title == id))
    }, [])

    return (
        <div className='container mt-5'>
            {blog &&
                <>
                    {/* <div className='text-muted text-lg-center mb-3'>Published {blog.date}</div> */}
                    <h1 className='text-lg-center fw-bold mb-5'>{blog.title}</h1>
                    <img className='w-100 mb-4' src={`/assets/${blog.image}`} alt='' />
                    <div className='blog_description'>{ReactHtmlParser(blog.desc)}</div>
                </>
            }
        </div>
    )
}

export default Blog