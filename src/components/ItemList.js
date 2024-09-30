import { useDispatch } from "react-redux";
import { vegIcon } from "../utils/constants";
import { nonVegIcon } from "../utils/constants";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items})=>{

    //dispatch an action 
    const dispatch = useDispatch()

    const handleAddItem = (item)=>{
        dispatch(addItem(item));
        console.log(item);
        
    }    

    return(
        <div>
            {items.map((item)=>(
                         <div key={item.card.info.id} className="flex justify-between items-center my-4 py-6 border-b border-slate-500">
                            <div className="w-9/12">
                                {(()=>{
                                    if(item.card.info.itemAttribute.vegClassifier==="NONVEG"){
                                        return <p><img src={nonVegIcon} className="w-[20px]"/></p>
                                    }
                                    else return <p><img src={vegIcon} className="w-[20px]"/></p>
                                }) ()}
                                
                                <h3 className="font-semibold text-lg">{item.card.info.name}</h3>
                                <h4 className="font-semibold"> ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</h4>
                                <p className="mr-6 text-slate-500">{item.card.info.description}</p>
                            </div>
                            <div className="w-3/12">
                             <img src={CDN_URL+item.card.info.imageId} className="h-[144px] w-[156px] rounded-2xl z-0 relative" />
                            
                             <button className=" w-[120px] block ml-5 mt-[-30px] z-20 border border-black bg-white text-green-600 shadow-lg rounded-xl px-8 py-2 font-bold absolute" onClick={()=>handleAddItem(item)}>ADD</button>
                        
                            </div>
                            
                        </div>
                    ))} 
        </div>
    )
}

export default ItemList;