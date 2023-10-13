const geocode = require('./geocode')
const forecast = require('./forecast')


geocode ('address', (error, {latitude, longitude, location})=>{
   
    forecast(latitude, longitude, (error, {wind_dir, temperature, feelslike})=>{
        if (error) return error;
        console.log(`In ${location}, its ${temperature} degrees outside and it feels like ${feelslike} degress. the wind direction is ${wind_dir}`)
    } )
})

geocode('abuja', (error, data)=>{
})




