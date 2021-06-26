import { Link } from 'react-router-dom'

const RegisterForm = () => {
    return (
        <form className="font-lg flex flex-col items-start">
            <fieldset className="flex flex-col">
                <label name="username" className="pb-2">Username</label>
                <input for="username" className="border-2 border-gray-100 p-2" required></input>
            </fieldset>
            <fieldset className="flex flex-col pt-7 pb-10">
                <label name="password" className="pb-2">Password</label>
                <input for="password" className="border-2 border-gray-100 p-2" required></input>
            </fieldset>
            <button type="submit" className="rounded border-2 border-gray-100 pl-5 pr-5 pt-2 pb-2 bg-green-400 text-white">Register</button>
            <Link to="login" className="underline pt-5">Already have an account? Click here to login</Link>
        </form>
    )
}

export default RegisterForm