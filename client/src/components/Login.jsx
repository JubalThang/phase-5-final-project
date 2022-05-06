import { Link } from "react-router-dom"
import Appbar from "./Appbar"

export default function Login({ setCurrentUser }) {
    function handldeOnClick(e) {
        e.preventDefault()

       const data = {
           "email" : e.target.email.value,
           "password" : e.target.password.value
       }

       fetch('/api/login', { 
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
       .then(res => {
           if(res.ok){
               res.json().then(user => setCurrentUser(user))
           }
       })
    }
    return (
        <>
            <Appbar />
            <div className="w-2/3 m-auto">
                <h1 className=" text-center mt-8 font-bold text-2xl">Login with your account</h1>
                <form onSubmit={handldeOnClick}>
                    <input type="email" name="email" autoComplete="email" className=" block border focus:border-cyan-500 w-1/2 m-auto py-2 px-4  mt-8" placeholder="email address" required />
                    <input type="password" name="password" className=" block border focus:border-cyan-500 w-1/2 m-auto p-2 mt-8" placeholder="password" />
                    <input type="submit" className="block text-white font-bold text-2xl bg-cyan-500 hover:bg-cyan-100 cursor-pointer hover:text-gray-500 focus:border-cyan-500 w-1/2 m-auto p-2 mt-8 "></input>
                </form>
               <h1 className=" m-auto text-right mt-4 w-1/2 text-gray-600 hover:text-cyan-500 "><Link to='/signup'>Do not have an account?</Link></h1> 
            </div>

        </>
    )
}