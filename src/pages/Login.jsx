import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Eye, EyeClosed } from 'lucide-react'
import InputFiled from '../components/InputFilled'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }


    // submit logic
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("Email and Password Is Requried~!")
        }
        login(email);
        navigate("/dashboard");

    }

    return (

        <>
            <section className='w-full min-h-screen flex items-start justify-center'>
                <div className="register-form p-4 rounded-2xl shadow-lg max-w-md w-full mt-10">
                    <h1 className='text-center font-semibold capitalize text-white'>Wellcome login your account</h1>
                    <form onSubmit={handleLogin}>
                        <InputFiled type='text' label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email Id Here..." />
                        <InputFiled type={showPassword ? "text" : "password"} label="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password here" onIconClike={toggleShowPassword} SecIcon={!showPassword ? EyeClosed : Eye} />

                        <button type='submit' className={`px-7 py-3 rounded-[5px] text-white btn w-full
transition-all duration-300 hover:-translate-y-1 
hover:shadow-lg ${loading ? "cursor-not-allowed bg-blue-300" : "bg-blue-500 hover:bg-blue-700 duration-150 cursor-pointer"}`} >
                            {
                                loading ? "Login...." : "Login"
                            }
                        </button>
                    </form>
                </div>
            </section>


        </>
    )
}

export default Login