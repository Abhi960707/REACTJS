import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email == 'vijay@gmail.com' && password == 'vijay123') {
            alert('Login Successful')
        } else {
            alert('Invalid Credentials');
        }
    }

    const handleChange = (value) => {
        if(email && password && value){
            setIsDisabled(false);
        }else{
            setIsDisabled(true);
        }
    }

    return (
        <form className="md:w-1/3 mx-auto border rounded-2xl p-5 text-2xl" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="email" className="block">Email</label>
                <input type="email" className="p-3 w-full border rounded border-gray-300" placeholder="Your email here..."
                    onChange={e => setEmail(e.target.value)} value={email} />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block">Password</label>
                <input type="password" className="p-3 w-full border rounded border-gray-300" placeholder="Your password here..."
                    onChange={e => setPassword(e.target.value)} value={password} />
            </div>

            <ReCAPTCHA sitekey={import.meta.env.VITE_GOOGLE_SITE_KEY} onChange={handleChange} />

            <div className="mb-4 text-center">
                <button type="submit" className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer" disabled={isDisabled}>Login</button>
            </div>
        </form>
    )
}

export default Login