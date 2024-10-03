import { render,screen } from "@testing-library/react"
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"

describe("Contact Us page test cases",()=>{

    it("Should load contact us component",()=>{
        render(<ContactUs/>);
    
        const heading= screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    it("Should load button inside contact component",()=>{
        render(<ContactUs/>);
    
        const button= screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    it("Should load input inside contact component",()=>{
        render(<ContactUs/>);
    
        const input= screen.getByPlaceholderText("Name");
        expect(input).toBeInTheDocument();
    });
    
})