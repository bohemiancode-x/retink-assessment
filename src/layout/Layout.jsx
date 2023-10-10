import React from 'react'
import Sidenav from './Sidenav'
import Navbar from './Navbar'


const Layout = ({Logout, photoURL, email, children}) => {
    

  return (
   <div className='container w-full font-raleway relative flex'>
            <Sidenav Logout={Logout} />
            <div className='relative max-w-full lg:max-w-[90%] 2xl:max-w-[95%]'>
                <Navbar Logout={Logout} email={email} photoURL={photoURL} />
                {children}
            </div>
    </div>
  )
}

export default Layout