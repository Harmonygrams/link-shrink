import { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import verifyUrls from '../../utils/verifyUrls'
import Navbar from '../navbar/Navbar'
const Deadend = () => {
    const [redirect, setRedirect ] = useState(false)
    useEffect(() => {
        verifyUrls(`https://slaiz.link${window.location.pathname}`, setRedirect)
        document.title = "404"
    }, [])
    return(
        <> 
            {redirect && 
            <div> 
                <Navbar />
                <div className="flex flex-col items-center"> 
                    <div className="mt-28"> 
                        <h1 className="text-3xl px-4 sm:text-2xl md:text-6xl text-white font-bold text-center"> Resource not found</h1>
                        <p className="text-sm sm:text-lg md:text-2xl font-semibold text-white text-center mt-4"> redirecting to <Link to="/" className="text-orange-500 underline">Homepage </Link></p>
                    </div>
                </div>
            </div>
            }
        </>
    )
}
export default Deadend