import React from 'react'
import { Auth } from './Auth'
import { Profile } from './Profile'

export const User = () => {
  const [user, setUser] = React.useState(
    JSON.parse(window.localStorage.getItem('user')) || null
  )
  return (
    <div className='main-container'>
      {user ? <Profile user={user} updateUser={setUser} /> : <Auth updateUser={setUser} />}
    </div>
  )
}
