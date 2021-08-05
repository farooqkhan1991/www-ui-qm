import { findByPlaceholderText, findByLabelText} from "@testing-library/react";

//NEED TO ADD CODE TO STOP TIMEOUTS

//Happy PATH
    describe('MemberSearchContainer', function () {
            //LastName
            it('should Valid values will be alphanumeric, hyphens, periods, apostrophes, and other symbols commonly found in names', () =>{
                cy.findByPlaceholderText("Last Name");
                cy.findByPlaceholderText("Last Name").type("De Miñaur");
            });
            //Medical #
            it('should Validate values will be alphanumeric', () =>{
                cy.findByPlaceholderText("Medical Number");
                cy.findByPlaceholderText("Medical Number").type("3458795");
            // cy.findByText("Search").click();
            });
            //Date of Birth
            it('should Validate values will be in MM/DD/YYYY format', () =>{
                cy.findByPlaceholderText("Date of Birth");
                cy.findByPlaceholderText("Date of Birth").type("01/02/1978");
            // cy.findByText("Search").click();
            }) ;
            //Phone #
            it('should Validate values will be 10 characters long and only 0-9', () =>{
                cy.findByPlaceholderText("Phone Number");
                cy.findByPlaceholderText("Phone Number").type("(255) 042-5624");
            //cy.findByText("Search").click();
            }) ;
            //Zip Code
            it('should Validate values will be 5 characters long and only 0-9', () =>{
                cy.findByPlaceholderText("Zip Code");
                cy.findByPlaceholderText("Zip Code").type("64034");
                cy.findByText("Search").click();
            });
            //Submit form
            it('should Submit form', () =>{
                cy.findByText("Search").click();
            });
});