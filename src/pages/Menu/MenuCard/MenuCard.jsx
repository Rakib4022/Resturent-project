import { Link } from "react-router-dom";
import MenuItem from "../../Home/MenuSection/MenuItem";
import Cover from "../../share/cover/Cover";


const MenuCard = ({ items, img, title }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid items-center md:grid-cols-2 p-2 gap-4 mb-8">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <div className="flex mb-4 justify-center">
                    <button className="btn btn-outline   border-0 border-b-2">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCard;