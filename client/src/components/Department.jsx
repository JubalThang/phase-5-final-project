import { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { DeparmentsContext } from "./Context/AppContexts"
import DeptRow from "./DeptRow"

export default function Department() {
  const { departments } = useContext(DeparmentsContext)
  const navigator = useNavigate()
 
  console.log(departments)
 
  if (!departments) {return <div></div>}
  return (
    <div className="p-8">
      <div className=' flex mb-8 justify-between '>
        <h1 className=" font-bold text-2xl ">Departments </h1>
        <Link to='/create_new_department'><div className=" primary hover:bg-white hover:text-gray-800 ">Add Department</div></Link>
      </div>
      <div className='flex flex-wrap'>
        {
          departments.map(department => <DeptRow key={department.name} name={department.name} count={department.items.length}/>)
        }
      </div>
    </div>
  )
}
