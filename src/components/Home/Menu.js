import React from 'react';
import MenuItem from './MenuItem';
import './Menu.css';



const Menu = ({ isMenuOpen }) => {
    const menuItems = ["existing inventory", "used inventory", "trade-in", "cybertruck", "roadster", "semi", "charging", "powerwall", "commercial solar", "test drive", "find us", "support", "united states"];
    return (
        <>

            <div className={`menu ${isMenuOpen && 'showMenu'}`}>

                {menuItems.map((item, index) => <MenuItem title={item} key={index} />)}
            </div>
        </>
    )
}

export default Menu
