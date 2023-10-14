const searchbtn = document.querySelector('#searchForm');
const forecastText = document.querySelector('.day')
const locationText = document.querySelector('.location')
const temp = document.querySelector('.temp')
const rain = document.querySelector('.rain')
const wind = document.querySelector('.wind')
const direction = document.querySelector('.direction')
const forecastContent = document.querySelector('.forecast-content')

forecastContent.style.display = 'none'


searchbtn.addEventListener('submit', (e)=>{
    e.preventDefault();
    const address = e.target.elements.searchForm.value

    fetch ('/weather?address='+address).then ( (response)=>{
    response.json().then ( (data)=>{
        // console.log(data)
        // if (data.error) {

        // }
        forecastContent.style.display = 'block'
        forecastText.textContent = data.forecast;
        locationText.textContent = data.location
        temp.textContent = data.temperature
        rain.textContent = data.precip+'%'
        wind.textContent = data.wind_speed+'km/h'
        direction.textContent = data.wind_dir
    })
})
})