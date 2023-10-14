const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('../src/utils/geocode')
const forecast = require('../src/utils/forecast')

const port = process.env.PORT || 5000

const route = express();
const viewspath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const publicPath = path.join(__dirname, '../public')

route.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);
route.use(express.static(publicPath));
route.set('views', viewspath)

route.get('', (req, res)=>{
    res.render('index', {
        title: 'home page'
    })
})

route.get('/products', (req, res)=>{
    if (!req.query.search){
        return  res.send({
        error: 'No Query Provided'
    })
    }
    res.send({
        products: req.query.search
    })
})

route.get('/weather', (req, res)=>{
    geocode(req.query.address, (error, {
        location, latitude, longitude
    } = {})=>{
        if (error) return error
        forecast (latitude, longitude, (error,  {
            temperature, feelslike, wind_dir, wind_speed, weather_icon, precip
        } = {}) =>{
            if (error){
                return {error}
            }
            // console.log(data)
        if (!req.query.address){
            return res.send({
            error: 'address not provided'
            })
        }
        res.send({
        forecast: `It ${temperature} degrees currently and it feels ${feelslike} degrees out side with winds moving ${wind_dir}`,
        location,
        temperature, feelslike, wind_dir, wind_speed, weather_icon, precip,
        searched: req.query.address
      })
        })
    })
 


})

route.listen(port)

