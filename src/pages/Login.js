
function Login() {
  return ( 
  <div className='login container mx-auto bg-slate-900 h-[350px] w-[400px] mt-[15%] rounded-lg justify-center shadow-md p-[60px]'>
    <div className='inline'>
    
    <form action= "/" method='POST'>
     <div className=''>
     <div className='mb-[15%]'>
          <input className='w-[100%] rounded-[5px] h-[40px]' id='username' type='text' placeholder='username' name='email'></input>
      </div>
      <div className='mb-[15%] '>
          <input  className ='w-[100%] rounded-[5px] h-[40px]' id='password' type='text' placeholder='password' name='password'></input>
      </div>
     </div>
      
    
     <div className=''>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Connection</button>
     </div>
    
    </form>
    </div>
  </div>
  )
}


export default Login;
