import React from 'react'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp
            <span className='text-blue-500'> ChatApp</span>
        </h1>
        <form>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Username</span>
                </label>
                <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'/>
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Full Name</span>
                </label>
                <input type="text" placeholder='Enter Full Name' className='w-full input input-bordered h-10'/>
            </div>


            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Password</span>
                </label>
                <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'/>
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Confirm Password</span>
                </label>
                <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
            </div>
            <div className='flex'>
                <div className='form-control'>
                    <label className='label gap-2 cursor-pointer'>
                        <span className='label-text'>Male</span>
                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" defaultChecked />
                    </label>
                </div>
                <div className='form-control'>
                    <label className='label gap-2 cursor-pointer'>
                        <span className='label-text'>Female</span>
                        <input type="radio" name="radio-10" className="radio checked:bg-pink-500" defaultChecked />
                    </label>
                </div>
            </div>
            <a href="/login" className='text-sm hover:underline hover:text-blue-400 mt-2 inline-block'>
                have an account
            </a>
            <button className='btn btn-block btn-sm mt-2'>SignUp</button>
        </form>
        </div>
    </div>
  )
}

export default SignUp