import { findByPlaceholderText, findByLabelText} from "@testing-library/react";

//NEED TO ADD CODE TO STOP TIMEOUTS

//Medical #
    describe('MemberSearchContainer', function () {
            it('should Clear All fields', () =>{
                cy.log('Hold until form is cleared!!').wait(3000)
                cy.get('[type="text"]').clear() 
            });

            //Date of Birth
            it('should Fail values will be in length > 5', () =>{
                cy.findByPlaceholderText("Zip Code").type("2223334444");
                cy.log('Hold until clear completes!!').wait(3000)
                cy.get('[type="text"]').clear() 
            }) ;

            it('should FAIL values will be in length < 5', () =>{
                cy.findByPlaceholderText("Zip Code").type("222");

                cy.log('Hold until clear completes!!').wait(3000)
                cy.get('[type="text"]').clear() 
            }) ;

            it('should FAIL to allow alpha', () =>{
                cy.findByPlaceholderText("Zip Code").type("dsds");

                cy.log('Hold until clear completes!!').wait(3000)
                cy.get('[type="text"]').clear() 
            });

            it('should FAIL alphanumeric', () =>{
                cy.findByPlaceholderText("Zip Code").type("2d3c3");

                cy.log('Hold until clear completes!!').wait(3000)
                cy.get('[type="text"]').clear() 
            });

            it('should FAIL  hyphens, periods, apostrophes, and other symbols commonly found in names', () =>{
                cy.findByPlaceholderText("Zip Code").type("@*^&(#.,/^");

                cy.log('Hold until clear completes!!').wait(3000)
                cy.get('[type="text"]').clear() 
            });


});