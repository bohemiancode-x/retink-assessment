import React, {useState, useEffect} from 'react'
import HeroSection from './components/HeroSection';
import ToolsSection from './components/ToolsSection';
import Layout from './layout/Layout';

import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/firebaseConfig';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({})

  const SignUpUsingGoogle = () => {

    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        setUserData({ displayName, email, photoURL })

        setIsLoggedIn(true)
      }).catch((error) => {

        console.log({ error });

      });
  } 

  const Logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      setUserData({})
      setIsLoggedIn(false)
    }).catch((error) => {
      // An error happened.
      console.log({ error });
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      if (result) {

        const {displayName, email, photoURL} = result
        setUserData({ displayName, email, photoURL })

        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }

    })

    return () => unsubscribe();
  },[])


  return (
    <>
      {!isLoggedIn && 
            <div className="min-h-[50vh] flex flex-col">
                <button onClick={SignUpUsingGoogle} type="button" className="login-with-google-btn m-auto" >
                    Sign in with Google
                </button>
            </div>
        }
      {isLoggedIn && <div className="App">
        <Layout Logout={Logout} email={userData?.email} photoURL={userData?.photoURL}>
          <HeroSection name={userData?.displayName} email={userData?.email} />
          <ToolsSection />
        </Layout>
      </div>}
    </>
  );
}

export default App;
