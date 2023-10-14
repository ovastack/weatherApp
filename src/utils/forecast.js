const request = require('request')
const geolocate = require('./geolocate')
const { response } = require('express')



    const forecast = (latitute, longitute, callback)=>{
        url = 'http://api.weatherstack.com/forecast?access_key=d8754572acaa3611ce10acd5121a9cec&query='+ encodeURIComponent(latitute) +','+ encodeURIComponent(longitute)+''
        request({
            url,
            units: 'f',
            json: true

        }, (error, response)=>{
            callback(undefined, response.body.current)
        })
    }








 

module.exports = forecast;