import React, { useEffect } from 'react'
import http from '../api'

export const MyCharity = () => {

  const [polls, setPolls] = React.useState([])
  const user = JSON.parse(window.localStorage.getItem('user')) || null;
  const [poll, setPoll] = React.useState({})

  useEffect(() => {
    getAll();
  }, [])
  
  const getAll = () => {
    
    http.get('v1/charity-pool/my').then(res => {
      setPolls(res.data.charityPools);
    })
  }

  // const createPoll = () => {
  //   let body = {
  //     ...poll,
  //     bankAccount: "62ee74dda99aee8e3c8c59e9"
  //   }

  //   http.post("/v1/charity-pool/", body).then(res => {
  //     getAll();
  //   })
  // }

  // const chat = (id) => {
  //   http.post('/v1/chat', {user1: id}).then(res => {
  //     console.log(res.data);
  //   });
  // }

  return (
    <div className="main-container">
      {console.log('apple zohaib')}
      <div className="row charity-row">
        {
          polls.map((poll, index) => {
            return(
                <div id='foodDiv' className="col-12 p-4">
                <div className='card mb-3 p-4'>
                    <img src='Food.jpg' className="pool-img" height="150" />
                      {/* <img src="food.jpg" className="pool-img" height="100"/> */}
                    <div class="card-body">
                    
                    <div className="row justify-content-center">
                      <div class="col-4 text-center "><h5>{poll?.moneyRequired} PKR</h5></div>
                    </div>
                    <div className="row">
                      <h5>Description: </h5>
                    </div>
                    <div className="row justify-content-end">
                      <div className="col-12 description">
                      <p className="card-text">
                        <span style={{color:'#ccc'}}>{poll?.description}</span>
                      </p>
                      </div>
                    </div>
                    
                  
                      {/* <h5 class="card-title">{poll?.moneyRequired} PKR</h5>
                      <h6>User Details: </h6>
                      <p class="card-text">Name: {poll?.user?.name} <br/>
                        Email: {poll?.user?.email} <br />
                        Phone: {poll?.user?.phone}</p>
                          <h6>Description: </h6>
                      <p class="card-text">
                        {poll?.description}
                      </p> */}
                      {/* <button className = "btn btn-primary" onClick = {() => chat(poll?.user?._id)}>Start Chat</button> */}
                    </div>
                    <div className="row ">
                      <div className='col-4 text-left h6'>
                        {poll?.user?.name}
                      </div>
                      <div className='col-4 text-center h6'>
                        {poll?.user?.email}
                      </div>
                      <div className='col-4 text-right h6'>
                        {poll?.user?.phone}
                      </div>
                    </div>
                  </div>
                
                    {/* <div class="card-body">
                      <h5 class="card-title">{poll?.moneyRequired} PKR</h5>
                      <h6>User Details: </h6>
                      <p class="card-text">Name: {poll?.user?.name} <br/>
                        Email: {poll?.user?.email} <br />
                        Phone: {poll?.user?.phone}</p>
                          <h6>Description: </h6>
                      <p class="card-text">
                        {poll?.description}
                      </p>
                    </div> */}
                  
                </div>
            )
          })
        }
      </div>


      <div class="modal fade" id="newModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                New Poll
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input type="text" class="form-control" placeholder="Enter Name" onChange={(e) => setPoll({...poll, name: e.target.value})} />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Money Required
                </label>
                <input type="text" class="form-control" placeholder="Enter Money Required" onChange={(e) => setPoll({...poll, moneyRequired: e.target.value})} />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                Description
                </label>
                <textarea
                onChange={(e) => setPoll({...poll, description: e.target.value})}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                />
            </div>
            </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              {/* <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick = {createPoll}>Save</button> */}
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
