import { Link } from 'react-router-dom'
const Hero = () => {
    return(
        <div class="flex flex-col items-center py-12 mt-20"> 
            <div> 
                <h1 class="text-3xl px-4 sm:text-2xl md:text-6xl text-white font-bold text-center">Shrink Links And Upload Files </h1>
                <p class="text-sm sm:text-lg md:text-2xl font-semibold text-white text-center mt-2"> Shorten links and uploads files on the go</p>
            </div>
            <div class="mt-4 md:mt-8 flex justify-center md:gap-12 gap-4 items-center"> 
                <Link to="/shrink-url" class="text-white text-sm sm:text-lg hover:bg-orange-800 transition font-semibold bg-orange-600 px-4 md:px-8 md:py-4 sm:py-2 py-2 rounded-lg"> Shrink Urls </Link>
                <Link to="/upload"class="text-white text-lg underline font-semibold"> Upload Files </Link>
            </div>
        </div>
    )
}
export default Hero