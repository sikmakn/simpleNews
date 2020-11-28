import React from 'react';
import styles from './errorsLayout.module.scss';

const ErrorLayout: React.FC = ({children}) =>
    (<div className={styles.errorContainer}>{children}</div>);

export default ErrorLayout;