export default class CampaignPage {

    clickDonasiSekarang() {
        cy.get('button#campaign-detail_button_donasi-sekarang').click();
    }

    inputAmount(value) {
        cy.get('input#contribute_inputfield_amount-donation').type(value);
    }

    clickButtonNextPayAfterNominal() {
        cy.get('button#contribute_button_lanjutkan-pembayaran').click();
    }
    selectTransferBCA() {
        cy.get('span:contains("Transfer BCA")').click();
    }

    inputName(value) {
        cy.get('input[name=fullname]').type(value);
    }

    inputPassword(value) {
        cy.get('input[name=username]').type(value);
    }

    clickButtonNextPayAfterSelectPayment(){
        cy.get('button#contribute_button_lanjutkan-pembayaran').click();
    }

    clickBacktoPenggalangan(){
        cy.get('#summary-page > header > div > button').click();
    }

    clickBackArrowtoCampaign(){
        cy.get('div#plain-header').click();
    }

    backToHomepage(){
        cy.get('a#defaultheader_logo').should("be.visible");
    }
}