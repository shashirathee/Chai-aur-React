import React from 'react'
import UserContextt from '../context/UserContextt'
import { useContext } from 'react'
export function Profile(props) {
    
    const {user}= useContext(UserContextt)
    if (!user) return <div>please login</div>
        return <div>Welcome {user.username} </div>
}
