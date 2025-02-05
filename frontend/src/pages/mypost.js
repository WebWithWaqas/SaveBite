import React, { useEffect, useState } from 'react'
import http from '../api';
import Image from './food.jpg';
export const MyPost = () => {
  
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});
  const [food, setFood] = useState({});
  const [displayMode, setDisplayMode] = useState('col-md-4 col-6 p-3');

  const user = JSON.parse(window.localStorage.getItem('user')) || null;

  useEffect(() => {
    getAllPosts();
  }, [])

  const getAllPosts = () => {
    navigator.geolocation.getCurrentPosition( p => {
      console.log(p);
      http.get(`/v1/posts/myposts`).then(res => {
        console.log('get running',res)
        setPosts(res.data.posts.reverse());
      })
      console.log(posts);
    })
  }


  const create = () => {
    let post = {...food}
    navigator.geolocation.getCurrentPosition( p => {
      post.location = {
        latitude: p.coords.latitude,
        longitude: p.coords.longitude,
        city: "lahore",
        country: "pakistan",
        postalCode: "54000"
      }

      console.log(post);

      http.post('/v1/posts', post).then(res => {
          getAllPosts();
      }).catch(err => {
          alert("Something went wrong");
      })
    })
  }

  //Food list view changing
  function foodview1(){
      console.log('foodlist function');
      let temp = document.getElementById('foodDiv');
      temp.classList.add('col-md-4');
  }

  return (
    <div className="main-container">
      {/* <div className='p-3'>
        <a className='btn btn-primary m-3' onClick = {() => setDisplayMode("col-md-4 col-12 p-3")}><i class="fa-solid fa-list"></i></a>
        <a className='btn btn-primary m-3' onClick = {() => setDisplayMode("col-md-4 col-6 p-3")}><i class="fa-solid fa-grip-vertical"></i></a>
      </div> */}
      <div className="row">
        {
          posts.map((p, index) => {
            return (
              // <div id='foodDiv' className={displayMode}>
              <div id='foodDiv' className="col-12 p-4">
                <div class="card mb-3 p-4">
                  <div className="pool-img">
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">{p?.itemType}</h5>
                    <p class="card-text text-wrap h-25">
                      {p.itemDescription.substring(0, 50)}
                    </p>
                    <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailsModal"
                      onClick={() => setSelectedPost(p)}
                    >Details</a>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>


      <div class="modal fade" id="detailsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {selectedPost?.itemType}
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src = {Image} className = "img-fluid mb-3" />
              {selectedPost?.itemDescription}
              <h5 className="mt-3">User Details:</h5>
              <p>
                <b>Name: </b> {selectedPost?.user?.name} <br/>
                <b>Phone: </b> {selectedPost?.user?.phone} <br/>
                <b>Email: </b> {selectedPost?.user?.email} <br/>
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
        </div>

        <div class="modal fade" id="newModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                New Post
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                Item Type
                </label>
                <select class="form-select" aria-label="Default select example" onChange={(e)=> setFood({...food, itemType: e.target.value})}>
                <option selected>Select One</option>
                <option value="food">Food</option>
                <option value="cloths">Cloths</option>
                <option value="others">Others</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                Description
                </label>
                <textarea
                onChange={(e)=> setFood({...food, itemDescription: e.target.value})}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                />
            </div>
            </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              {/* <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={create}>Save</button> */}
            </div>
          </div>
        </div>
        </div>

        {user && <div className = "addBtn" data-bs-toggle="modal" data-bs-target="#newModal">
          <i class="fa-solid fa-circle-plus"></i>
        </div>}

    </div>
  )
}
