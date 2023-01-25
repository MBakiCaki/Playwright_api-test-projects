const {test, expect } = require('@playwright/test');

test.describe('Create User', () => {

    test('POST API call', async({ request }) => {

        const response = await request.post('https://reqres.in/api/users', { // post request
            data: {
                    "name": "morpheus",
                    "job": "leader"
            },
        });
        await expect(response).toBeOK(); // response validation
        // console.log(await response.text())
    });
})