import React, { useState } from 'react'
import Header from './Header'
import { BG_URL } from '../utils/constants'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            {/* Netflix BG_URL(body) */}
            <div className='absolute'>
                <img
                    className="h-full w-full  object-cover -z-10 inset-0"
                    src={BG_URL}
                    alt="Netflix Logo"
                />
            </div>
            <form className="w-3/12 absolute left-0 right-0 mx-auto my-36 p-12 bg-black rounded-lg bg-opacity-60">
                <h1 className="font-bold text-3xl text-white mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="p-3  w-full rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="p-3 w-full rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />

                    <button onClick={toggleSignForm} className="p-4 bg-red-700 hover:bg-red-800 text-white font-semibold rounded">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                    <p className='py-4 text-white cursor-pointer' onClick={toggleSignForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
                </div>
            </form>
        </div>
    )
}

export default Login
