
import SectionTitle from "../../share/Sectiontitle/SectionTitle";
import CefItem from "./CefItem";
import useMenu from "../../../hooks/useMenu";



const CefRecomands = () => {
    const [menu] = useMenu();
    const popularData = menu.filter(item => item.recomands === 'cef');

    
    return (
        <div>
            <SectionTitle
                heading={'CHEF RECOMMENDS'}
                subheading={'Should Try'}
            ></SectionTitle>
            <div className="md:grid  md:grid-cols-3">
                {
                    popularData.map(item => <CefItem
                        key={item._id}
                        item={item}
                    ></CefItem>)
                }

            </div>
        </div>
    );
};

export default CefRecomands;