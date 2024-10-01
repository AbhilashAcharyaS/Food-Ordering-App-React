import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


// lazy loading About component
const About= lazy(()=>import("./components/About"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="flex flex-col justify-between h-screen">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    </Provider>
  );
};

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element: 
        <Suspense fallback={<h1>Loading...</h1>} >
        <About/>
        </Suspense>
      },
      {
        path:'/contact',
        element:<ContactUs/>
      },
      {
        path:'/restaurants/:resId',
        element:<RestaurantMenu/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
