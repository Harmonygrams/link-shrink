import axios from 'axios'
const verifyUrls = async (shrinkedLink, setRedirect) => {
    const url = `https://server.slaiz.link/url/verify`
    try{
        const response = await axios.post(url, {
            data : shrinkedLink
        })
        if(response.data.success){ 
            window.location = response.data.data.originalLink
            return 
        }
        return setRedirect(true)
    }catch(err){
        console.log(err)
    }
}
export default verifyUrls