import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        document.title = "About Page";

        console.log('About mounted');

        return () => {
            console.log('About Unmount')
        }
    }, [])

    return (
        <div className="bg-red-200 h-[90vh] text-4xl">About</div>
    )
}

export default About