import React from 'react';
import img from '@/1.jpg';
import styles from './index.module.less';

export default function () {
    return (
        <div className={styles.main}>
            App
            <img src={img} alt="cat" />
        </div>
    );
}