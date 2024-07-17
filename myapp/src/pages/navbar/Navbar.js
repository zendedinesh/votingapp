import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
export const Navbar = () => {
    return (
        <div>
            <header className='navheder'>
                <nav className='nav'>

                    <div className='logo'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRM27qJbVj3j5YH2wVzzJGFTsUJh3NediBg&s" alt="123" />
                        <h3>voting machine</h3>
                    </div>
                    <div className='navlinks'>
                        <ul>
                            <li><Link to={"login"}>login</Link></li>
                            <li> <Link to={"register"}>register</Link></li>
                            <li> <Link to={"vote"}>vote</Link></li>
                            {/* <li><Link to={"voteCount"}>voteCount</Link></li> */}

                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}
