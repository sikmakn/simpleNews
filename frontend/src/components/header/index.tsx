import React from 'react';
import {Link} from 'react-router-dom';
import styles from './header.module.scss';
import TagsFilter from '../tagsFIlter';
import Search from '../search';
import {addOneNewsPagePath, mainPagePath, userPagePath} from '../../paths';
import UserImage from '../userImage';
import logoImg from '../../assets/logo.svg';
import addImg from '../../assets/add.svg';
import SignButton from '../signButton';

export interface HeaderProps {
    user?: {
        username: string
        imgSrc: string
    }
}

const Header: React.FC<HeaderProps> = ({user}) => {
    return (<header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link to={mainPagePath()}>
                    <img src={logoImg} alt="LIVE"/>
                </Link>
                <TagsFilter/>
                <div>
                    <Search/>
                    {
                        user ?
                            <>
                                <Link to={userPagePath()}>
                                    <UserImage src={user.imgSrc} size={24}/>
                                </Link>
                                <Link to={addOneNewsPagePath()}>
                                    <img src={addImg} alt="добавить новость"/>
                                </Link>
                            </>
                            :
                            <SignButton/>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;