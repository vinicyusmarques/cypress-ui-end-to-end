declare namespace Cypress {
    interface Chainable {

        /**
         * @example cy.login()
         */
        login(): void

        /**
         * @example cy.login()
         */
        token(): void
    }

}