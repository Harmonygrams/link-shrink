import { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
const Deadend = () => {
    const [redirect, setRedirect ] = useState(false)
    setInterval(() => {
        setRedirect(true)
    }, 5000)
    useEffect(() => {
        document.title = "404"
    }, [])
    return(
        <> 
            <Navbar />
            <div class="flex flex-col items-center"> 
                <div class="mt-28"> 
                    <h1 class="text-3xl px-4 sm:text-2xl md:text-6xl text-white font-bold text-center"> Resource not found</h1>
                    <p class="text-sm sm:text-lg md:text-2xl font-semibold text-white text-center mt-4"> redirecting to <Link to="/" class="text-orange-500 underline">Homepage </Link></p>
                </div>
            </div>
            {redirect && <Navigate to="/" />}
        </>
    )
}
export default Deadend