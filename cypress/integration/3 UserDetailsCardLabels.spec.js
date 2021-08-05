import '@testing-library/cypress/add-commands';
import { findByPlaceholderText} from "@testing-library/react";

// Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     return false
//   })

  describe('Verify User Details Card Label is Present', function () {
        it('should Have User Details Card label', () => {
            cy.get('.ant-row').contains('User Details');
            cy.wait(2000);
            })

        it('should Have First Name within User Details Card', () => {
            cy.get('.ant-row').contains('First Name');
            cy.wait(2000);
            })

        it('should Have Last Name within User Details Card', () => {
            cy.get('.ant-row').contains('Last Name');
            cy.wait(2000);
            })

        it('should Have Middle Initial within User Details Card', () => {
            cy.get('.ant-row').contains('Middle Initial');
            cy.wait(2000);
            })

        it('should Have Gender within User Details Card', () => {
            cy.get('.ant-row').contains('Gender');
            cy.wait(2000);
            })

        it('should Have Date of Birth within User Details Card', () => {
            cy.get('.ant-row').contains('Date of Birth');
            cy.wait(2000);
            })

        it('should Have Age within User Details Card', () => {
            cy.get('.ant-row').contains('Age');
            cy.wait(2000);
            })

        it('should Have Primary Language within User Details Card', () => {
            cy.get('.ant-row').contains('Primary Language');
            cy.wait(2000);
            })
    })


 describe('Verify Contact Details Card Label is Present', function () {
    it('should Have Contact Details Card label', () => {
         cy.get('.ant-row').contains('Contact Details');
         cy.wait(2000);
         })

    it('should Have Phone Numbers within Contact Details Card', () => {
        cy.get('.ant-row').contains('Phone Numbers');
        cy.wait(2000);
        })

    it('should Have Home within Contact Details Card', () => {
        cy.get('.ant-row').contains('Home');
        cy.wait(2000);
        })

    it('should Have Work within Contact Details Card', () => {
        cy.get('.ant-row').contains('Work');
        cy.wait(2000);
        })
    })


    describe('Verify Addresses Card Label is Present', function () {
        it('should Have Addresses Card label', () => {
            cy.get('.ant-row').contains('Addresses');  
            cy.wait(2000);
            })

        it('should Have Physical Address within Addresses Card', () => {
            cy.get('.ant-row').contains('Physical Address');
            cy.wait(2000);
            })

        it('should Have Address within Addresses Card', () => {
            cy.get('.ant-row').contains('Address');
            cy.wait(2000);
            })

        it('should Have State within Addresses Card', () => {
            cy.get('.ant-row').contains('State');
            cy.wait(2000);
            })

        it('should Have Mailing Address within Addresses Card', () => {
            cy.get('.ant-row').contains('Mailing Address');
            cy.wait(2000);
            })

        it('should Have City within Addresses Card', () => {
            cy.get('.ant-row').contains('City');
            cy.wait(2000);
            })

        it('should Have Zip within Addresses Card', () => {
            cy.get('.ant-row').contains('Zip');
            cy.wait(2000);
            })

        })