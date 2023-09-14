import axios from 'axios'

export default axios.create({
    baseURL: "https://sports-data-api.p.rapidapi.com/api/v1/sports/nfl/"
})