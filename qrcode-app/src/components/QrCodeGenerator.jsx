{/** Using 1."react-qr-code" library package installation in console. Package Command:- pnpm i react-qr-code
  All Automatically Generate & simple work using this library
            2."react-icons" library package installation in console. Package Command:- pnpm i react-icons 
    All Icons Provide using this library          */}
import { useState } from "react";
import QRCode from "react-qr-code";
import { IoMdDownload } from "react-icons/io";
import { FaPrint } from "react-icons/fa6";


const QrCodeGenerator = () => {
    const [userInput, setUserInput] = useState("");
    const [value, setValue] = useState("");

    const handleGenerateClick = () => {
        setValue(userInput);
    }

    const handleResetClick = () => {
        setUserInput('')
        setValue('');
    }

    return (
        <div className="w-1/2 mx-auto">
            <h1 className="text-center text-blue-500 text-5xl font-bold my-7">QR Code Generator</h1>
            <div className="mb-7">
                <input type="text" onChange={e => setUserInput(e.target.value)} value={userInput} className="w-full border border-blue-300 text-2xl p-2 rounded-2xl" placeholder="Type here..." />
            </div>
            <div className="mb-7 text-center">
                <button type="button" className="text-2xl bg-blue-400 rounded px-3 py-2 m-1 cursor-pointer" onClick={handleGenerateClick}>Generate</button>

                <button type="button" className="text-2xl bg-gray-300 rounded px-3 py-2 m-1 cursor-pointer" onClick={handleResetClick}>Reset</button>
            </div>
            {
                value.length > 0 && <div className="flex flex-col justify-center items-center">
                    <QRCode value={value} className="border p-2" />
                    <div className="flex mb-7 text-center">
                        <button type="button" className="flex items-center text-xl bg-blue-400 rounded px-3 py-2 m-1 cursor-pointer"><FaPrint />Print</button>

                        <button type="button" className="flex items-center text-xl bg-gray-300 rounded px-3 py-2 m-1 cursor-pointer"><IoMdDownload /> Download</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default QrCodeGenerator