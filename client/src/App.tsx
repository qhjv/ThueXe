import logo from './logo.svg';
import {useState,useEffect} from 'react';
import './App.css';
import SignIn from './components/auth/signin';
import Dashboard from './features/dashboard';


function App() {
  const [user, setUser] = useState<any | null>(null);
    const userState=()=>{
        const data= localStorage.getItem('adminGara');
        const us = data !== null ? JSON.parse(data):null
        setUser(us)
      }
    useEffect(() => {
        userState()
    }, [])
  return (
    <div className="App">
      {!user? (
        <SignIn loggedIn={(user)=> setUser(user)}/>
      ):(
        <Dashboard setUserState={()=>setUser(null)}/>
        // <Router></Router>
      )}
    </div>
  );
}

export default App;
