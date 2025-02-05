import React from 'react'
import { Link } from 'react-router-dom'

export const BottomBar = () => {
  return (
    <>
      <div className="bottom-bar">
          <div className="menu mx-4">
            <Link to="/"><i class="fa-solid fa-bowl-food"></i></Link>
          </div>
          <div className="menu mx-4">
            <Link to="/pools"><i class="fa-solid fa-rectangle-list"></i></Link>
          </div>
          <div className="menu mx-4">
            <Link to="/map"><i class="fa-solid fa-map"></i></Link>
          </div>
          <div className="menu mx-4">
            <Link to="/chat"><i class="fa-solid fa-comment-dots"></i></Link>
          </div>
          <div className="menu mx-4">
            <Link to="/user"><i class="fa-solid fa-user"></i></Link>
          </div>
      </div>
    </>
  )
}
