import axios from 'axios'



//change page per in context and page button component
export default axios.create({
    baseURL: "https://pixabay.com/api/",
    params: {
        key: process.env.REACT_APP_API_KEY,
        per_page: 48
    }
})