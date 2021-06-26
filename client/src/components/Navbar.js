import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="fixed w-full top-0 left-0 border-2 border-gray-100 p-5">
            <Link to="/" className="underline">Daily DOSE of Happiness</Link>
        </header>
    )
}

export default Navbar