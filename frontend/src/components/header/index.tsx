import React from 'react';
import {Link} from 'react-router-dom';
import styles from './header.module.scss';
import TagsFilter from '../tagsFIlter';
import Search from '../search';
import {mainPagePath, PAGE_PATHS} from '../../paths';
import UserImage from '../userImage';
import logoImg from '../../assets/logo.svg';
import addImg from '../../assets/add.svg';

const Header: React.FC = () => {
    return (<header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link to={mainPagePath()}>
                    <img src={logoImg} alt="LIVE"/>
                </Link>
                <TagsFilter/>
                <div>
                    <Search/>
                    <UserImage src={process.env.PUBLIC_URL + '/user_logo.svg'} size={24}/>
                    <Link to={PAGE_PATHS.ADD_ONE_NEWS}>
                        <img src={addImg} alt="добавить новость"/>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;