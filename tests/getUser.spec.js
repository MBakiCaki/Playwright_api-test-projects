// simple api call and UI validation using reqres.in free apis
// test for one user
const {test, expect } = require('@playwright/test');

test.describe('Response validation', () => {
    
    var response_body1;

    test('GET API call', async({ request }) => {

        const response = await request.get('https://reqres.in/api/users/12'); // get request
        await expect(response).toBeOK(); // response validation
        response_body1 = await response.text();
    });

    test('GET request from URL', async({ page }) => {

        await page.goto('https://reqres.in/api/users/12'); // navigate to page(endpoint)
        console.log(typeof(response_body1))
        await expect(page.locator('body')).toContainText(response_body1); // validate response is same

    });
})

