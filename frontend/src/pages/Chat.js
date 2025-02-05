import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import http from '../api'

export const Chat= () => {

  const [chats, setChats] = React.useState([])
  const user = JSON.parse(window.localStorage.getItem('user')) || null;

  useEffect(() => {
    http.get('/v1/chat/get/all').then(res => {
      setChats(res.data);
    })
  }, [])
  const handleDelete = (id) =>{
    http.post(`/v1/chat/delete/${id}`).then(res => {
      console.log('response', res)
      const newfilteredChat = chats.filter((resChat)=>{
        if(resChat._id === id){
          return false
        }else{
          return true
        }
      })
      setChats(newfilteredChat);
    })
  }
  return (
    <div className="main-container">
        {
          chats.map((chat, index) => {
            return(
              <>
              { chat?.user1._id !== user.id &&  <div className="row d-flex chat-box">
              
              <div className="col-9 d-flex p-0">
                  <div className="col-4">
                    <img src="food.jpg" className="col-4 chat-profile"/>
                  </div>
                  <div className="col-8 p-1">
                    <h5 className="col-12">
                    <Link to={"/messages/"+chat._id}>{chat?.user1?.name}</Link>
                    </h5>
                    <h6 className='col-12'>
                    <Link to={"/messages/"+chat._id}>{chat?.user1?.email}</Link>
                    </h6>
                  </div>
                </div>
                <div className="col-3">
                    <button 
                      className="btn btn-primary" 
                      onClick={()=>handleDelete(chat._id)}>
                      <i class="fa-solid fa-delete-left"></i>
                    </button>
                </div>
                </div>}
              { chat?.user2._id !== user.id &&  <div className="row d-flex chat-box">
              
              <div className="col-9 d-flex p-0">   
                  <div className="col-4">
                    <img src="food.jpg" className="col-4 chat-profile"/>
                  </div>
                  <div className="col-8 p-1">
                    <h5 className="col-12">
                    <Link to={"/messages/"+chat._id}>{chat?.user2?.name}</Link>
                    </h5>
                    <h6 className='col-12'>
                    <Link to={"/messages/"+chat._id}>{chat?.user2?.email}</Link>
                    </h6>
                  </div>
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={()=>handleDelete(chat._id)}>
                      <i class="fa-solid fa-delete-left"></i>
                      </button>
                </div>
                </div>}
              </>
            )
          })
        }
    </div>
  )
}
