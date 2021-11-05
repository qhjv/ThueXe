import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './menu.css'
import { Link, NavLink } from 'react-router-dom';

function Menu(props) {
    return (
        <div className="menu">
            <div className="navbar d-flex flex-column">
                 {/* <Link className="navbar__logo d-flex align-items-center" to="/">
                </Link> */}
                <div className="navbar__lists">
                    <div className="navbar__lists--tool">
                        <div className="navbar__list">
                            <ul className="nav navbar-nav">
                                <NavLink className="navbar-li" to="/">
                                    <i className="fas fa-border-all" />
                                    <a className="navbar-a" >Danh sách xe</a>
                                </NavLink>
                                <NavLink className="navbar-li" to="/customer">
                                    <i className="fas fa-border-all" />
                                    <a className="navbar-a" >Danh sách khách hàng</a>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;