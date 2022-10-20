const totalLinksModel = require('../model/totalLinks.model')
const urlModel = require('../model/url.model')
const shortenUrl = (req, res, next) => {
    //prefix 
    const linkPrefix = 'https://slaiz.link'
    const dayOfWeek = new Date().toString().split(' ')[0]
    const monthOfYear = new Date().toString().split(' ')[1]
    const yearOfCentury = new Date().toString().split(' ')[3]
    //day logic 
    let day = '' 
    switch(dayOfWeek) {
        case "Mon" : 
        day = 'M'
        break
        case "Tue": 
        day = "T"
        break
        case  "Wed" : 
        day = "W"
        break
        case "Thu" : 
        day = "TR"
        break 
        case "Fri" : 
        day = "F"
        break 
        case "Sat" : 
        day = "S"
        break 
        case  "Sun" : 
        day = "SN"
        break
        default : 
        day = "ND"
    }

    //Month Logic 
    let month = '' 
    switch(monthOfYear){
        case 'Jan' : 
        month = 'j' 
        break 
        case 'Feb' : 
        month = 'f'
        break 
        case 'Mar' : 
        month = 'm' 
        break 
        case 'Apr' : 
        month = 'a' 
        break 
        case 'May' : 
        month = 'q' 
        break 
        case 'Jun' : 
        month = 'j' 
        break  
        case 'Jul' : 
        month = 'v' 
        break 
        case 'Aug' :
        month = 'i' 
        break  
        case 'Sep' : 
        month = 's' 
        break
        case 'Oct' : 
        month = 'o' 
        break
        case 'Nov' : 
        month = 'n' 
        break 
        case 'Dec' : 
        month = 'd'
        break 
        default : 
        month = 'g'
    }
    //year logic 
    const year = `K${yearOfCentury.slice(2)}`
    totalLinksModel.findByIdAndUpdate("63507feb698ec17032428611", {$inc : {totalLinks : 1}}, (err, docs) => {
            if(err) return console.log(err)
            const shrinkedLink = `${linkPrefix}/${day}${month}${year}${docs.totalLinks ++}`
            const newLink = new urlModel({
                originalLink : req.body.data, 
                shortenedLink : shrinkedLink
            })
            newLink.save() 
            res.status(200).json({
                originalLink : req.body.data, 
                shrinkedLink : shrinkedLink
            })
        })
    
}
module.exports = shortenUrl

