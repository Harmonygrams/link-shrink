import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
const Navbar = () => {
    return(
        <nav class="bg-orange-600 py-4 shadow-lg text-white flex justify-between items-center px-8"> 
            <div class="w-12 h-12  border-"> 
                <Link to="/" className="cursor-pointer rounded-full w-12 h-12">
                    <img 
                        src={Logo}
                        alt="logo"
                        className='rounded-lg'
                    />
                </Link>
            </div>
            <ul class=""> 
                <li class="inline-block text-sm md:text-lg font-semibold cursor-pointer hover:text-blue-800 transition ml-4"><Link to="/shrink-url">Shrink Link</Link> </li>
                <li class="inline-block text-sm md:text-lg font-semibold cursor-pointer hover:text-blue-800 transition ml-4"><Link to="/upload-file">Upload File</Link> </li>
            </ul>
        </nav>
    )
}
export default Navbar; 