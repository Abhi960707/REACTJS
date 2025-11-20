{/** Using 1.react-hook-form library package installation in console. Package Command:- pnpm i react-hook-form 
  All Automatically validation this form using this library*/}


import { useForm } from "react-hook-form";

const NewRegisterForm = () => {

    const { register, handleSubmit,formState:{errors,isSubmitted},watch } = useForm();  //Automatically validation this 2 function 1.register 2.handleSubmit & object is formState:{erors,isSubmitted},watch

    const password=watch('password');
    const onSubmit = (data) => {
        console.log(data)   //Print the console and proceed the all data inn console,db etc
    }

    if(isSubmitted){
        return <div className="bg-amber-300 min-h-screen p-4">
            <div className="text-center text-2xl font-semibold text-green-600">
                Registration Successfully Completed!
            </div>
            </div>
    
    }

    return (
        <div className="bg-gray-200 min-h-screen p-4">
            <h1 className="text-center my-5 text-4xl font-bold">New Register Form</h1>
            <form className="shadow-md border rounded-2xl p-6 md:w-1/2 lg:w-1/3 mx-auto"
                onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">


                    <div className="mb-1 font-semibold">First Name</div>
                    <input {...register('firstName', {
                        required: {                                            //This field is Required refer a errors validation a last line this div.
                            value: true, message: 'First Name Is Required.'
                        },
                        minLength: {
                            value: 3, message: 'First Name must be at least 3 character long.'
                        }
                    })}
                        type="text" className="w-full border rounded-sm p-2" />
                        {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p> }  {/*this is validation & define the const function object ={errors}*/}
                </div>

                <div className="mb-4">
                    <div className="mb-1 font-semibold">Last Name</div>
                    <input {...register('lastName', {
                        required: {                                            //This field is Required refer a errors validation a last line this div.
                            value: true, message: 'Last Name Is Required.'
                        },
                        minLength: {
                            value: 2, message: 'Last Name must be at least 2 character long.'
                        }

                    })} 
                        type="text" className="w-full border rounded-sm p-2" />
                         {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p> }   {/*this is validation & define the const function object ={errors}*/}

                </div>

                <div className="mb-4">
                    <div className="mb-1 font-semibold">Email</div>
                    <input {...register('email', {
                        required: {                                            //This field is Required refer a errors validation a last line this div.
                            value: true, message: 'Email Id Is Required.'  //Used Regex Pattern for email. Search on google
                            
                        },
                        pattern: {
                            value: "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/",
                            message: 'Email is not valid.'
                        }

                        })} type="email" className="w-full border rounded-sm p-2" />
                          {errors.email && <p className="text-red-500">{errors.email.message}</p> }   {/*this is validation & define the const function object ={errors}*/}

                </div>
 <div className="mb-4">
                    <div className="mb-1 font-semibold">Password</div>
                    <input {...register('password', {
                        required: "Password is required.",
                        minLength: {
                            value: 6, message: 'Password must be at least 6 characters long.'
                        }
                    })} type="password" className="w-full border rounded-sm p-2" />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>

                <div className="mb-4">
                    <div className="mb-1 font-semibold">Confirm Password</div>
                    <input  {...register('confirmPassword', {
                        required: "Confirm Password is required.",
                        validate: value => value === password || 'Passwords do not match.'
                    })} type="password" className="w-full border rounded-sm p-2" />
                    {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                </div>
                <div className="mb-4">
                    <button type="submit" className="w-full py-2 rounded-sm font-semibold bg-green-400 text-white">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default NewRegisterForm