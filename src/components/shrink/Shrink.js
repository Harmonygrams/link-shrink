import {React, useState} from "react"
import Navbar from "../navbar/Navbar"
import { Link } from 'react-router-dom'
import shortenUrl from '../../utils/shortenUrl'
const Shrink = () => {
    const [shortened, setShortened] = useState(false)
    const [urlToShrink, setUrlToShrink] = useState('') 
    const updateUrlToShrink = (e) => {
        setUrlToShrink(prevValue => e.target.value)
    }
    return (
        <div> 
            <Navbar page={"home"}/>
            <div className="mt-20 flex justify-center flex-col items-center"> 
                <h1 className="text-white font-bold text-6xl shadow">Shorten Url </h1>
                <div className="mt-4 flex items-center gap-4 backdrop-blur w-1/2 py-12 px-12 justify-center border-1 shadow rounded-lg"> 
                    <input 
                        className="rounded-lg px-4 py-4 flex-1 font-semibold outline-none text-gray-700 focus:border-2 focus:border-blue-500"
                        placeholder="Paste link"
                        type="url"
                        value = {urlToShrink}
                        onChange = {updateUrlToShrink}
                    />
                    <button onClick={() => shortenUrl(urlToShrink)} className="text-white text-sm sm:text-lg hover:bg-orange-800 transition font-semibold bg-orange-600 px-4 md:px-8 md:py-4 sm:py-2 py-2 rounded-lg"> {shortened ? "Copy" : "Shorten"}</button>
                </div>
            </div>
        </div>
    )
}
export default Shrink