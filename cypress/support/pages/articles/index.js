const el = require('./elements').ELEMENTS
const faker = require('faker')
const title = 'Artigo de testes: ' + faker.lorem.words()


class Articles {

    accessPublicationPage(){ 
        cy.get(el.linkNewArticle).click()
    }

    writeArticle(){
        cy.get(el.inputTitle).type(title)
        cy.get(el.inputDescription).type('Descrição do artigo')
        cy.get(el.inputBody).type('Corpo do artigo')
        cy.get(el.inputTag).type('Tags do artigo')
    }

    submitArticle(){
        cy.contains('button', 'Publish Article').click()
    }

    validateArticleCreation(){
        cy.contains(title).should('be.visible')
        cy.get('h1').should('have.text', title)
    }
}

export default new Articles()