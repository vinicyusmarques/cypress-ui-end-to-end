/// <reference types="cypress" />

const faker = require('faker')

describe.only('Register', () => {
  it('Create User with sucess', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 200,
      fixture: 'createUserSucess'
    }).as('postUsers')
    cy.visit('register')
    cy.get('input[placeholder="Username"]').type(faker.name.firstName())
    cy.get('input[type="email"]').type(faker.internet.email())
    cy.get('input[type="password"]').type('teste123')
    cy.get('button.btn-primary').should('have.text', 'Sign up').click()
    cy.get('div[class="article-preview"]').should('contain.text', 'No articles are here... yet.')
  })

  it('Create User Email Exist', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'createUserEmailExist'
    }).as('postUsers')

    cy.visit('register')
    cy.get('input[placeholder="Username"]').type('xptooooxpto')
    cy.get('input[type="email"]').type('vini123@mail.com')
    cy.get('input[type="password"]').type('xptoxptoxpto')
    cy.get('button.btn-primary').should('have.text', 'Sign up').click()
    cy.contains('email has already been taken')
  })

  it('Create Username Exist', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'createUsernameExist'
    }).as('postUsers')

    cy.visit('register')
    cy.get('input[placeholder="Username"]').type(faker.name.firstName())
    cy.get('input[type="email"]').type('vini123@mail.com')
    cy.get('input[type="password"]').type('xptoxptoxpto')
    cy.get('button.btn-primary').should('have.text', 'Sign up').click()
    cy.contains('username has already been taken')
  })

  it.only('Send empty form', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'emptyForm'
    }).as('postUsers')
    cy.visit('register')
    cy.get('button.btn-primary').should('have.text', 'Sign up').click()
    cy.contains("email can't be blank")
  })
})
