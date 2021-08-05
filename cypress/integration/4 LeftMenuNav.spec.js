import '@testing-library/cypress/add-commands';
import { findByPlaceholderText} from "@testing-library/react";

// Cypress.on('uncaught:exception', (err, runnable) => {
//   // returning false here prevents Cypress from
//   // failing the test
//   return false
// })

//WHEN LEFT NAV IS CLOSED
describe('Click Hamburger to Open on Left Menu', function () {
  it('should successfully click on the image ', function () {
    cy.get('.AppSideMenu-module_triggerWrapperCollapsed__3e_zN').click();
    cy.wait(2000);
      })
})


describe('Click Trips on Left Menu', function () {
  it('should successfully click on the image ', function () {
    cy.get('.AppSideMenu-module_menuItem__1rL2e').findByText('Trips').click();
    cy.wait(2000);
      })
})

describe('Click on Member Name drop-down', function () {
  it('should successfully click on the image ', function () {
    cy.get('.AppNavigation-module_rightSideHeaderMenu__2rkBH').find('.Select-module_select__2aAR6').click();
    cy.wait(2000);
      })
})

describe('Click on Account Settings', function () {
  it('should successfully click on the image ', function () {
    cy.get('.Select-module_menu__1uwPc').find('.Select-module_menuItem__3E-DP').get('li').findByText('Account Settings').click();
    cy.wait(2000);
      })
})

//WHEN LEFT NAV IS OPEN
describe('Click Hamburger to close it on Left Menu', function () {
  it('should successfully click on the image ', function () {
    cy.get('.AppSideMenu-module_trigggerWrapperExpanded__1tHfV').click();
    cy.wait(2000);
      })
})
