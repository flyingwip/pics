import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID IxyRictlvzN800_ePy8KRkKNStOnNydctugHR6IyS30',
  },
})
