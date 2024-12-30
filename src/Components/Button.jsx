import React from 'react';
import './Button.css';
import { NavLink } from 'react-router-dom';

const Button = (props) => {
    return (
        <div className="outer">
            <div className="inner">
                <NavLink to={props.link} className="nav-link">
                    {props.text}
                </NavLink>
            </div>
            <NavLink to={props.link} className="svg-link">
                <svg width="24" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.00003 6H18V17H16V9.41421L7.00003 18.4142L5.58582 17L14.5858 8H7.00003V6Z" fill="#faaa60" />
                </svg>
            </NavLink>
        </div>
    );
};

export default Button;
