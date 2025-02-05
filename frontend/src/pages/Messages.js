import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import http from '../api';
import Banner from './../components/Banner';
export const Messages = () => {


    const user = JSON.parse(window.localStorage.getItem('user')) || null;

    const getMessage = () => {
        http.get('/v1/chat/message/'+id,).then(res => {
            setChats(res.data.messages);
        })
    }

    useEffect(() => {

        const interval =  setInterval(() => {
            getMessage();
        }, 3000);

        return () => clearInterval(interval);
    }, [])

    const {id} = useParams();
    const [message, setMessage] = React.useState("");
    const [chats, setChats] = React.useState([]);

    const sendMessage = () => {
        http.post('/v1/chat/message/'+id, {message}).then(res => {
            console.log(res.data);
            setMessage("");
        })
    }

  return (
    <div className="msg-cont">
        <Banner title={'Chat'}/>
        <div className="msg-box">
            {
                chats.map((chat, index) => {
                    return (
                        <>
                            {chat.by === user.id && <p className="chat-sender text-success">{chat.body}</p>}
                            {chat.by !== user.id && <p className="chat-reciever chat ml-2 p-3 text-danger">{chat.body}</p>}
                        </>
                    )
                })
            }
        </div>
            <div className="msg-input d-flex">
                <input type="text" value={message} className="form-control chat-input" placeholder="Type a message" onChange = {e => setMessage(e.target.value)}/>
                <button onClick={sendMessage} className="btn btn-primary">
                    <i class="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </div>
  )
}
