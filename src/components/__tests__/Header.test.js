const { render,screen, fireEvent } = require("@testing-library/react")
import { BrowserRouter } from "react-router-dom";
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"

it("Should render header component with Login button",()=>{
    render  (
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>    
    );

    const loginButton = screen.getByRole('button',{name : 'Login'})

    expect(loginButton).toBeInTheDocument();

});

it("Should render header component with Cart Items 0",()=>{
    render  (
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>       
    );

    const cartItems = screen.getByText("Cart (0)")

    expect(cartItems).toBeInTheDocument();

});

it("Should change login button to logout on click",()=>{
    render  (
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>       
    );

    const loginButton = screen.getByRole("button", {name:'Login'})
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name:'Logout'})
    expect(logoutButton).toBeInTheDocument();

});