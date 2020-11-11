import React from 'react';
import styles from './noMatch.module.scss';
import Header from '../../components/header';

const NoMatchPage: React.FC = () =>
    (
        <>
            <Header/>
            <main className={styles.moMatchPageContainer}>
                <h1>404</h1>
                <h2>Страница не найдена</h2>
                <p>Возможно вы пытаетесь обратиться к странице, к которо й увас нет прав доступа, в таком случае
                    попробуйте войти на сайт под своим акканутом.</p>
            </main>
        </>
    );

export default NoMatchPage;