import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
const Contact = () => {
    return(
        <div> 
            <Navbar />
            <div> 
                <h1 className="text-3xl px-4 sm:text-2xl md:text-6xl text-white font-bold text-center"> Get in touch!</h1>
                <p className="text-sm sm:text-lg md:text-2xl font-semibold text-white text-center mt-4"> Send your complaints or make enquiry</p>
            </div>
            <div> 
                <div className=""> 
                    <a href="tel:+2348166211248">+2348166211248</a>
                </div>
                <div className=''> 
                </div>
            </div>
        </div>
    )
}
export default Contact