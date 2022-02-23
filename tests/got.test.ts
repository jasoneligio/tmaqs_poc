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

    it("Get Request - Return 200 Response", async () => {
        let response = await gotDriver.getWithJsonResponse(magenicAutomationApiGet);
        expect(response.statusCode).toEqual(200);
    });

    it("Post Request - Return 201 Response", async () => {
        let response = await gotDriver.postWithJsonResponseAndJsonBody(magenicAutomationApiPost, JSON.stringify(employeeJson));
        expect(response.statusCode).toEqual(201);
    });

    it("Put Request - Return 204 Response", async () => {
        let data = await gotDriver.postWithJsonResponseAndJsonBody(magenicAutomationApiPost, JSON.stringify(employeeJson));
        let employee: IEmployee = <IEmployee>data.body;
        let body: IEmployee = <IEmployee>employeeJson;
        body.EmployeeID = employee.EmployeeID;
        body.EmpFirstName = "Jason Joseph"
        let response = await gotDriver.putWithJsonResponseAndJsonBody(`${magenicAutomationApiPut}${employee.EmployeeID.toString()}`, JSON.stringify(body));
        expect(response.statusCode).toEqual(204);
    });

    it("Delete Request - Return 200 Response", async () => {
        let data = await gotDriver.postWithJsonResponseAndJsonBody(magenicAutomationApiPost, JSON.stringify(employeeJson));
        let employee: IEmployee = <IEmployee>data.body;
        let response = await gotDriver.deleteWithJsonResponse(`${magenicAutomationApiDelete}${employee.EmployeeID.toString()}`);
        expect(response.statusCode).toEqual(200);
    });

});