const request = require('request')

const geocode = (address, callback) =>{
    const gecodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoib3Zhc3RhY2siLCJhIjoiY2xuamR3ZjJxMXU3czJxdzVvdWtpeHp0YiJ9.9JjMUQDAVckbiJejYWcmRQ';

request( {
    url: gecodeurl,
    json:true
    }, (error, response) =>{
        if (error){
            callback ('', undefined)
        }else if (response.body.features.length === 0){
            callback ('', undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
