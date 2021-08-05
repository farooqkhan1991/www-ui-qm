import { findByPlaceholderText, findByLabelText} from "@testing-library/react";

//NEED TO ADD CODE TO STOP TIMEOUTS

//Medical #
    describe('MemberSearchContainer', function () {
            it('should Clear All fields', () =>{
                cy.log('Hold until form is cleared!!').wait(3000)
                cy.get('[type="text"]').clear() 
            });

            
            it('should Validate values will be numeric', () =>{
                cy.findByPlaceholderText("Medical Number").type("3458795");
                cy.log('Hold until clear completes!!').wait(3000)
                cy.get('[type="text"]').clear() 
            });
            it('should allow alphanumeric', () =>{
                cy.findByPlaceholderText("Medical Number").type("dsdsd32323");
                cy.log('Hold until clear completes!!').wait(3000)
                cy.get('[type="text"]').clear() 
            });
            it('should allow hyphens, periods, apostrophes, and other symbols commonly found in names', () =>{
                cy.findByPlaceholderText("Medical Number").type("@*^&(#.,/^");
                cy.log('Hold until clear completes!!').wait(3000)
                cy.get('[type="text"]').clear() 
            });


});