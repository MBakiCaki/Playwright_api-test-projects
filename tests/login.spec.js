const { test, expect } = require('@playwright/test');

test.describe('Successful login', () => {

    test('POST API call', async({ request }) => {

        const response = await request.post('https://reqres.in/api/login', { // post request
            data: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            },
        });
        await expect(response).toBeOK(); // response validation
        // console.log(await response.text())
    });
});

test.describe('Unsuccessful login', () => {

    test('Missing credentials login', async({ request }) => {

        const response = await request.post('https://reqres.in/api/login', { // post request
            data: {
                "email": "eve.holt@reqres.in",
            },
        });
        await expect(response).not.toBeOK(); // response validation
    });

    test('Wrong credentials login', async({ request }) => {

        const response = await request.post('https://reqres.in/api/login', { // post request
            data: {
                "email": "asd9@mail.com",
                "password": "123"
            },
        });
        await expect(response).not.toBeOK(); // response validation
    });
})