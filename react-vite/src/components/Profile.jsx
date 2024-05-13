import React, {useContext} from 'react'
import UserContext from '../context/createContext'

function Profile() {
   
    const {user} = useContext(UserContext)
    if (!user) return <div>please login</div>

    return <div>Profile
         Welcome {name} {user.username}</div>
}

export default Profile