const {test, expect } = require('@playwright/test');

test.describe('Update User', () => {

    test('POST API call', async({ request }) => {
        let response_body;
        const response = await request.post('https://reqres.in/api/users', { // post request
            data: {
                    "name": "morpheus",
                    "job": "resident"
            },
        });
        await expect(response).toBeOK(); // response validation
        // console.log(await response.text())
    });
})