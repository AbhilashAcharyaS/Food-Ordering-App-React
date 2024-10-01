import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart =()=>{
        dispatch(clearCart());
    }

    let itemTotal=0;
    cartItems.map((x)=>itemTotal+= (Math.floor(x.card.info.price/100)));

    return (
        <div>
            <h1 className="text-2xl font-bold text-center m-8">Cart</h1>

            {cartItems.length == 0 && <h2 className="text-center m-8 font-semibold">Your Cart is Empty! Please add some items</h2>}

            {cartItems.length != 0 && 
            <div className="flex">
            <div className="w-3/5 p-6">
            <button className="text-center font-semibold text-lg bg-red-300 border rounded-xl p-2 mx-auto w-28 block hover:bg-red-400 hover:scale-105" onClick={handleClearCart}>Clear Cart</button>

            <ItemList items={cartItems} isCartPage={true} />
            
            </div>

            <div className="w-2/5 h-56 bg-slate-200 m-8 border shadow-lg rounded-xl">
                <h3 className="font-bold text-xl text-center my-4"> Bill Details </h3>
                <div className="flex justify-between mx-8">
                  <p>Item Total</p>
                  <span>₹{itemTotal}.00</span>
                </div>
                <div className="flex justify-between mx-8">
                  <p>Delivery Charge</p>
                  <span>₹50.00</span>
                </div>
                <br/>
                <div className="flex justify-between mx-8 font-semibold">
                  <p>To Pay:</p>
                  <span>₹{itemTotal+50}.00</span>
                </div>

                <button className="bg-green-300 p-2 mx-auto w-1/2 block mt-2 rounded-xl font-semibold hover:bg-green-400 hover:scale-105">Proceed to Payment</button>
                
            </div>
        
        </div>}
            

            
            


        </div>
    )
}

export default Cart;