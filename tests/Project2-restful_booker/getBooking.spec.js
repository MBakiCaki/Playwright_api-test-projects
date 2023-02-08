const {test, expect } = require('@playwright/test');

let baseUrl = 'https://restful-booker.herokuapp.com';

test('Get booking details by Id', async({ request }) => {

    const response = await request.get(baseUrl+'/booking/2'); // get request
    await expect(response).toBeOK(); // response validation

        // let response_body=response.text()
        // console.log(await response_body)
});

test('Get booking details by Id negative test', async({ request }) => {

    const response = await request.get(baseUrl+'/booking/2333333'); // get request with non-existing id
    await expect(response).not.toBeOK(); // response validation
});