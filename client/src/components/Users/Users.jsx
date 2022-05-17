import { useContext } from "react"
import { UsersContext } from "../Context/AppContexts"


export default function Users() {
  const { users } = useContext(UsersContext)
  return (
    <div>
      {
        users ? <div>{users.length}</div> : <div>No Users</div>
      }
      </div>
  )
}
