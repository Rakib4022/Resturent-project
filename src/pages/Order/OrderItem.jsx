import CefItem from "../Home/CefRecomands/CefItem";


const OrderItem = ({ items }) => {
    return (
        <div>
            <div className="md:grid items-center h-[200px] object-cover gap-8  md:grid-cols-3">
                {
                    items.map(item => <CefItem
                        key={item._id}
                        item={item}
                    ></CefItem>)
                }

            </div>
        </div>
    );
};

export default OrderItem;