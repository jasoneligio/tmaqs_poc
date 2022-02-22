import got from 'got';

async function get(){

    try{

        const response = await got.get('http://magenicautomation.azurewebsites.net:80/api/EmployeesAPI/GetEmployees').json();
        console.log(response);

    }catch (error){
        console.error(error);
    }

}

async function post(){

    try{

        const response = await got.post('http://magenicautomation.azurewebsites.net:80/api/EmployeesAPI/PostEmployee', {
            json: {
                "EmployeeID": 51391,
                "EmpFirstName": "Jason",
                "EmpLastName": "Eligio",
                "EmpAddress": "NY",
                "StateID": 31,
                "CityID": 2531,
                "DepartmentID": 1755,
                "CityObj": {
                  "CityID": 2531,
                  "CityName": "Manhattan1"
                },
                "DepartmentObj": {
                  "DepartmentID": 1755,
                  "DepartmentName": "Quality Engineering"
                },
                "StateObj": {
                  "StateID": 31,
                  "StateName": "New York",
                  "StateAbbreviation": "NY"
                }
              },
        }).json();
        console.log(response);

    }catch (error){
        console.error(error);
    }

  }

 
  post();