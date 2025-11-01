 {/** All Manually validation this form */}
import { useEffect } from "react";    
import { useState } from "react";

const RegisterForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {

        const fieldErrors = {};

        if (firstName === '') {
            fieldErrors.firstName = 'First Name cannot be empty.'
        }
        if (lastName === '') {
            fieldErrors.lastName = 'Last Name cannot be empty.'
        }

        if (email === '') {
            fieldErrors.email = 'Email cannot be empty.'
        } else {
            if (!email.includes('@') || !email.includes('.')) {
                fieldErrors.email = 'Email is not valid.'
            }
        }

        if (password === '') {
            fieldErrors.password = 'Password cannot be empty.'
        } else {
            if (password.length < 6) {
                fieldErrors.password = 'Password must be at least 6 characters long.'
            }
        }

        if (confirmPassword === '') {
            fieldErrors.confirmPassword = 'Confirm Password cannot be empty.'
        } else {
            if (confirmPassword !== password) {
                fieldErrors.confirmPassword = 'Passwords do not match.'
            }
        }

        const isFirstNameValid = firstName !== '';
        const isLastNameValid = lastName !== '';
        const isEmailValid = email.includes('@') && email.includes('.');
        const isPasswordValid = password !== '' && password.length >= 6;
        const isconfirmPasswordValid = password === confirmPassword;

        setIsFormValid(isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isconfirmPasswordValid);

        setError(fieldErrors);
    }, [firstName, lastName, email, password, confirmPassword])

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = { firstName, lastName, email, password, confirmPassword };
        console.log('USER DATA: ', userData)  //Print the console and proceed the all data inn console,db etc
    }

    return (
        <div className="bg-gray-200 min-h-screen p-4">
            <h1 className="text-center my-5 text-4xl font-bold">Register Form</h1>
            <form className="shadow-md border rounded-2xl p-6 md:w-1/2 lg:w-1/3 mx-auto"
                onSubmit={handleSubmit}>

                <div className="mb-4">
                    <div className="mb-1 font-semibold">First Name</div>
                    <input type="text" className="w-full border rounded-sm p-2"
                        onChange={e => setFirstName(e.target.value)} />
                    {error.firstName && <p className="text-red-600">{error.firstName}</p>}
                </div>

                <div className="mb-4">
                    <div className="mb-1 font-semibold">Last Name</div>
                    <input type="text" className="w-full border rounded-sm p-2"
                        onChange={e => setLastName(e.target.value)} />
                    {error.lastName && <p className="text-red-600">{error.lastName}</p>}
                </div>

                <div className="mb-4">
                    <div className="mb-1 font-semibold">Email</div>
                    <input type="email" className="w-full border rounded-sm p-2"
                        onChange={e => setEmail(e.target.value)} />
                    {error.email && <p className="text-red-600">{error.email}</p>}
                </div>

                <div className="mb-4">
                    <div className="mb-1 font-semibold">Password</div>
                    <input type="password" className="w-full border rounded-sm p-2"
                        onChange={e => setPassword(e.target.value)} />
                    {error.password && <p className="text-red-600">{error.password}</p>}
                </div>

                <div className="mb-4">
                    <div className="mb-1 font-semibold">Confirm Password</div>
                    <input type="password" className="w-full border rounded-sm p-2"
                        onChange={e => setConfirmPassword(e.target.value)} />
                    {error.confirmPassword && <p className="text-red-600">{error.confirmPassword}</p>}
                </div>

                <div className="mb-4">
                    <button type="submit" className="w-full py-2 rounded-sm font-semibold bg-green-400 text-white" disabled={!isFormValid}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm