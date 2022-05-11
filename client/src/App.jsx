
import { useEffect, useState } from 'react';
import './App.css';
import AuthencatedApp from './AuthencatedApp';
import { CurrentUser } from './components/Context/AppContexts';
import Unauthernticated from './Unauthernticated';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
      console.log('fetch')
      fetch('/api/me')
        .then(res => {
          if (res.ok) {
            res.json().then(data => {
              setCurrentUser(data)
            })
          }
        })
  }, [])
  return (
    <CurrentUser.Provider value={{currentUser, setCurrentUser}}>
      {
        currentUser ? (
          <AuthencatedApp />
        ) : (
          <Unauthernticated />
        )
      } 
    </CurrentUser.Provider>
  )
}

export default App;