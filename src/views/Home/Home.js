import React, { useContext } from 'react'
import AuthContext from '../../context/AuthProvider';


const Home = () => {
    const { session } = useContext(AuthContext)
    return (
        <div>
            {session.loading ?
                <>
                    Loading feed...
                </>
                :
                <>
                    This is {session.authenticated ? session.user.screenname + "'s" : 'a'} feed.
                </>
            }
        </div>
    )
}

export default Home;