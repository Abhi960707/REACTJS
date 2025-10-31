import { useEffect } from "react";
import { useId } from "react";
import { useState } from "react";

const Contact = () => {

    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const id = useId();

    useEffect(() => {
        const regex = "^(?=.*\d)(?=.*[^\w\s]).{8}$";
        setPasswordError("");
        if (!password.match(regex)) {
            setPasswordError('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
        }

        // // Validation for password
        // 
        // if (password.length < 8) {
        //     setPasswordError('Password must be at least 8 characters long');
        // }

        // ['!', '@', '#', '$', '%', '^', '&', '*'].map(specialChar => {
        //     if (!password.includes(specialChar)) {
        //         setPasswordError('Password must not contain special characters');
        //     }
        // })
        console.log(password)
    }, [password])

    const handleSubmit = (e) => {
        e.preventDefault();

        setUserName(name);
        setName("");
    }

    return (
        <div className="bg-cyan-100 h-[90vh] pt-10 flex">
            <form className="text-2xl border p-8 rounded-2xl w-1/2" onSubmit={handleSubmit}>

                <h1 className="mb-4 text-4xl text-center">Contact Form</h1>

                <div className="mb-5">
                    <label htmlFor={`name${id}`} className="block">Name:</label>
                    <input type="text" name="name" id={`name${id}`} className="border px-3 py-1 w-full" placeholder="Enter name.." onChange={e => setName(e.target.value)} value={name} />
                </div>

                <div className="mb-5">
                    <label htmlFor={`email${id}`} className="block">Email:</label>
                    <input type="email" name="email" id={`email${id}`} className="border px-3 py-1 w-full" placeholder="Enter email.." onChange={e => setEmail(e.target.value)} value={email} />
                </div>

                <div className="mb-5">
                    <label htmlFor={`password${id}`} className="block">Password:</label>
                    <input type="password" name="password" id={`password${id}`} className="border px-3 py-1 w-full" placeholder="Enter Password.." onChange={e => setPassword(e.target.value)} value={password} />
                    {passwordError && <p className="text-sm text-red-500">{passwordError}</p>}
                </div>

                <div className="text-center">
                    <button type="submit" className="bg-amber-300 rounded-2xl text-2xl px-4 py-2 cursor-pointer">Submit</button>
                </div>
            </form>

            <div className="w-1/2">
                {
                    name && <h1 className="text-red-500 text-4xl text-center my-5">{name}</h1>
                }
                {
                    email && <h1 className="text-red-500 text-4xl text-center my-5">{email}</h1>
                }
            </div>

        </div>
    )
}

export default Contact