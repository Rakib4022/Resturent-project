
import SectionTitle from "../../share/Sectiontitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCard from "../../Menu/MenuCard/MenuCard";


const MenuSection = () => {
    const [menus] = useMenu();
    const popular = menus.filter(item => item.category === 'popular')

   
    
    return (
        <div>
            <SectionTitle
                subheading={'Check it out'}
                heading={'FROM OUR MENU'}
            >
            </SectionTitle>
            <MenuCard items={popular}></MenuCard>
        </div>
    );
};

export default MenuSection;