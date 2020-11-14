import React from 'react';
import styles from './noMatch.module.scss';
import HeaderHOC from '../../components/header/hoc';

const NoMatchPage: React.FC = () =>
    (
        <>
            <HeaderHOC/>
            <main className={styles.moMatchPageContainer}>
                <h1>404</h1>
                <h2>Страница не найдена</h2>
                <p>Возможно вы пытаетесь обратиться к странице, к которой у вас нет прав доступа, в таком случае
                    попробуйте войти на сайт под своим акканутом.</p>
            </main>
        </>
    );

export default NoMatchPage;