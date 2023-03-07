import axios from 'axios'

//"?key=34161620-bc5bb1c6eaff0b33298d205b0&q=yellow+flowers&image_type=photo&pretty=true"


//change page per in context and page button component
export default axios.create({
    baseURL: "https://pixabay.com/api/",
    params: {
        key: "34161620-bc5bb1c6eaff0b33298d205b0",
        per_page: 48
    }
})