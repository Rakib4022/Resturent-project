import { Helmet } from 'react-helmet-async';
import Cover from '../../share/cover/Cover';
import menuimg from '../../../assets/menu/banner3.jpg';
import dessertimg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaimg from '../../../assets/menu/pizza-bg.jpg';
import soupsimg from '../../../assets/menu/soup-bg.jpg';
import saladsimg from '../../../assets/menu/salad-bg.jpg';
import SectionTitle from '../../share/Sectiontitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuCard from '../MenuCard/MenuCard';

const Menu = () => {
    const [menus] = useMenu();
    const offered = menus.filter(item => item.category === 'offered')
    const dessert = menus.filter(item => item.category === 'dessert')
    const pizza = menus.filter(item => item.category === 'pizza')
    const salad = menus.filter(item => item.category === 'salad')
    const soup = menus.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            {/* {//menu offered img //} */}
            <Cover img={menuimg} title={"our menu"}></Cover>
            <SectionTitle heading={"today's offer"} subheading={"Don't miss"} ></SectionTitle>

            {/* {offered items} */}
            
                <MenuCard  items={offered}></MenuCard>
            
            {/* {dessert items} */}
        
                <MenuCard  img={dessertimg} title={"dessert"} items={dessert}></MenuCard>
        
            {/* {pizza items} */}
            
            <MenuCard img={pizzaimg} title={"pizza"} items={pizza}></MenuCard>
            
            {/* {salad items} */}
            
            <MenuCard img={saladsimg} title={"salad"} items={salad}></MenuCard>
            
            {/* {soup items} */}
            
            <MenuCard img={soupsimg} title={"sopu"} items={soup}></MenuCard>
            
        </div>
    );
};

export default Menu;