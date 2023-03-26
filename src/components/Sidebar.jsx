import React from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegCharBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList

}from "react-icons/fa";
import{ NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const menuItem=[
        
          {
                path:"/",
                name:"dashboard",
                icon:<FaTh/>,
            },
            {
                path:"/about",
                name:"About",
                icon:<FaUserAlt/>,
            },

            {
                path:"/comment",
                name:"Comment",
                icon:<FaCommentAlt/>,
            },
            {
                path:"/product",
                name:"product",
                icon:<FaShoppingBag/>,
            }, 
            {
                path:"/ProductList",
                name:"Product List",
                icon:<FaThList/>,
            },
        ];
    return (
        <div className="container">
            <div className="sidebar">
                <div className="top section">
                    <h1 className="logo">Logo</h1>
                    <div ClassName="bars">
                        <FaBars/>
                    </div>
                </div>
                {menuItem.map((item,index)=>(
                        <NavLink 
                        to={item.path}
                         key={index} 
                         className="link" 
                         activeclassName="active"
                         >
                            <div ClassName="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))}
                
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;