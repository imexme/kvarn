import NavHeader from '../UI/NavHeader';
import Menu from '../Menu/Menu';
import Section from './Section';
const Home = ({ isMenuOpen, setIsMenuOpen }) => {
    const HeroSections = [
        {
            model: "model_s",
            title: "Model S",
            description: "Order Online for",
            descriptionSpan: "Touchless Deliver",
            leftButton: "Custom Order",
            rightButton: "Exisiting Inventoroy"

        },
        {
            model: "model_y",
            title: "Model Y",
            description: "Order Online for",
            descriptionSpan: "Touchless Deliver",
            leftButton: "Custom Order",
            rightButton: "Exisiting Inventoroy"

        },
        {
            model: "model_3",
            title: "Model 3",
            description: "Order Online for",
            descriptionSpan: "Touchless Deliver",
            leftButton: "Custom Order",
            rightButton: "Exisiting Inventoroy"

        },
        {
            model: "model_X",
            title: "Model X",
            description: "Order Online for",
            descriptionSpan: "Touchless Deliver",
            leftButton: "Custom Order",
            rightButton: "Exisiting Inventoroy"

        },
        {
            model: "solar_panel",
            title: "Lowest Cost Solar Panel in America",
            description: "Money-back guarantee",
            descriptionSpan: "",
            leftButton: "Order Now",
            rightButton: "Learn More"

        },
        {
            model: "solar_roofs",
            title: "Solar for New Roofs",
            description: "Solar ROof Costs Less Than a New Roof Plus Solar Panels",
            descriptionSpan: "",
            leftButton: "Order Now",
            rightButton: "Learn More"

        },
        {
            model: "accessories",
            title: "Accessories",
            description: "",
            descriptionSpan: "",
            leftButton: "Shop Now",
            rightButton: ""

        },
    ]

    return (
        <>
            <NavHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Menu isMenuOpen={isMenuOpen} />
            {HeroSections.map((section, index) => <Section keyy={index} model={section.model} title={section.title} description={section.description} descriptionSpan={section.descriptionSpan} leftButton={section.leftButton} rightButton={section.rightButton} />)}
        </>
    )
}

export default Home;