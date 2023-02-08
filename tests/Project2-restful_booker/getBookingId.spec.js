const {test, expect } = require('@playwright/test');
 
let baseUrl = 'https://restful-booker.herokuapp.com';

test.describe('Get Booking ID', () => {

    test('Get booking Id list', async({ request }) => {

        const response = await request.get(baseUrl+'/booking'); // get request
        await expect(response).toBeOK(); // response validation
    });

    test('Get filtered by name', async({ request }) => {

        const response = await request.get(baseUrl+'/booking/?firstname=Eric&lastname=Smith'); // get request
        await expect(response).toBeOK(); // response validation

    });
    test('Get filtered by date', async({ request }) => {

        const response = await request.get(baseUrl+'/booking?checkin=2014-03-14'); // get request - bookings until(inclusive) this day
        await expect(response).toBeOK(); // response validation
    });
})