import React from 'react'
import { Link } from 'react-router-dom';


export const Profile = ({user, updateUser}) => {

  const logout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    updateUser(null);
  }

  return (
    <div className="container-fluid profile text-center">
      <div className="row">
        <div className="col-12 d-flex justify-content-center mt-4">
          {/* <img src="food.jpg" className="" /> */}
          <div className="profile-pic d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-user user-pic"></i>
          </div>
        </div>
        <div className="container-fluid p-0">
        <div className="row d-flex m-3">
              <div className="col-9 d-flex justify-content-start">
                <h1 className="mt-2">{user.name}</h1>
              </div>
              <div className="col-3 d-flex justify-content-center">
                  {/* <button className='btn btn primary'>
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button> */}
                </div>
            </div>
            <div className="row d-flex m-3">
              <div className="col-9">
              <div className="col-12 d-flex justify-content-start">
                <b>Phone:</b>
                </div>
              <div className="col-12 d-flex justify-content-start">
                {user.phone}<br/>
                </div>
                </div>
                <div className="col-3 d-flex justify-content-center">
                  {/* <button className='btn btn primary'>
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button> */}
                </div>
            </div>
            <div className="row d-flex m-3">
              <div className="col-9">
              <div className="col-12 d-flex justify-content-start">
                <b>Email:</b>
                </div>
              <div className="col-12 d-flex justify-content-start">
                {user.email}<br/>
                </div>
                </div>
                <div className="col-3 d-flex justify-content-center">
                  {/* <button className='btn btn primary'>
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button> */}
                </div>
            </div>
        </div>
        <div className="col-12 mt-4">
            <div className="my-post-div"> 
            <Link to={"/mycharity/"} >{
              <div className="my-post">
                <h4>My Charity</h4>
              </div>
              }
            </Link>
            </div>
        </div><div className="col-12 mt-4">
            <div className="my-post-div"> 
            <Link to={"/mypost/"} >{
              <div className="my-post">
                <h4>My Post</h4>
              </div>
              }
            </Link>
              
            </div>
        </div>
        <div className="col-12 logout">
          <button className = "btn btn-danger" onClick={logout}>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
      </div>
    </div>
  )
} 
