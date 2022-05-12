const DropPage = require('../pageobjects/dropdown.page');

describe('My dropdown application', () => {
    it('should test the dropdown menu page', async () => {
        await DropPage.open();
    });
    it('should confirm the presence of a heading', async () => {
        await expect(DropPage.heading).toBeExisting(); 
    });
    it('should open the dropdown menu', async () => {
        await expect(DropPage.ddMenu).toBeExisting(); 
        await DropPage.ddMenu.click();

        await browser.pause(2000);
    });
    
});