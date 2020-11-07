import React, {useState} from 'react';
import classes from './search.module.scss';
import searchImg from '../../assets/search.svg';

const Search: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={classes.searchContainer}>
            <input type="search" className={isActive ? classes.active : classes.unActive}/>
            <img
                src={searchImg} alt="поиск"
                className={classes.activateIcon}
                onClick={() => setIsActive(!isActive)}
            />
        </div>
    );
}

export default Search;