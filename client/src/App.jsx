

import { useEffect, useState } from 'react';
import './App.css';
import AuthencatedApp from './AuthencatedApp';
import Unauthernticated from './Unauthernticated';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch('/api/me')
    .then(res => {
      if(res.ok) {
        res.json().then(data => setCurrentUser(data))
      }
    })
  },[])

  return (
    <>
      {
        currentUser ? (
          <AuthencatedApp currentUser={currentUser} setCurrentUser={setCurrentUser} />
        ) : (
          <Unauthernticated setCurrentUser={setCurrentUser} />
        )
      }
    </>
  )
}

export default App;