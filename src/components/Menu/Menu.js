import React, { useEffect, useState } from 'react';
import useWindowDimensions from '../../hooks/use-windowDimensions';
import MenuItem from './MenuItem';
import './Menu.css';
import { Link, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

{/* <Link to="/">"Профильные Фрезы"</Link> */ }


export const Menu = ({ isMenuOpen }) => {
   const dimensions = useWindowDimensions();
  const [menuItems, setMenuItems] = useState([
        "Профильные Фрезы", "Гидроголовы", "Castor", "Дисковые пилы", "Заточные станки", "Аксессуары", "Сменные ножи", "Прочее"]);
    useEffect(() => {
        if (dimensions.width <= 900) {
            setMenuItems(["Профильные фрезы", "Гидроголовы", "Castor (Kaстор)", "Дисковые пилы", "Заточные станки", "Аксессуары", "Сменные ножи", "Прочее"]);
        } else {
            setMenuItems(["Дисковые пилы", "Заточные станки", "Аксессуары", "Сменные ножи", "Прочее"])
        }
    }, [dimensions.width])


    return (
        <>

            <div className={`menu ${isMenuOpen && 'showMenu'}`}>

                {menuItems.map((item, index) => <MenuItem title={item} key={index[0]} />)}
            </div>
        </>
    )
}

export default Menu
