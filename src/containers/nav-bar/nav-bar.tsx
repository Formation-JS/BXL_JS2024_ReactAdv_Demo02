import { Link } from "@tanstack/react-router";

export default function NavBar({ className = '' }) {

    return (
        <nav>
            <ul className={className}>
                <li>
                    <Link to='/'>Accueil</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/demo'>Redux</Link>
                </li>
            </ul>
        </nav>
    );

}