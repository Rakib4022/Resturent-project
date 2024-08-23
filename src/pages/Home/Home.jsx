import Banner from "./Banner/Banner";
import CallSection from "./CallSection/CallSection";
import Categories from "./Categories/Categories";
import CefRecomands from "./CefRecomands/CefRecomands";
import CefService from "./cefService/CefService";
import Featured from "./Featured/Featured";
import MenuSection from "./MenuSection/MenuSection";
import Reviews from "./Reviews/Reviews";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Banner></Banner>
            <Categories></Categories>
            <CefService></CefService>
            <MenuSection></MenuSection>
            <CallSection></CallSection>
            <CefRecomands></CefRecomands>
            <Featured></Featured>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;