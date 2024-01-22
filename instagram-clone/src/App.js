import { useEffect } from 'react';
import './App.css';
import Homepage from './Homepage';
import Authentification from './components/authentification/Authentification';
import { loginUser, setLoading } from "./features/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { auth } from './firebase';


function App() {

  const user = useSelector(state => state.data.user.user)
  const isLoading = useSelector((state) => state.data.user.isLoading);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(loginUser({
          uid: authUser.uid,
          username: authUser.displayName,
          email: authUser.email,
        }))
        dispatch(setLoading(false))
      }
      else {
        console.log("user not logged in")
      }
    })
  }, [])

  return (
    <div className="app">
      {isLoading ? (
        <div class="loader-container">
          <div class="loader"></div>
        </div>
      ) : (
        <>{user ? <Homepage /> : <Authentification />}</>
      )}
    </div>
  );
}

export default App;
