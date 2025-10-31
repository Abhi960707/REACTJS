import { useEffect } from "react"

const Services = () => {

    useEffect(() => {
        document.title = "Services Page";

        console.log('Services mounted');

        return () => {
            console.log('Services Unmount')
        }
    }, [])

    return (
        <div className="bg-yellow-200 h-[90vh] text-4xl">Services</div>
    )
}

export default Services