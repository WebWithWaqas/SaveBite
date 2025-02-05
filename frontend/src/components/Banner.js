import React from 'react'

 const Banner = (props) => {
  return (
    <>
      <div className="food-banner col-12 d-flex justify-content-center align-items-center ">
          <h3 className="m-0">{props.title}</h3>
      </div>
    </>
  )
}
export default Banner;