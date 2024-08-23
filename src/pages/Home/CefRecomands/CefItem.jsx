import { useContext } from "react";
import { AuthContex } from "../../../AuthProvider/AuthProvider";


const CefItem = ({ item }) => {
    const { name, image, recipe, price } = item;
    const user = useContext(AuthContex);
    
    const handleCardItems = food => { 
        console.log(food, user);
        
    }
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        className="w-full h-full"
                        src={image}
                        alt="Items" />

                </figure>
                <p className="bg-black absolute right-2 mt-4 text-white px-2 py-2">
                    $ {price}
                </p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleCardItems(item)} className="btn btn-outline border-0 border-b-2 text-gray-600">Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CefItem;