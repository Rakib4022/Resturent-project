import { Link } from "react-router-dom";


const MenuItem = ({ item }) => {
    const { name, title, image, price, recipe } = item;
    return (
        <div>
            <div className="flex gap-1 md:gap-4">
                <img style={{ borderRadius: '0 200px 200px 200px' }} className="md:w-[110px] w-[60px] h-[50px] md:h-[100px]" src={image} alt="" />
                <div>
                    <h2 className="upprecase">{name}----------</h2>
                    <p>{recipe}</p>
                </div>
                <p className="text-orange-400">${price}</p>
            </div>
           
        </div>
    );
};

export default MenuItem;