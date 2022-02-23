import GotDriver from '../src/got-driver';
import { IGotDriver } from '../src';

describe('GOT Tests', () => {
    const magenicAutomationSite = `http://magenicautomation.azurewebsites.net:80/api/EmployeesAPI/GetEmployees`;

    let gotDriver: IGotDriver;

    beforeEach(async () => {
        gotDriver = new GotDriver();
    });
    
    afterEach(async () => {
        
    });

    it("Get Request - Return 200 Response", async () => {
        let response = await gotDriver.getWithJsonResponseObject(magenicAutomationSite);
        expect(response.statusCode).toEqual(200);
    });

});