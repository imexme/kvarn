import React, { useEffect, useState, } from 'react';
import useWindowDimensions from '../../hooks/use-windowDimensions';
// import MenuItem from './MenuItem';
import './Menu.css';
import { Link } from 'react-router-dom';



export const Menu = ({ isMenuOpen }) => {
    const dimensions = useWindowDimensions();

    const [menuItems, setMenuItems] = useState([]);

    const Items = [
        { name1: "Дисковые пилы" },
        { name2: "Профильные Фрезы" },
        { name3: "Castor (Кастор)" },
        { name4: "Гидроголовы" },
        { name5: "Заточные станки" },
        { name6: "Сменные ножи" },
        { name7: "Аксессуары" },
        { name8: "Прочее" },


    ];

    useEffect(() => {
        setMenuItems(Items);
    }, []);



    return (
        <>

            <div className={`menu ${isMenuOpen && 'showMenu'}`}>



                {menuItems.map((Items, index) => (
                    <p className="menuItem" key={index}>
                        <Link to='/saws'>{Items.name1} </Link>
                        <Link to='/fresa'>{Items.name2} </Link>
                        <Link to='/castor'>{Items.name3} </Link>
                        <Link to='/hydrohead'>{Items.name4} </Link>
                        <Link to='/sharpen'>{Items.name5} </Link>
                        <Link to='/knife'>{Items.name6} </Link>
                        <Link to='/accessories'>{Items.name7} </Link>
                        <Link to='/other'>{Items.name8} </Link>





                    </p>



                ))}

            </div>

        </>
    )
}

export default Menu

{/* <Link to='/fresa'>
                    {menuItems.map((item, index) => <MenuItem title=
                        {item} key={index[1]} />)}
                </Link> */}