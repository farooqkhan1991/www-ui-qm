import { findByPlaceholderText, findByLabelText} from "@testing-library/react";

//Clear form data
    describe('MemberSearchContainer', function () {
        it('Hold Before Clearing form !!', () =>{
            cy.log('Hold until redirect completes!!').wait(2000)
            cy.get('[type="text"]').clear() 
              })
});