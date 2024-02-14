import React, { useEffect, useState } from 'react'
import data from '../data/blogs'
import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'

function Blogs() {

    const [recentBlogs, setRecentBlogs] = useState([])

    useEffect(() => {
        setRecentBlogs(data.slice(-3).reverse())
    }, [])

    return (
        <div className='container mt-5'>
            <div className='text_primary text-lg-center mb-3'>Our blog</div>
            <h1 className='text-lg-center fw-bold mb-5'>Resources & Insights</h1>

            {/* Blogs listing */}
            {/* Recent blog posts */}
            <div>
                <h4 className='fw-bold mb-5' >Recent blog posts</h4>
                {recentBlogs.length !== 0 &&
                    <div className='row'>
                        <div className='col-lg-6 mb-5 mb-lg-0'>
                            <img className='w-100 mb-4 img_cover' src={`./assets/${recentBlogs[0].image}`} alt='' />
                            {/* <p className='text_muted_dark fw-bold fs_14 mb-3'>{recentBlogs[0].name} • {recentBlogs[0].date}</p> */}
                            <h4 className='fw-bold mb-3'>{recentBlogs[0].title}</h4>
                            <p className='text-muted mb-3'>
                                {ReactHtmlParser(recentBlogs[0].desc.length > 85 ? recentBlogs[0].desc.slice(0, 85) + '...' : recentBlogs[0].desc)}
                            </p>
                            <Link to={`/blog/${recentBlogs[0].title}`} className='dec_none text_muted_dark fw-bold fs_14 mb-0'>
                                Read full blog <i class="bi bi-arrow-right-circle-fill"></i>
                            </Link>
                        </div>
                        <div className='col-lg-6'>
                            <div className='row mb-5'>
                                <img className='col-lg-6 mb-4 mb-lg-0 img_cover' src={`./assets/${recentBlogs[1].image}`} alt='' />
                                <div className='col-lg-6'>
                                    {/* <p className='text_muted_dark fw-bold fs_14 mb-3'>{recentBlogs[1].name} • {recentBlogs[1].date}</p> */}
                                    <h5 className='fw-bold mb-3'>{recentBlogs[1].title}</h5>
                                    <p className='text-muted mb-3'>
                                        {ReactHtmlParser(recentBlogs[1].desc.length > 85 ? recentBlogs[1].desc.slice(0, 85) + '...' : recentBlogs[1].desc)}
                                    </p>
                                    <Link to={`/blog/${recentBlogs[1].title}`} className='dec_none text_muted_dark fw-bold fs_14 mb-0'>
                                        Read full blog <i class="bi bi-arrow-right-circle-fill"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className='row'>
                                <img className='col-lg-6 mb-4 mb-lg-0 img_cover' src={`./assets/${recentBlogs[2].image}`} alt='' />
                                <div className='col-lg-6'>
                                    {/* <p className='text_muted_dark fw-bold fs_14 mb-3'>{recentBlogs[2].name} • {recentBlogs[2].date}</p> */}
                                    <h5 className='fw-bold mb-3'>{recentBlogs[2].title}</h5>
                                    <p className='text-muted mb-3'>
                                        {ReactHtmlParser(recentBlogs[2].desc.length > 85 ? recentBlogs[2].desc.slice(0, 85) + '...' : recentBlogs[2].desc)}
                                    </p>
                                    <Link to={`/blog/${recentBlogs[2].title}`} className='dec_none text_muted_dark fw-bold fs_14 mb-0'>
                                        Read full blog <i class="bi bi-arrow-right-circle-fill"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

            {/* All blog posts */}
            <div className='mt-5'>
                <h4 className='fw-bold mb-5' >All blog posts</h4>
                <div className='row'>
                    {data?.map(el => (
                        <div className='col-lg-4 mb-5'>
                            <img className='w-100 mb-4 img_cover' src={`./assets/${el.image}`} alt='' />
                            {/* <p className='text_muted_dark fw-bold fs_14 mb-3'>{el.name} • {el.date}</p> */}
                            <h4 className='fw-bold mb-3'>{el.title}</h4>
                            <p className='text-muted mb-3'>
                                {ReactHtmlParser(el.desc.length > 85 ? el.desc.slice(0, 85) + '...' : el.desc)}
                            </p>
                            <Link to={`/blog/${el.title}`} className='dec_none text_muted_dark fw-bold fs_14'>
                                Read full blog <i class="bi bi-arrow-right-circle-fill"></i>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blogs