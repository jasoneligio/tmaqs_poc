import GotDriver from '../src/got-driver';
import { IGotDriver } from '../src';
import employeeJson from '../tests/Employee.json'
import { IEmployee } from './IEmployee'

describe('GOT Tests', () => {

    const magenicAutomationApiBaseUrl = `http://magenicautomation.azurewebsites.net:80`;

    const magenicAutomationApiGet = `/api/EmployeesAPI/GetEmployees`;
    const magenicAutomationApiPost = `/api/EmployeesAPI/PostEmployee`;
    const magenicAutomationApiPut = `/api/EmployeesAPI/PutEmployee/`;
    const magenicAutomationApiDelete = `/api/EmployeesAPI/DeleteEmployee/`;

    let gotDriver: IGotDriver;

    beforeEach(async () => {
        gotDriver = new GotDriver();
        gotDriver.BaseUrl = magenicAutomationApiBaseUrl;
    });
    
    afterEach(async () => {
    });

    // test for http get request with json response
    it("Get Request - Return 200 Response", async () => {
        // Execute
        let response = await gotDriver.getWithJsonResponse(magenicAutomationApiGet);
        // Assert
        expect(response.statusCode).toEqual(200);
    });

    // test for http post request with json response and json body
    it("Post Request - Return 201 Response", async () => {
        // Execute
        let response = await gotDriver.postWithJsonResponseAndJsonBody(magenicAutomationApiPost, JSON.stringify(employeeJson));
        // Assert
        expect(response.statusCode).toEqual(201);
        // Cleanup
        let employee: IEmployee = <IEmployee>response.body;
        await gotDriver.deleteWithJsonResponse(`${magenicAutomationApiDelete}${employee.EmployeeID.toString()}`);
    });

    // test for http put request with json response and json body
    it("Put Request - Return 204 Response", async () => {
        // Prepare Data
        let data = await gotDriver.postWithJsonResponseAndJsonBody(magenicAutomationApiPost, JSON.stringify(employeeJson));
        let employee: IEmployee = <IEmployee>data.body;
        employee.EmpFirstName = "Jason Joseph"
        // Execute
        let response = await gotDriver.putWithJsonResponseAndJsonBody(`${magenicAutomationApiPut}${employee.EmployeeID.toString()}`, JSON.stringify(employee));
        // Assert
        expect(response.statusCode).toEqual(204);
        // Cleanup
        await gotDriver.deleteWithJsonResponse(`${magenicAutomationApiDelete}${employee.EmployeeID.toString()}`);
    });

    // method for http delete request with json response
    it("Delete Request - Return 200 Response", async () => {
        // Prepare Data
        let data = await gotDriver.postWithJsonResponseAndJsonBody(magenicAutomationApiPost, JSON.stringify(employeeJson));
        let employee: IEmployee = <IEmployee>data.body;
        // Execute
        let response = await gotDriver.deleteWithJsonResponse(`${magenicAutomationApiDelete}${employee.EmployeeID.toString()}`);
        // Assert
        expect(response.statusCode).toEqual(200);
    });

});