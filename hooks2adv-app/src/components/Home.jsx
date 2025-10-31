import { useState, useEffect } from "react";

const Home = () => {

    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.log("ERROR : ", error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchUserData();

    }, [])


    if (loading) {
        return <h1 className="text-4xl">Loading...</h1>
    }

    return (
        <div className="bg-green-200 h-[90vh]">
            <h1 className="text-center py-5 text-4xl">Users Data</h1>
            <div className="grid grid-cols-3 gap-4 px-10">
                {
                    userData.map(user => <div className="border border-red-400 rounded-2xl p-4">
                        <h2 className="text-xl">{user.name}</h2>
                        <h3>{user.email}</h3>
                        <p>{user.phone}</p>
                        <p>{user.website}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Home