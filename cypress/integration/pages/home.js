export default class HomePage{

    visit(){
        cy.visit('https://kitabisa.com/');
    }

    clickCampaign(){
        cy.get('div#template_horizontal-wide-card-slider').first().children('div').children('div').children('a').first().click();
    }
}