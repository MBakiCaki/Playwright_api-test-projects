// simple api call and UI validation using reqres.in free apis
// test for multiple users
const {test, expect } = require('@playwright/test');
let baseurl = 'https://reqres.in/api/users/'
test.describe('Response validation', () => {
    
    var response_body = [];
    test('GET API call', async({ request }) => {

        let response = [];
        for(let i=1; i<11; i++){
            response[i] = await request.get(baseurl+(i.toString()));
            await expect(response[i]).toBeOK();
            response_body[i] = await response[i].text();
        }
    });

    test('GET request from URL', async({ page }) => {
        for(let i=1; i<11; i++){
            await page.goto(baseurl+(i.toString()));
            await expect(page.locator('body')).toContainText(response_body[i])
        }
    });
})

