import ajax from './ajax'
export const getWeather = (params)=> ajax.get('https://devapi.qweather.com/v7/weather/now',params)