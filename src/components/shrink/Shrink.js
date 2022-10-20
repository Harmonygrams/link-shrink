import {React, useState} from "react"
import Navbar from "../navbar/Navbar"
import { Alert } from "@mui/material"
import Slide  from '@mui/material/Slide'
import shortenUrl from '../../utils/shortenUrl'
import validateLink from "../../utils/validateLink"
const Shrink = () => {
    const {Clipboard} = window
    const [showAlert, setShowAlert] = useState({
        alertState : false, 
        severity : "success", 
        message : ""
    })
    const [shortened, setShortened] = useState(false)
    const [urlToShrink, setUrlToShrink] = useState('') 
    const updateUrlToShrink = (e) => {
        setShortened(false)
        setUrlToShrink(prevValue => e.target.value)
    }
    const writeToClipboard = () => {
        navigator.clipboard.writeText(urlToShrink). 
            then( () => {
                setShowAlert({
                    alertState : true, 
                    severity : "success",
                    message : "Copied to clipboard"
                })
                const alertShowTimer = setInterval(() => {
                    setShowAlert({
                        alertState : false,
                        severity : "success",
                        message : "Copied to clipboard"
                    })
                    clearInterval(alertShowTimer)
                }, 3000)
            }).
            catch(err => console.log(err))
    }
    const shortenLink = () => {
        validateLink(urlToShrink, setShowAlert) && shortenUrl(urlToShrink, setShortened, setUrlToShrink)
    }
    return (
        <div> 
            <Navbar page={"home"}/>
            <div className="mt-20 flex justify-center flex-col items-center px-8">
                <h1 className="text-3xl px-4 sm:text-2xl md:text-6xl text-white font-bold text-center">Shorten Url </h1>
                <div className="mt-4 flex items-center gap-4 backdrop-blur w-full md:w-1/2 py-12 px-12 justify-center border-1 shadow rounded-lg"> 
                    <input 
                        className="rounded-lg py-1 sm:py-2 sm:text-sm md:text-lg px-4 md:py-4 md:flex-1 font-semibold outline-none text-gray-700 border-2 focus:border-blue-500"
                        placeholder="Paste link"
                        type="text"
                        value = {urlToShrink}
                        onChange = {updateUrlToShrink}
                        required
                    />
                    <button onClick={shortened ? writeToClipboard : shortenLink}
                            className="text-white text-sm sm:text-lg hover:bg-orange-800 transition font-semibold bg-orange-600 px-4 md:px-8 md:py-4 sm:py-2 py-2 rounded-lg"> 
                                {shortened ? "Copy" : "Shorten"}
                    </button>
                </div>
            </div>
            <div className="inline-block absolute bottom-8 right-8"> 
                <Slide direction="up" in={showAlert.alertState}> 
                    <Alert severity={showAlert.severity}>{showAlert.message}</Alert>
                </Slide>
            </div>
        </div>
    )
}
export default Shrink