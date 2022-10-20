const validateLink = (urlToShorten, setShowAlert) => {
    //check if link has more than one extension
    if(urlToShorten.slice(0, 18) === "https://slaiz.link" || urlToShorten.slice(0, 14) === "www.slaiz.link" || urlToShorten.slice(0, 10) === "slaiz.link"){
        setShowAlert({
            alertState : true, 
            severity : "error", 
            message : "Already a slaiz link"
        })
        const alertShowTimer = setInterval(() => {
            setShowAlert({
                alertState : false, 
                severity : "error", 
                message : "Already a slaiz link"
            })
            clearInterval(alertShowTimer)
        }, 3000)
        return false
    }
    return true 
}
export default validateLink