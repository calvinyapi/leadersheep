
import './Login.css'


function Login() {
  return ( 
  <div className='container w-392 h-96 mx-auto mt-60 border border-gray-400'>
    <div className='columns-1'>
    <form>
       <label> E-mail: </label>
       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>

       <label> Password: </label>
       <input type="text" name='password'></input>
    </form>
    </div>
  </div>
  )
}


export default Login;
