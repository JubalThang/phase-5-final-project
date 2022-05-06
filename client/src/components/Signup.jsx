
import { useNavigate } from 'react-router-dom'
import Appbar from './Appbar'

export default function Signup({setCurrentUser}) {
    const navigate = useNavigate()

    function handldeOnClick(e) {
        e.preventDefault()
        console.log(e.target.email.value)
        console.log(e.target.password.value)
        console.log(e.target.confirmPassword.value)

        navigate('/')
    }
  return (
    <>
    <Appbar />
    <div className="w-2/3 m-auto">
        <h1 className=" text-center mt-8 font-bold text-2xl">Login with your account</h1>
        <form onSubmit={(e) => handldeOnClick(e)}>
            <input type="email" autoComplete="email" name='email' className=" block border focus:border-cyan-500 w-1/2 m-auto py-2 px-4  mt-8" placeholder="email address" required/>
            <input type="password" name='password' className=" block border focus:border-cyan-500 w-1/2 m-auto p-2 mt-8" placeholder="password"required/>
            <input type="password" name='confirmPassword' className=" block border focus:border-cyan-500 w-1/2 m-auto p-2 mt-8" placeholder="Confirm password" required/>
            <input type="submit" className="block text-white font-bold text-2xl bg-cyan-500 hover:bg-cyan-100 cursor-pointer hover:text-gray-500 focus:border-cyan-500 w-1/2 m-auto p-2 mt-8 "></input>
        </form>
    </div>

</>
  )
}
