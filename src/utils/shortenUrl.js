import axios from 'axios'
const shortenUrl = async (urlToShorten) => {
    const backendUrl = 'http://localhost:5001/url/shorten'
    try{
        axios.post(backendUrl, {
         data : urlToShorten
        })
    }
    catch(err){
        console.log(err)
    }
}
export default shortenUrl;