import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/home";
import CampaignPage from "../pages/campaign";

const homePage = new HomePage();
const campaignPage = new CampaignPage();


Given('user visit Kitabisa.com', () => {
    homePage.visit();
})

When('I select any campaign and click Donasi Sekarang', () => {
    homePage.clickCampaign();
    campaignPage.clickDonasiSekarang();
})

And('I select amount as 10K and select payment method as Transfer BCA and enter any name and email id in the corresponding fields', () => {
    campaignPage.inputAmount('10000');
    campaignPage.clickButtonNextPayAfterNominal();
    campaignPage.selectTransferBCA();
    campaignPage.inputName('nisa');
    campaignPage.inputPassword('nisatest@mailinator.com')
})

And('I click Lanjutkan Pembayaran', () => {
    campaignPage.clickButtonNextPayAfterSelectPayment();
})

And('I Click Kembali ke penggalangan', () => {
    campaignPage.clickBacktoPenggalangan();
})

And('I click back arrow on the campaign', () => {
    campaignPage.clickBackArrowtoCampaign();
})

Then('I should back to Homepage Kita Bisa', () => {
    campaignPage.backToHomepage();
})

