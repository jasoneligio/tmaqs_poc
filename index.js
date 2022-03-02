import got from 'got';

const magenicAutomationApiBaseUrl = `http://magenicautomation.azurewebsites.net:80`;
const magenicAutomationApiGet = `/api/EmployeesAPI/GetEmployees`;


export default async function get() {
    let response = await got.get(`${magenicAutomationApiBaseUrl}${magenicAutomationApiGet}`).json();
    console.log(response);
}

get();