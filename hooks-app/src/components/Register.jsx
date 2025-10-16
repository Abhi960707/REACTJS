import { useState } from "react"

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData)
        
        setFormData({
            name: "",
            email: "",
            phone: "",
            city: ""
        })
    }

    return (
        <div>
            <h1>Registration Form</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} value={formData.name} />
                </div>
                <br />
                <div>
                    <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} value={formData.email} />
                </div>
                <br />
                <div>
                    <input type="text" name="phone" placeholder="Enter Phone" onChange={handleChange} value={formData.phone} />
                </div>
                <br />
                <div>
                    <input type="text" name="city" placeholder="Enter City" onChange={handleChange} value={formData.city} />
                </div>
                <br />
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>

        </div>
    )
}

export default Register
















































// =======================================================================================================
//Simple method but some error


// import React from 'react'
// import { useState } from 'react'

// const Register = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         city: ""
//     })

//     const handleChange=(e)=>{
//         console.log(e.target.value)
//         setFormData({
//             name:e.target.value,
//              email:e.target.value,
//               phone:e.target.value,
//                city:e.target.value
//         })
//     }

//     setFormData({
//         ...formData,
//         [name]:value
//     })

//       const handleClick=()=>{
//         console.log(formData)

//         const handleSubmit =()=>{
//             e.preventDefault();  //Console is nor reload for this command
//             console.log(formData)
//         }

//       }



//     return (
//         <div style={{ display: "flex", gap: "20px" }}>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder='name' onChange={handleChange} value={formData.name} />
//                 <input type="email" placeholder='email' onChange={handleChange} value={formData.email} />
//                 <input type="number" placeholder='phone' onChange={handleChange} value={formData.phone} />
//                 <input type="text" placeholder='city' onChange={handleChange} value={formData.city} />

//                 <button type='submit' onClick={handleChange}>Register</button>
//             </form>
//         </div>
//     )
// }

// export default Register