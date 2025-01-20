import React, {useState, useEffect} from 'react'
import { CookieContextType, IToken } from './cookie'

export const CookieContext = React.createContext<CookieContextType |  null>(null);

export const CookieProvider = ({ children }) => {
    const [ token, setToken ] = useState<IToken | null>(null)


    useEffect(() => {
        let token = checkToken()
        if(token){
            if(getName(token.email)) {
                setToken(token)
            }  
        }
    },[])

    const setCookie = (cname: string, cvalue: string, exdays: number) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }


    const checkToken = () => {
        const tokenStore =  localStorage.getItem("token")
        if(tokenStore != null) {
            return JSON.parse(tokenStore)
        }
        return null;
    }

    const updateUser = (token: IToken) => {
        setToken(token)
        setCookie(token.email, token.hash, 1)
        localStorage.setItem("token", JSON.stringify(token))
    }

    const getName = (cname: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${cname}=`);
        if (parts.length === 2) {
            return parts.pop()!.split(';').shift() ;
        } 

        return null
    }

    const clear = () => {
        setToken(null)
        document.cookie.split(';').forEach(cookie => {
            const eqPos = cookie.indexOf('=');
            const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
        });
    }

    return (
        <CookieContext.Provider value={{token, updateUser, clear, getName}}>
            {children}
        </CookieContext.Provider>
    )

}