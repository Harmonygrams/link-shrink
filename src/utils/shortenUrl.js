import { toHaveAttribute } from '@testing-library/jest-dom/dist/matchers'
import axios from 'axios'
const shortenUrl = async (urlToShorten, setShortened, setUrlToShrink) => {
    const backendUrl = 'http://localhost:5001/url/shorten'
    try{
        const response = await axios.post(backendUrl, {
         data : urlToShorten
        })
        setShortened(true)
        setUrlToShrink(response.data.shrinkedLink) 
        
    }
    catch(err){
        console.log(err)
    }
}
export default shortenUrl;