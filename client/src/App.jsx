

import { useState } from 'react';
import './App.css';
import AuthencatedApp from './AuthencatedApp';
import Unauthernticated from './Unauthernticated';

function App() {
  const [currentUser, setCurrentUser] = useState(false)
  return (
    <>
    {
      currentUser ? (
        <AuthencatedApp currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      ) : (
        <Unauthernticated setCurrentUser={setCurrentUser}/>
      )
    }
    </>
  )
}

export default App;