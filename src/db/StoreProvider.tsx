import React, {useState, useEffect} from 'react'
import { IUser, StoreContextType  } from './store'
import db from './db.json'

export const StoreContext = React.createContext<StoreContextType | null>(null)

export const StoreProvider = ({children}) => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        setUsers(checkUser())
    },[])

    const checkUser = () => {
        const usersStore =  localStorage.getItem("users")
        if(usersStore == null) {
            let x = db.users
            if(x != null)
            {
                localStorage.setItem("users",JSON.stringify(x))
            }
            return db.users
        } else {
            return JSON.parse(usersStore)
        }
    } 

    const addNewUser = (user: IUser) => {

        const newUser: IUser = {
            id: checkUser().pop().id + 1,
            name: user.name,
            email: user.email,
            password: user.password
        }
        
        setUsers([...users, newUser])
        localStorage.setItem("users", JSON.stringify([...checkUser(), newUser]))
    }

    const clear = () => {
        setUsers([])
        localStorage.removeItem("users")
    }

    return (
        <StoreContext.Provider value={{ addNewUser, users, clear }}>
            {children}
        </StoreContext.Provider>
    )
}
