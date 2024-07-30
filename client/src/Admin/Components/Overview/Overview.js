import React from 'react'
import "./Overview.css"
import NewPost from "../News/NewsPost"
import ProductPost from "../Product/ProductPost"

const Overview = () => {
  return (
    <div className="OverviewWrapper">
      <NewPost/>
      <ProductPost/>
    </div>
  )
}

export default Overview