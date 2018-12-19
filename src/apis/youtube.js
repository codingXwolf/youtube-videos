import axios from 'axios';

const KEY = 'AIzaSyDtmfpIbGrVi8hhSuxHQuPVytZD5hTT7o4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})