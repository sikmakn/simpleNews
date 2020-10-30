import React, {useState} from 'react';
import classes from './search.module.scss';

const Search: React.FC = () => {
    const [isActive, setIsActive] = useState(false);
    console.log('aaa');
    return (
        <div className={classes.searchContainer}>
            <input type="search" className={isActive ? classes.active : classes.unActive}/>
            <img
                src="search.svg" alt="поиск"
                className={classes.activateIcon}
                onClick={() => setIsActive(!isActive)}
            />
        </div>
    );
}

export default Search;