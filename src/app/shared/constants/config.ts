export class Config {

    // SERVER_URL = 'https://www.bharosaa.tk'
    SERVER_URL = 'http://localhost:8080';

    URL = this.SERVER_URL + '/api/v1';
    USER_API = this.URL + '/user';
    EMPLOYEE_API = this.URL + '/user/employee';
    COLLECTOR_API = this.URL + '/user/collector';

}