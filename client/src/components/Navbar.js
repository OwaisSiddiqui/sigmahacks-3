import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="sticky w-full top-0 left-0 border-2 border-gray-100 p-5 bg-white">
            <Link to="/" className="underline">
                <div className="flex items-center">
                    <img src="/icons/logo.png" alt="logo" className="w-16"></img>
                    <h1 className="text-md ml-3">daily D.O.S.E. of happiness</h1>
                </div>
            </Link>
        </header>
    )
}

export default Navbar