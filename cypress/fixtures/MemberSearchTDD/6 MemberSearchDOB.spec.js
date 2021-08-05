import { findByPlaceholderText, findByLabelText} from "@testing-library/react";

//NEED TO ADD CODE TO STOP TIMEOUTS

//Medical #
    describe('MemberSearchContainer', function () {
            it('should Clear All fields', () =>{
                cy.log('Hold until form is cleared!!').wait(3000)
                cy.get('[type="text"]').clear() 
            });

            //Date of Birth
            it('should Validate values will be in MM/DD/YYYY format', () =>{
                cy.findByPlaceholderText("Date of Birth").type("01/02/1978");
                cy.findByPlaceholderText("Phone Number");
                cy.log('Hold until clear completes!!').wait(3000)
                cy.get('[type="text"]').clear() 
            }) ;

            it('should FAIL values will be in MM/DD/YYYY format', () =>{
                cy.findByPlaceholderText("Date of Birth").type("ab/cd/1978");
                cy.findByPlaceholderText("Phone Number");
                cy.log('Hold until clear completes!!').wait(3000)
                cy.get('[type="text"]').clear() 
            }) ;

            it('should FAIL to allow alphanumeric', () =>{
                cy.findByPlaceholderText("Date of Birth").type("dsdsd32323");
                cy.findByPlaceholderText("Phone Number");
                cy.log('Hold until clear completes!!').wait(3000)
                cy.get('[type="text"]').clear() 
            });

            it('should FAIL length < 10', () =>{
                cy.findByPlaceholderText("Date of Birth").type("23");
                cy.findByPlaceholderText("Phone Number");
                cy.log('Hold until clear completes!!').wait(3000)
                cy.get('[type="text"]').clear() 
            });

            it('should FAIL  hyphens, periods, apostrophes, and other symbols commonly found in names', () =>{
                cy.findByPlaceholderText("Date of Birth").type("@*^&(#.,/^");
                cy.findByPlaceholderText("Phone Number");
                cy.log('Hold until clear completes!!').wait(3000)
                cy.get('[type="text"]').clear() 
            });


});