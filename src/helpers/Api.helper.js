import axios from 'axios';

const instance = axios.create({
    baseURL: `http://localhost:3000/api/`,
    timeout: 10000,
});

// Step-2: Create request, response & error handlers
const requestHandler = request => {
    return request;
};

const responseHandler = response => {
    return response;
};

// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
instance.interceptors.request.use(
    (request) => requestHandler(request)
);

instance.interceptors.response.use(
    (response) => responseHandler(response)
);

export default instance;