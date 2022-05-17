import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { DeparmentsContext } from "../Context/AppContexts"


export default function NewDepartmentForm() {
    const navigator = useNavigate()
    const {departments,setDepartment} = useContext(DeparmentsContext)

    function handldeOnClick(e) {
        e.preventDefault()
        const body = {
            "department": {
                "name": e.target.department.value
            }
        }

        fetch('/api/departments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(dep => setDepartment(...departments, dep))
                navigator('/')
            } else {
                res.json().then(error => console.log(error))
            }
        })
    }
    return (
        <div className=" p-8  ">
            <h1 className=" text-center font-bold text-3xl">Create New Department</h1>
            <form onSubmit={(e) => handldeOnClick(e)}>
                <div className='mt-8'>
                    <label htmlFor="department" className=" font-medium ">Enter name of the Department </label>
                    <input type="text" name='department' className=" w-full border mt-2 p-2" placeholder="department name" required />
                </div>
                <input type="submit" className=" rounded shadow text-white font-bold text-2xl bg-cyan-500 hover:bg-cyan-100 cursor-pointer hover:text-gray-500 focus:border-cyan-500 w-full p-2 mt-8 "></input>
            </form>
        </div>
    )
}
