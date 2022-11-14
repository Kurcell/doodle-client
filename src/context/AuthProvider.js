import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState({user: null, authenticated: false, loading: true});

    useEffect(() => {
        axios.get('http://localhost:5000/verify',
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            })
            .then(res => {
                console.log(res)
                setSession({user: res.data.user, authenticated: res.data.auth, loading: false})
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    return (
        <AuthContext.Provider value={{ session, setSession }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;