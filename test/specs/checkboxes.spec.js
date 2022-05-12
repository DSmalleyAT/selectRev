const ChexPage = require('../pageobjects/checkboxes.page');

describe('My checkbox application', () => {
    xit('should test the Checkboxes page', async () => {
        await ChexPage.open();
    });
    xit('should confirm the presence of a heading', async () => {
        await expect(ChexPage.heading).toBeExisting(); 
    });
    xit('should deselect the second checkbox', async () => {
        await expect(ChexPage.checkTwo).toBeExisting(); 
        await ChexPage.checkTwo.click();

        await browser.pause(2000);
    });
    
});