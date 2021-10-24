describe('open lidl website ', () => {
    it('should open lidl shop online', () => {
        cy.visit('https://www.lidl.pl/')    
        cy.get('.cookie-alert-extended-button').contains('Akceptuję').click()	
        cy.get('svg').should('exist')
    })

    it('should click moda category', () => {
        cy.get('a').contains('Moda').click()

    })

    it('should choose ubrania dla dzieci category', () => {
        cy.get('a').contains('Ubrania dla dzieci').click()
    })

    it('price settings', () => {
        cy.get('#Cena-filter-input-min').click().clear()
        cy.wait(3000)
        cy.get('#Cena-filter-input-min').type(10)
        cy.get('#Cena-filter-input-max').click().clear()
        cy.wait(3000)
        cy.get('#Cena-filter-input-max').type(89)
    })
})
