import { findByPlaceholderText, findByLabelText} from "@testing-library/react";

//NEED TO ADD CODE TO STOP TIMEOUTS

//Happy PATH
    describe('MemberSearchContainer', function () {
            //LastName
            it('should Valid values will be alphanumeric, hyphens, periods, apostrophes, and other symbols commonly found in names', () =>{
                cy.findByPlaceholderText("Last Name").type("De Miñaur");
                cy.log('Hold until redirect completes!!').wait(2000)
                cy.get('[type="text"]').clear() 
            });

            it('should Fail with numbers', () =>{
                cy.findByPlaceholderText("Last Name").type("32323");
                cy.log('Hold until redirect completes!!').wait(2000)
                cy.get('[type="text"]').clear() 
            });
            it('should allow  alphanumeric', () =>{
                cy.findByPlaceholderText("Last Name").type("dsdsd32323");
                cy.log('Hold until redirect completes!!').wait(2000)
                cy.get('[type="text"]').clear() 
            });
});