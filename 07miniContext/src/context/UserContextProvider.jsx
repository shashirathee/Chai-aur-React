import React from "react";

import UserContextt from "./UserContextt";

const UserContextProvider =({children})=> {
    const[user,setUser] = React.useState(null)
    return(
        <UserContextt.Provider value={{user, setUser}}>
            {children}
        </UserContextt.Provider>
    )
}

export default UserContextProvider