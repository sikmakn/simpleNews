import React from 'react';
import {Link} from 'react-router-dom';
import styles from './header.module.scss';
import TagsFilter from '../tagsFIlter';
import Search from '../search';
import {PAGE_PATHS} from '../../paths';

const Header: React.FC = () => {
    return (<header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link to={PAGE_PATHS.MAIN}>
                    <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="LIVE"/>
                </Link>
                <TagsFilter/>
                <div>
                    <Search/>
                    <img src={process.env.PUBLIC_URL + '/user_logo.svg'} alt="user"/>
                    <img src={process.env.PUBLIC_URL + '/add.svg'} alt="добавить новость"/>
                </div>
            </div>
        </header>
    );
};

export default Header;