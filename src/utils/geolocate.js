
const request = require('request')

const geolocate = (callback) =>{
    let data;
    const url = 'https://api.ipgeolocation.io/ipgeo?apiKey=59d80f396ec0446cba524186f2e785e2'
    request({
        url,
        json: true
    }, (error, response)=>{
        if (error){
           callback('', undefined)
        }else{
           callback(undefined, response.body)
        }
    })
}

// gelocate( (error, data) =>{
//     console.log(data)
//     console.log(error)
// })


module.exports = geolocate