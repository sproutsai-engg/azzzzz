import { Link, Outlet } from "react-router-dom"

import './Header.css'

export default function Header(props) {
    return (
        <>
            <nav className="nav">
                <ul className="ul">
                    <li className="nav--home">
                        <Link className="link" to="/home">Home</Link>
                    </li>
                    <li className="nav--profile">


                        <Link className="link" to="/profile"
                            state={{
                                mail: props.mail
                            }}
                        >Profile</Link>
                    </li>
                    <li>
                        <button onClick={props.singout}>Sign Out</button>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}