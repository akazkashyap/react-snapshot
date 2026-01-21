import axios from 'axios'



//change page per in context and page button component
export default axios.create({
    baseURL: "https://pixabay.com/api/",
    params: {
        //key: process.env.REACT_APP_API_KEY,
        key: "34161620-bc5bb1c6eaff0b33298d205b0",
        per_page: 48
    }
})
