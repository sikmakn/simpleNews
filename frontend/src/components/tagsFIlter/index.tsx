import React from 'react';
import classes from './tagsFilter.module.scss';

const TagsFilter:React.FC = () =>{
    return (
        <nav className={classes.nav}>
            <div>Новости</div>
            <div>Финансы</div>
            <div>Недвижимость</div>
            <div>Спорт</div>
            <div>Афиша</div>
            <div>Магазины</div>
            <div>Работа</div>
            <div>ТВ программа</div>
            <div>Почта</div>
            <div>Погода</div>
        </nav>
    );
};

export default TagsFilter;