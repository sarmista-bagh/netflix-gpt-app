import React from 'react'
import { LOGO } from '../utils/constants'
const Header = () => {
    return (
        <div>
            <div className='relative px-8 py-2 bg-gradient-to-b from-black'>
                {/* Netflix Logo (Left) */}
                <img
                    className="w-44 cursor-pointer md:w-44"
                    src={LOGO}
                    alt="Netflix Logo"
                />
            </div>
        </div>
    )
}

export default Header
