import { Link } from 'react-router-dom'
const Navbar = () => {
    return(
        <nav class="bg-orange-600 py-4 shadow-lg text-white flex justify-between items-center px-8"> 
            <div class=""> 
                <Link to="/" className="cursor-pointer bg-blue-600 px-3 py-3 rounded-full font-semibold ">LS</Link>
            </div>
            <ul class=""> 
                <li class="inline-block text-sm md:text-lg font-semibold cursor-pointer hover:text-blue-800 transition ml-4"><Link to="/shrink-url">Shrink Link</Link> </li>
                <li class="inline-block text-sm md:text-lg font-semibold cursor-pointer hover:text-blue-800 transition ml-4"><Link to="/upload-file">Upload File</Link> </li>
            </ul>
        </nav>
    )
}
export default Navbar; 