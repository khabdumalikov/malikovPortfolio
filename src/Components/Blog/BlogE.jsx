import React from 'react'
import Datas from './Datas'
import blogImg from "../../portImg/blog.jpg"
import blogImg1 from "../../portImg/blog1.jpg"
import blogImg2 from "../../portImg/blog2.jpg"
import blogImg3 from "../../portImg/blog3.jpg"
import blogImg4 from "../../portImg/blog4.jpg"
import blogImg5 from "../../portImg/blog5.jpg"
import Title from 'react-vanilla-tilt'

const BlogE = () => {

  return (
    <div className='blok'>
      <div className="title text-center ">
        <h1 className='font-size: 56px color: #fff text-uppercase m-auto'>
          My
          <span className='bg-flex '>Blog</span>
        </h1>
        <span className='bg-title '>Posts</span>
      </div>
      <div className='container ' >
        <Title options={{ scale: 2, max: 25, reverse: true, glare: true, "glare-prerender": true }} className="Title">
          <Datas className="url" url={blogImg} data-aos="flip-up" />
        </Title>
        <Title options={{ scale: 2, max: 25, reverse: true, glare: true, "glare-prerender": true }} className="Title">
          <Datas className="url"  url={blogImg1} />
        </Title>
        <Title options={{ scale: 2, max: 25, reverse: true, glare: true, "glare-prerender": true }} className="Title">
          <Datas className="url"  url={blogImg2} /> </Title>
        <Title options={{ scale: 2, max: 25, reverse: true, glare: true, "glare-prerender": true }} className="Title">
          <Datas className="url"  url={blogImg3} /></Title> <Title options={{ scale: 2, max: 25, reverse: true, glare: true, "glare-prerender": true }} className="Title">
          <Datas className="url"  url={blogImg4} data-aos="zoom-in-left" /></Title>
        <Title options={{ scale: 2, max: 25, reverse: true, glare: true, "glare-prerender": true }} className="Title">
          <Datas className="url"  url={blogImg5} />
        </Title>
      </div>
    </div>
  )
}

export default BlogE