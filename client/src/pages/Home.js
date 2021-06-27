import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex items-center justify-center flex-1">
                <div className="font-sans flex flex-col items-center h-full justify-center">
                    <div className="flex items-center">
                        <img src="/icons/logo.png" alt="logo" className="w-40"></img>
                        <h1 className="text-5xl">daily D.O.S.E. of happiness</h1>
                    </div>
                    <div className="flex flex-row pt-5">
                        <Link to="/register" className="mr-5 border-2 border-gray-100 px-5 py-2 rounded">Create an account</Link>
                        <Link to="/login" className="border-2 border-gray-100 px-5 py-2 rounded">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home