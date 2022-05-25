import { useContext } from "react"
import { Link } from "react-router-dom"
import { CurrentUser, DeparmentsContext } from "./Context/AppContexts"
import DeptRow from "./DeptRow"

export default function Department() {
  const { departments } = useContext(DeparmentsContext)
  const {currentUser} = useContext(CurrentUser)
 
  // console.log(departments)
 
  if (!departments) {return <div></div>}
  return (
    <div className="p-8">
      <div className=' flex mb-8 justify-between '>
        <h1 className=" font-bold text-2xl ">Departments </h1>
         { currentUser.admin && <Link to='/create_new_department'><div className=" primary hover:bg-white hover:text-gray-800 ">Add Department</div></Link> }
      </div>
      <div className='flex flex-wrap h-20 '>
        {
          departments.map(department => <DeptRow key={department.name} name={department.name} count={department.items.length} id={department.id}/>)
        }
      </div>
    </div>
  )
}
