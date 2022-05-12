

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ChexPage extends Page {
    /**
     * define selectors using getter methods
     */
    get heading () {
        return $('h3=Checkboxes');
    }

    get checkTwo () {
        return $('//body/div[2]/div[1]/div[1]/form[1]/input[2]');
    }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // async login (username, password) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('checkboxes');
    }
}

module.exports = new ChexPage();
