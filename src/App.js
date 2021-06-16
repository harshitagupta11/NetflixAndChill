import React, { useEffect } from 'react';
import HomeScreen from './HomeScreen/HomeScreen';
import Login from './LoginScreen/Login'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import { auth } from './config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import {login,logout, selectUser} from './features/counter/userSlice'
import ProfileScreen from './ProfileScreen/ProfileScreen';
function App() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unSubscribe=auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        //logged in
        //console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        })
        )
      }
      else{
        //logged out
        dispatch(logout());
      }
    })
    return unSubscribe;
  },[dispatch])
  return (
    <div className="App">
      <Router>
        {!user?
        <Login/>:
        <Switch>
          <Route path='/profile'>
            <ProfileScreen /> 
          </Route>
        <Route exact path='/'>
          <HomeScreen />
          
        </Route>
      </Switch>
        }
        
      </Router>
      
    </div>
  );
}

export default App;
