import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./schemas/registerSchema";


const BestRegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema)
    });

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="bg-gray-200 min-h-screen p-4">
            <h1 className="text-center my-5 text-4xl font-bold">Best Register Form</h1>
            <form className="shadow-md border rounded-2xl p-6 md:w-1/2 lg:w-1/3 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <div className="mb-1 font-semibold">First Name</div>
                    <input {...register("firstName")} type="text" className="w-full border rounded-sm p-2" />
                    {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                </div>

                <div className="mb-4">
                    <div className="mb-1 font-semibold">Last Name</div>
                    <input  {...register("lastName")} type="text" className="w-full border rounded-sm p-2" />
                    {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                </div>

                <div className="mb-4">
                    <div className="mb-1 font-semibold">Email</div>
                    <input  {...register("email")} type="email" className="w-full border rounded-sm p-2" />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                <div className="mb-4">
                    <div className="mb-1 font-semibold">Password</div>
                    <input  {...register("password")} type="password" className="w-full border rounded-sm p-2" />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>

                <div className="mb-4">
                    <div className="mb-1 font-semibold">Confirm Password</div>
                    <input  {...register("confirmPassword")} type="password" className="w-full border rounded-sm p-2" />
                    {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                </div>
                <div className="mb-4">
                    <button type="submit" className="w-full py-2 rounded-sm font-semibold bg-green-400 text-white">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default BestRegisterForm