import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import Greeting from "./Greeting";
describe('Greeting component',()=>{
    test('renders Hello World as a text',()=>{
        //Arrange
        render(<Greeting/>)
        //Act
        //...nothing
    
        //Assert
       const helloWorldElement = screen.getByText('Hello World!',{exact:false});
       expect(helloWorldElement).toBeInTheDocument();
    }); 
    test('render "good to see" you if the button was NOT clicked ',()=>{
        //Arrange
        render(<Greeting/>)
        const goodToSeeYou = screen.getByText("good to see you",{exact:false});
        expect(goodToSeeYou).toBeInTheDocument()
    });
     test("render CHANGED",async()=>{
         //Arrange
         render(<Greeting/>);
         const buttonElement = screen.getByRole('button');
         //Act
         await userEvent.click(buttonElement); 
         //Assert
         const goodToSeeYou = screen.getByText("Changed",{exact:false});
         expect(goodToSeeYou).toBeInTheDocument();
     });
     test("does not render 'good to see you' if the button was clicked",async()=>{
        //Arrange
        render(<Greeting/>);
        const buttonElement = screen.getByRole('button');
        //Act
        await userEvent.click(buttonElement); 
        //Assert
        const outputElement = screen.queryByText("good to see you",{exact:false});/*retorna null e nao um erro */
        expect(outputElement).toBeNull();
    });
})
