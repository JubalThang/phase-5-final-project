import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { DeparmentsContext } from "./Context/AppContexts"
import DeptRow from "./DeptRow"

export default function Department() {
  const { departments } = useContext(DeparmentsContext)
  const navigator = useNavigate()
 
  console.log(departments)
  // useEffect(() => {
  //   if (departments === null) {
  //     navigator('/')
  //   }
  // },[departments, navigator])

  if (!departments) {return <div></div>}
  return (
    <div className="p-8">
      <div className=' flex mb-8 justify-between '>
        <h1 className=" font-bold text-2xl ">Departments </h1>
        <button className=" primary ">Add Department</button>
      </div>
      <div className='flex flex-wrap'>
        {
          departments.map(department => <DeptRow key={department.name} name={department.name} />)
        }
      </div>
    </div>
  )
}
