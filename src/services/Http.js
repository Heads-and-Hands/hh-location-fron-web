import axios from 'axios'

const token = '123'

const Http = axios.create();

Http.interceptors.request.use(r => {
    r.url = r.url + '?token=' + token
    return r
});

Http.defaults.baseURL = 'http://d.handh.ru:8887/';
Http.defaults.headers.post['Content-Type'] = 'application/json';
Http.defaults.headers.post['Accept'] = 'application/json';
Http.defaults.timeout = 3000;

export default Http