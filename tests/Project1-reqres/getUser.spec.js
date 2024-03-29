// simple api call and UI validation using reqres.in free apis
// test for one user
const {test, expect } = require('@playwright/test');

test.describe('Get Single User', () => {

    test('GET API call', async({ request }) => {

        const response = await request.get('https://reqres.in/api/users/12'); // get request
        await expect(response).toBeOK(); // response validation
    });

    test('GET request from URL', async({ page }) => {

        await page.goto('https://reqres.in/api/users/12'); // navigate to page(endpoint)
        await expect(page.locator('body')).toContainText('{"data":{"id"');  // validate response

    });

});

// request non-existing user
test.describe('Get Single User Negative test', () => {
    
    test('Get API call', async({ request }) => {

        const response = await request.get('https://reqres.in/api/users/70') // get request
        await expect(response).not.toBeOK(); // response validation
    })

    test('GET request from URL', async({ page }) => {
        await page.goto('https://reqres.in/api/users/70'); // navigate to page(endpoint)
        await expect(page.locator('body')).not.toContainText('data'); // validate response is same
    })
});

