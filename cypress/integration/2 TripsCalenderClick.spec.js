import "@testing-library/cypress/add-commands";
import { findByPlaceholderText } from "@testing-library/react";

// Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     return false
//   })
const _ = Cypress._;

// require node's url module
const url = require("url");

describe("Logging In - Single Sign on", function() {
  Cypress.Commands.add("loginBySingleSignOn", (overrides = {}) => {
    Cypress.log({
      name: "loginBySingleSignOn"
    });

    const options = {
      method: "POST",
      url: "https://idp.reveal-dev.net/Account/Login",

      form: true, // we are submitting a regular form body
      body: {
        grant_type: "password",
        username: "CRicarda@gmail.com",
        password: "Password123$",
        scope: " api.api1",
        client_id: "password_client",
        client_secret: "secret"
      }
    };

    // allow us to override defaults with passed in overrides
    _.extend(options, overrides);

    // cy.request(options);

    cy.visit(
      "https://idp.reveal-dev.net/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DMTM-link-client-dev2%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252F%2523%252Fredirect%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520id.custom%2520api.api1%2520api.usermanagement%26state%3D8e79ffc5c0d74f4591d4fec73037de6f%26code_challenge%3DSoZLrbZv4pxui0fDuFy1ZDmafXrBuvg-hdHk0MlO1tk%26code_challenge_method%3DS256%26response_mode%3Dquery%26state_timestamp%3D1584025512098"
      //"http://localhost:3000"
    );
    cy.wait(10000);
    if (cy.url() === "http://localhost:3000/#/members") {
      return true;
    } else {
      cy.findByPlaceholderText("Email Address")
        .type("CRicarda@gmail.com")
        .should("have.value", "CRicarda@gmail.com"); //.wait(2000);
      cy.findByPlaceholderText("Password")
        .type("Password123$")
        .should("have.value", "Password123$"); //.wait(2000);
      cy.wait(2000);
      cy.findByText("Sign In").click();
      cy.log("Hold until redirect completes!!").wait(1000);

      cy.wait(5000);
    }
  });

  it("should successfully click on the Sunday ", function() {
    cy.loginBySingleSignOn().then(resp => {
      console.log(resp);

      cy.get(".ant-tabs-nav-wrap")
        .find(".ant-tabs-tab")
        .find(".center-font")
        .contains("Sun")
        .click();
      cy.wait(20);
    });
  });

  it("should successfully click on the Saturday ", function() {
    // cy.loginBySingleSignOn().then(resp => {
    cy.get(".ant-tabs-nav-wrap")
      .find(".ant-tabs-tab")
      .find(".center-font")
      .contains("Sat")
      .click();
    cy.wait(20);
    //});
  });

  it("should successfully click on the Monday ", function() {
    // cy.loginBySingleSignOn().then(resp => {
    cy.get(".ant-tabs-nav-wrap")
      .find(".ant-tabs-tab")
      .find(".center-font")
      .contains("Mon")
      .click();
    cy.wait(20);
    // });
  });

  it("should successfully click on the Friday ", function() {
    // cy.loginBySingleSignOn().then(resp => {
    cy.get(".ant-tabs-nav-wrap")
      .find(".ant-tabs-tab")
      .find(".center-font")
      .contains("Fri")
      .click();
    cy.wait(20);
    // });
  });

  it("should successfully click on the Tuesday ", function() {
    //cy.loginBySingleSignOn().then(resp => {
    cy.get(".ant-tabs-nav-wrap")
      .find(".ant-tabs-tab")
      .find(".center-font")
      .contains("Tue")
      .click();
    cy.wait(20);
    //});
  });

  it("should successfully click on the Thursday ", function() {
    // cy.loginBySingleSignOn().then(resp => {
    cy.get(".ant-tabs-nav-wrap")
      .find(".ant-tabs-tab")
      .find(".center-font")
      .contains("Thu")
      .click();
    cy.wait(20);
    //});
  });

  it("should successfully click on the Wednesday ", function() {
    //cy.loginBySingleSignOn().then(resp => {
    cy.get(".ant-tabs-nav-wrap")
      .find(".ant-tabs-tab")
      .find(".center-font")
      .contains("Wed")
      .click();
    cy.wait(20);
    // });
  });
});

describe("Click on Previous / Next 7 Calender Days", function() {
  it("should successfully click on Previous 7 Days ", function() {
    cy.get(".ant-row.headerRow")
      .find(".ant-col.ant-col-6")
      .find(".calendarLinks")
      .contains("Previous ")
      .click();
    cy.wait(20);
  });

  it("should successfully click on Next 7 Days ", function() {
    cy.get(".ant-row.headerRow")
      .find(".ant-col.ant-col-6.text-right")
      .find(".calendarLinks")
      .contains("Next ")
      .click();
    cy.wait(20);
  });
});

describe("Monthly Calendar Toggle", function() {
  it("should toggle to Monthly Calendar when selected", function() {
    cy.findByText("Monthly").click();
    cy.wait(200);
  });

  it("should have 7 tabs", function() {
    cy.get(".calendarComponentContainer")
      .find("[role=tab]")
      .then(tabs => {
        expect(tabs).to.have.length(7);
      });
  });
  it("should have tabs with year and month", function() {
    cy.get(".calendarComponentContainer")
      .find("[role=tab]")
      .each((tab, idx, tabs) => {
        const today = new Date();
        const tabDate = new Date(today.setMonth(today.getMonth() + (idx - 3)));
        cy.wrap(tab).should(
          "contain",
          tabDate.toLocaleString("en", { year: "numeric" }) +
            " " +
            tabDate.toLocaleString("en", { month: "long" })
        );
      });
  });
  it("should have the middle tab selected with current year and month", function() {
    cy.get(".calendarComponentContainer")
      .find("[role=tab]")
      .eq(3)
      .should(
        "contain",
        new Date().toLocaleString("en", { year: "numeric" }) +
          " " +
          new Date().toLocaleString("en", { month: "long" })
      );
  });
  describe("Previous and Next Month Navigation", function() {
    it("should have arrows for previous and next months", function() {
      cy.get(".calendarComponentContainer .calendarLinks")

        .eq(0)
        .should("contain", "Previous 7 Months");
      cy.get(".calendarComponentContainer .calendarLinks")
        .eq(1)
        .should("contain", "Next 7 Months");
    });
    it("should show previous 7 months when previous is clicked", function() {
      const today = new Date();
      const firstTabDate = new Date(new Date().setMonth(today.getMonth() - 10));
      const lastTabDate = new Date(new Date().setMonth(today.getMonth() - 4));
      cy.get(".calendarComponentContainer .calendarLinks")
        .eq(0)
        .click();
      cy.get(".calendarComponentContainer")
        .find("[role=tab]")
        .eq(0)
        .should(
          "contain",
          firstTabDate.toLocaleString("en", { year: "numeric" }) +
            " " +
            firstTabDate.toLocaleString("en", { month: "long" })
        );
      cy.get(".calendarComponentContainer")
        .find("[role=tab]")
        .eq(6)
        .should(
          "contain",
          lastTabDate.toLocaleString("en", { year: "numeric" }) +
            " " +
            lastTabDate.toLocaleString("en", { month: "long" })
        );
    });
  });
});
