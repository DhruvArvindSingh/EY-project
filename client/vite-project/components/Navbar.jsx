import React from 'react'
// import {Link} from 'react-router-dom'
function Navbar() {
    return <>
       <header class="header">
        <div class="container">
            <div class="logo">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2a8 8 0 0 1 8 8v1a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3h1"></path>
                    <path d="M12 2a8 8 0 0 0-8 8v1a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3h-1"></path>
                    <path d="M12 17v4"></path>
                    <path d="M8 22h8"></path>
                </svg>
                <h1>FormBot</h1>
            </div>
            <nav>
                {/* <button class="btn btn-outline" onclick="signup()"><Link to="/signup">Sign Up</Link></button>
                <button class="btn btn-primary" onclick="signin()"><Link to="/signin">Sign In</Link></button> */}
            </nav>
        </div>
    </header>
    </>
}

export default Navbar