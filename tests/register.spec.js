const { test, expect } = require('@playwright/test');

test.describe('Successful signup', () => {

    test('POST API call', async({ request }) => {

        const response = await request.post('https://reqres.in/api/login', { // post request
            data: {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            },
        });
        await expect(response).toBeOK(); // response validation
        // console.log(await response.text())
    });
});

test.describe('Unsuccessful signup', () => {

    test('Missing credentials login', async({ request }) => {

        const response = await request.post('https://reqres.in/api/login', { // post request
            data: {
                "email": "sydney@fife"
            }
        });
        await expect(response).not.toBeOK(); // response validation
        // console.log(await response.text())
    });

})