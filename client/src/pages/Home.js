import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Navbar />
            <div className="font-sans flex flex-col items-center">
                <h1 className="text-5xl">Daily DOSE of Happiness</h1>
                <div className="flex flex-row pt-5">
                    <Link to="/register" className="mr-5 border-2 border-gray-100 px-5 py-2 rounded">Create an account</Link>
                    <Link to="/login" className="border-2 border-gray-100 px-5 py-2 rounded">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Home