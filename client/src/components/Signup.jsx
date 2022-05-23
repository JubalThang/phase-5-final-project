
import { Link, useNavigate } from 'react-router-dom'
import Appbar from './Appbar'

export default function Signup() {

  console.log('Signup Page')
  const navigate = useNavigate()

  function handldeOnClick(e) {
    e.preventDefault()
    const body = {
      "user" : {
        "email" : e.target.email.value,
        "password" : e.target.password.value,
        "password_confirmation" : e.target.confirmPassword.value,
        "admin": true,
        "church_attributes" : {
          "name" : e.target.church.value
        }
      }
    }

    console.log(body)

    navigate('/')
  }

  const marginTop = ' mt-8 '
  return (
    <>
      <Appbar />
      <div className=" w-2/4 m-auto mt-8 py-8 px-16 rounded-md shadow ">
        <h1 className=" text-center font-bold text-3xl">Create A New Account!</h1>
        <form onSubmit={(e) => handldeOnClick(e)}>
          <div className={marginTop}>
            <label htmlFor="email" className=" font-medium ">Enter your email address *</label>
            <input type="email" autoComplete="email" className=" mt-2 border w-full py-2 px-4" name='email' placeholder="email" required />
          </div>
          <div className={marginTop}>
            <label htmlFor="church" className=" font-medium ">Enter the name of your church *</label>
            <input type="text" name='church' className=" mt-2 w-full border py-2 px-4 " placeholder="name of your church" required />
          </div>
          <div className={marginTop}>
            <label htmlFor="password" className=" font-medium ">Enter a password *</label>
            <input type="password" name='password' className=" w-full border mt-2 p-2" placeholder="password" required />
          </div>
          <div className={marginTop}>
          <label htmlFor="password" className=" font-medium ">Enter confirm password *</label>
            <input type="password" name='confirmPassword' className=" w-full border focus:border-cyan-500 m-auto p-2" placeholder="Confirm password" required />
          </div>
          <input type="submit" className=" shadow text-white font-bold text-2xl bg-cyan-500 hover:bg-cyan-100 cursor-pointer hover:text-gray-500 focus:border-cyan-500 w-full p-2 mt-8 "></input>
        </form>
        <h1 className=" text-lg mt-4 w-1/2 text-gray-600 hover:text-cyan-500 "><Link to='/'>Already had an account?</Link></h1> 
      </div>

    </>
  )
}
