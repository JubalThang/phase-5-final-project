import { useContext, useEffect, useState } from "react"

export default function Users() {
  const [users, setUsers] = useState(null) 

  useEffect(() => {
    fetch('/api/users')
    .then(res => {
      if (res.ok) {
        res.json().then(users => setUsers(users))
      } else {
        console.error('something went wrong!')
      }
    })
  },[])
  return (
    <div className=' p-4 '>
      {
        users ? (
            users.map(user => <h1 key={user.email}>{user.email}</h1>)
          ) : (<div>No Users</div>)
      }
      </div>
  )
}
