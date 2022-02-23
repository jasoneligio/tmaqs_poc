import GotDriver from '../src/got-driver';
import { IGotDriver } from '../src';
import jsonBody from '../tests/postBody.json'

describe('GOT Tests', () => {
    const magenicAutomationApiBaseUrl = `http://magenicautomation.azurewebsites.net:80`;
    const magenicAutomationApiGet = `/api/EmployeesAPI/GetEmployees`;
    const magenicAutomationApiPost = `/api/EmployeesAPI/PostEmployee`;

    let gotDriver: IGotDriver;

    beforeEach(async () => {
        gotDriver = new GotDriver();
        gotDriver.BaseUrl = magenicAutomationApiBaseUrl;
    });
    
    afterEach(async () => {
        
    });

    it("Get Request - Return 200 Response", async () => {
        let response = await gotDriver.getWithResponse(magenicAutomationApiGet);
        expect(response.statusCode).toEqual(200);
    });

    it("Post Request - Return 201 Response", async () => {
        let response = await gotDriver.postWithResponse(magenicAutomationApiPost, JSON.stringify(jsonBody));
        expect(response.statusCode).toEqual(201);
    });

});