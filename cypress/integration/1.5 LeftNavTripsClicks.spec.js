import '@testing-library/cypress/add-commands';
import { findByPlaceholderText} from "@testing-library/react";

// Cypress.on('uncaught:exception', (err, runnable) => {
//   // returning false here prevents Cypress from
//   // failing the test
//   return false
// })

  //WHEN LEFT NAV IS OPEN
  describe('Click Hamburger to close it on Left Menu', function () {
    it('should successfully click on the image ', function () {
      cy.get('.AppSideMenu-module_trigggerWrapperExpanded__1tHfV').click();
      cy.wait(2000);
        })
    })

//WHEN LEFT NAV IS CLOSED
describe('Click Hamburger to Open on Left Menu', function () {
    it('should successfully click on the image ', function () {
      cy.get('.AppSideMenu-module_triggerWrapperCollapsed__3e_zN').click();
      cy.wait(2000);
        })
  })


  describe('Click Trips on Left Menu', function () {
    it('should successfully click on the Tips  ', function () {
      cy.get('mtm-side-menu').find('>li').contains('Trips').click();
      cy.wait(2000);
        })
  })


  