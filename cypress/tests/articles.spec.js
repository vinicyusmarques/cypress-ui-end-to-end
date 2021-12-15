/// <reference types="cypress" />

// const faker = require('faker')

import articles from '../support/pages/articles/index'

describe('Articles', () => {
  beforeEach(() => {
    cy.login()
  })
  it('Create article successfully', () => {
    articles.accessPublicationPage()
    articles.writeArticle()
    articles.submitArticle()
    articles.validateArticleCreation()
  })
})
