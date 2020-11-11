import React from 'react';
import styles from './formCheckErrorsLayout.module.scss';

const FormCheckErrorLayout: React.FC = ({children}) =>
    (<div className={styles.errorContainer}>{children}</div>);

export default FormCheckErrorLayout;