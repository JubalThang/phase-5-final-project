import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DeparmentsContext, ItemsContext } from '../Context/AppContexts'
import Modal from '../modal/Modal'

export default function NewItemForm() {

    const {departments} = useContext(DeparmentsContext)
    const { items, setItems } = useContext(ItemsContext)

    const navigate = useNavigate()

    const[error, setError] = useState('')

    function handldeOnClick(e) {
        e.preventDefault()
        const body = {
            "item": {
                "model_no": e.target.model_no.value,
                "sn" : e.target.serial_no.value,
                "department_id" : e.target.department.value,
                "item_history_attributes" : {
                    "dop" : e.target.dop.value,
                    "price" : e.target.price.value,
                    "receive_img" : e.target.receive_img.value
                }
            }
        }
        fetch('/api/items', {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(body)
        })
        .then(res => {
            if (res.ok) {
                res.json().then(item => {
                    // console.log(item)
                    setItems([...items, item])
                    navigate('/')
                })
            }
            else {
                res.json().then(error => setError(error))
            }
        })
    }

    const marginTop = 'mt-8'

    // { depts.length === 0 ? setDepts(departments): <div>Error</div>}
    return (
        <div className=" p-8 ">
            <h1 className=" text-center font-bold text-3xl">Create A New Item</h1>
            <form onSubmit={(e) => handldeOnClick(e)}>
                <div className={marginTop}>
                    <label htmlFor="department" className=" block font-medium ">Select Department:</label>
                    {/* <input type="text" className=" mt-2 border w-full py-2 px-4" name='model_no' placeholder="Select department" required /> */}
                    <select name="department" className=" block mt-4" required>
                        <option></option>
                       { departments.map( dept => <option key={dept.id} value={dept.id}>{dept.name}</option>)}
                    </select>
                </div>
                <div className={marginTop}>
                    <label htmlFor="model_no" className=" font-medium ">Model No:</label>
                    <input type="text" className=" mt-2 border w-full py-2 px-4" name='model_no' placeholder="Model number" required />
                </div>
                <div className={marginTop}>
                    <label htmlFor="serial_no" className=" font-medium ">Serial No:</label>
                    <input type="text" name='serial_no' className=" mt-2 w-full border py-2 px-4 " placeholder="Serial No" required />
                </div>
                <div className={marginTop}>
                    <label htmlFor="dop" className=" font-medium ">Date of purshase</label>
                    <input type="date" name='dop' className=" w-full border mt-2 p-2" placeholder="date of purshase" required />
                </div>
                <div className={marginTop}>
                    <label htmlFor="price" className=" font-medium ">Price</label>
                    <input type="float" name='price' className=" w-full border focus:border-cyan-500 m-auto p-2" placeholder="price" required />
                </div>
                <div className={marginTop}>
                    <label htmlFor="receive_img" className=" font-medium ">Receive Imag link (optional)</label>
                    <input type="text" name='receive_img' className=" w-full border focus:border-cyan-500 m-auto p-2" placeholder="receive image link" />
                </div>
                <input type="submit" value="Create!" className=" shadow text-white font-bold text-2xl bg-cyan-500 hover:bg-cyan-100 cursor-pointer hover:text-gray-500 focus:border-cyan-500 w-full p-2 mt-8 "></input>
            </form>
           {error && <Modal error={error} />}
        </div>
    )
}
