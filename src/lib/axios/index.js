import axios from 'axios';

const request = axios.create();

request.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Do something with response error
    const { response } = error;
    if (response) {
      const { status } = response;
      switch (status) {
        case 500: {
          break;
        }
        default: {
        }
      }
    }
    return Promise.reject(error);
  }
);

export default request;
