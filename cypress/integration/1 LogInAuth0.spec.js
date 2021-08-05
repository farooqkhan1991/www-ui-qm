import '@testing-library/cypress/add-commands';
import { findByPlaceholderText} from "@testing-library/react";

 

  describe('login', function () {
    before(function () {
      cy.log("BEFORE")
      // Before running for the first time, get new url with new token or the test will fail
       cy.visit('https://idp.reveal-dev.net/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DMTM-link-client-dev2%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252F%2523%252Fredirect%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520id.custom%2520api.api1%2520api.usermanagement%26state%3D8e79ffc5c0d74f4591d4fec73037de6f%26code_challenge%3DSoZLrbZv4pxui0fDuFy1ZDmafXrBuvg-hdHk0MlO1tk%26code_challenge_method%3DS256%26response_mode%3Dquery%26state_timestamp%3D1584025512098');
      })
     
  
    it('should successfully log into our app', function () {
      cy.wait(2000);
      cy.findByPlaceholderText("Email Address").type("CRicarda@gmail.com").should("have.value", "CRicarda@gmail.com");//.wait(2000);
      cy.findByPlaceholderText("Password").type("Password123$").should("have.value", "Password123$");//.wait(2000);
      cy.wait(2000);
      cy.findByText("Sign In").click();
      cy.request('https://urm.reveal-dev.net/#/member')
      cy.log('Hold until redirect completes!!').wait(15000)
        })   

        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
        })
  })

  