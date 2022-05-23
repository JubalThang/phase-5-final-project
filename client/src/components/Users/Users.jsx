import { useContext } from "react"
import { UsersContext } from "../Context/AppContexts"


export default function Users() {
  const { users } = useContext(UsersContext)
  return (
    <div>
      {
        users ? (
            users.map(user => <h1>{user.email}</h1>)
          ) : (<div>No Users</div>)
      }
      </div>
  )
}
