import Cover from "../share/cover/Cover";
import oredrImg from '../../assets/shop/order.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import OrderItem from "./OrderItem";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menus] = useMenu();
  
    

    const drinks = menus.filter(item => item.category === 'drinks')
    const dessert = menus.filter(item => item.category === 'dessert')
    const pizza = menus.filter(item => item.category === 'pizza')
    const salad = menus.filter(item => item.category === 'salad')
    const soup = menus.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Order</title>
            </Helmet>
            <Cover
                img={oredrImg} title={'our shop'}
            ></Cover>
            <div className="min-h-dvh">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERT</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderItem items={salad}></OrderItem>
                    </TabPanel>
                    <TabPanel>
                        <OrderItem items={pizza}></OrderItem>
                    </TabPanel>
                    <TabPanel>
                        <OrderItem items={soup}></OrderItem>
                    </TabPanel>
                    <TabPanel>
                        <OrderItem items={dessert}></OrderItem>
                    </TabPanel>
                    <TabPanel>
                        <OrderItem items={drinks}></OrderItem>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;