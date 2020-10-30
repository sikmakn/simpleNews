import React from 'react';
import {Link} from "react-router-dom";
import classes from './header.module.scss';
import TagsFilter from "../tagsFIlter";
import Search from "../search";

const Header: React.FC = () => {
    return (<header className={classes.header}>
            <div className={classes.headerContainer}>
                <Link to="/">
                    <img src="logo.svg" alt="LIVE"/>
                </Link>
                <TagsFilter/>
                <div>
                    <Search/>
                    <img src="user_logo.svg" alt="user"/>
                    <img src="add.svg" alt="добавить новость"/>
                </div>
            </div>
        </header>
    );
};

export default Header;