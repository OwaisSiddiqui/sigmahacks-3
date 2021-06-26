import { Link } from 'react-router-dom'

const LoginForm = () => {
    return (
        <form className="font-lg flex flex-col items-start">
            <div className="flex flex-col">
                <label name="username" className="pb-2">Username</label>
                <input for="username" className="border-2 border-gray-100 p-2" required></input>
            </div>
            <div className="flex flex-col pt-7 pb-10">
                <label name="password" className="pb-2">Password</label>
                <input for="password" className="border-2 border-gray-100 p-2" required></input>
            </div>
            <button type="submit" className="rounded border-2 border-gray-100 pl-5 pr-5 pt-2 pb-2 bg-green-400 text-white">Login</button>
            <Link to="register" className="underline pt-5">Don't have an account? Click here to register</Link>
        </form>
    )
}

export default LoginForm