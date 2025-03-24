import NavBar from '../nav-bar/nav-bar.tsx';
import logo from './logo.jpg';

export default function Header() {

    return (
        <header className='flex h-18 bg-pink-200 p-1'> 
            <img src={logo} alt="logo" className='rounded-2xl' />
            <NavBar className='flex gap-5 text-2xl items-center h-full p-3' />
        </header>
    )
}