import { findByPlaceholderText, findByLabelText} from "@testing-library/react";

//NEED TO ADD CODE TO STOP TIMEOUTS

//Happy PATH
    describe('MemberSearchContainer', function () {
            //LastName
            it('should Fail on Click then Validate all Fields', () =>{
                cy.findByPlaceholderText("Last Name").type("De Miñaur");
                
                cy.findByText("Search").click();
                cy.log('Hold until clear completes!!').wait(2000)
                cy.get('[type="text"]').clear() 
                cy.findByPlaceholderText("Last Name").type("Yam");
                cy.findByPlaceholderText("Medical Number").type("3458795");
                cy.findByPlaceholderText("Date of Birth").type("01/02/1978");
                cy.findByPlaceholderText("Phone Number").type("(255) 042-5624");
                cy.findByPlaceholderText("Zip Code").type("64034");
                cy.findByText("Search").click();
                cy.log('Hold until clear completes!!').wait(2000)
                cy.get('[type="text"]').clear() 
            });
            //Medical #
            it('should Fail on Click then Validate all Fields minus Phone Number, Zip Code', () =>{
                cy.findByPlaceholderText("Last Name").type("Yam");
                cy.findByPlaceholderText("Medical Number").type("345");
                
                cy.findByText("Search").click();
                cy.log('Hold until clear completes!!').wait(2000)
                cy.get('[type="text"]').clear() 
                cy.findByPlaceholderText("Last Name").type("Yam");
                cy.findByPlaceholderText("Medical Number").type("96586aq");
                cy.findByPlaceholderText("Date of Birth").type("01/02/1978");
                
                cy.findByText("Search").click();
                cy.log('Hold until clear completes!!').wait(2000)
                cy.get('[type="text"]').clear() 
            });
            //Date of Birth
            it('should Fail then Validate all Fields minus Phone Number and Zip Code', () =>{
                cy.findByPlaceholderText("Last Name").type("Yam");
                cy.findByPlaceholderText("Medical Number").type("345");
               // cy.findByPlaceholderText("Date of Birth").type("01");
               
                cy.findByText("Search").click();
                cy.log('Hold until clear completes!!').wait(2000)
                cy.get('[type="text"]').clear() 
                cy.findByPlaceholderText("Last Name").type("Yam");
                cy.findByPlaceholderText("Medical Number").type("3458795");
                cy.findByPlaceholderText("Date of Birth").type("01/02/1978");
                
                cy.findByText("Search").click();
                cy.log('Hold until clear completes!!').wait(2000)
                cy.get('[type="text"]').clear() 
            }) ;
            //Phone #
            it('should Fail then Validate all Fields minus Zip Code', () =>{
                cy.findByPlaceholderText("Last Name").type("Yam");
                cy.findByPlaceholderText("Medical Number").type("345");
                cy.findByPlaceholderText("Date of Birth").type("01");
                cy.findByPlaceholderText("Phone Number").type("978");
                cy.findByText("Search").click();
                cy.log('Hold until clear completes!!').wait(2000)
                cy.get('[type="text"]').clear() 
                cy.findByPlaceholderText("Last Name").type("Yam");
                cy.findByPlaceholderText("Medical Number").type("3458795");
                cy.findByPlaceholderText("Date of Birth").type("01/02/1978");
                cy.findByPlaceholderText("Phone Number").type("(255) 042-5624");
               
                cy.findByText("Search").click();
                cy.log('Hold until clear completes!!').wait(2000)
                cy.get('[type="text"]').clear() 
            }) ;
            //Zip Code
            it('should Fail then Validate all Fields ', () =>{
                cy.findByPlaceholderText("Last Name").type("Yam");
                cy.findByPlaceholderText("Medical Number").type("345");
                cy.findByPlaceholderText("Date of Birth").type("01");
                cy.findByPlaceholderText("Phone Number").type("978");
                cy.findByPlaceholderText("Zip Code").type("123");
                cy.findByText("Search").click();
                cy.log('Hold until clear completes!!').wait(2000)
                cy.get('[type="text"]').clear() 
                cy.findByPlaceholderText("Last Name").type("Yam");
                cy.findByPlaceholderText("Medical Number").type("3458795");
                cy.findByPlaceholderText("Date of Birth").type("01/02/1978");
                cy.findByPlaceholderText("Phone Number").type("(255) 042-5624");
                cy.findByPlaceholderText("Zip Code").type("64034");
                
                cy.findByText("Search").click();
                cy.log('Hold until clear completes!!').wait(2000)
                cy.get('[type="text"]').clear() 
            });
});