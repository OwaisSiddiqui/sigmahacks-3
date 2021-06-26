import LoginForm from '../components/LoginForm';
import React from "react";
import Navbar from '../components/Navbar'


const Login = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <Navbar />
      <div className="font-sans border-gray-100 border-2 flex flex-col self-center items-start p-10 rounded-lg">
        <h1 className="text-5xl pb-10">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;