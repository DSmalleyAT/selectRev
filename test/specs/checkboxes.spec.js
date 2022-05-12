const ChexPage = require('../pageobjects/checkboxes.page');

describe('My checkbox application', () => {
    it('should test the Checkboxes page', async () => {
        await ChexPage.open();
    });
    it('should confirm the presence of a heading', async () => {
        await expect(ChexPage.heading).toBeExisting(); 
    });
    it('should deselect the second checkbox', async () => {
        await expect(ChexPage.checkTwo).toBeExisting(); 
        await ChexPage.checkTwo.click();

        await browser.pause(2000);
    });
    
});