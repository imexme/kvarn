// import React from 'react';
import NavHeader from '../UI/NavHeader';
import Menu from '../Menu/Menu';
import Section from './Section';
import './index.css';
import { Footer } from './Footer';

const Home = ({ isMenuOpen, setIsMenuOpen }) => {

    const HeroSections = [
        {
            backgroundImage: "model-s.jpg",
            title: "Kvarnstrands",
            description: "Гарантия качества  ",
            descriptionSpan: "  Laser cutting tehnology",
            leftButton: "Индивидуальный заказ",
            rightButton: "Подробнее",

        },
        {
            backgroundImage: "model-y.jpg",
            title: "Наши партнеры",
            description: "почему нам доверяют",
            descriptionSpan: "Touchless Delivery",
            leftButton: "Custom Order",
            rightButton: "Exisiting Inventoroy"

        },
        {
            backgroundImage: "model-3.jpg",
            title: "Наша история",
            description: "Order Online for",
            descriptionSpan: "Touchless Delivery",
            leftButton: "Custom Order",
            rightButton: "Exisiting Inventoroy"

        },
        {
            backgroundImage: "model-x.jpg",
            title: "Современные технологии",
            description: "Order Online for",
            descriptionSpan: "Touchless Delivery",
            leftButton: "Custom Order",
            rightButton: "Exisiting Inventoroy"

        },
        {
            backgroundImage: "solar-panel.jpg",
            title: "Самый острый инструмент",
            description: "Money-back guarantee",
            descriptionSpan: "",
            leftButton: "Order Now",
            rightButton: "Learn More"

        },


        {
            backgroundImage: "accessories.jpg",
            title: "Accessories",
            description: "",
            descriptionSpan: "",
            leftButton: "Shop Now",


        },
    ]

    return (
        <div className="HomePage">
            <NavHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Menu isMenuOpen={isMenuOpen} />
            {HeroSections.map((section, index) => <Section key={index} model={section.model} title={section.title} description={section.description} descriptionSpan={section.descriptionSpan} leftButton={section.leftButton} rightButton={section.rightButton} backgroundImage={section.backgroundImage}
                isMenuOpen={isMenuOpen}
            />)}
        </div>

    )
}

export default Home;