import React, { PropsWithChildren } from 'react';
import styles from './index.less';

interface IProps {

}

export type TProps = PropsWithChildren<IProps>

export default function Modal({ children }: TProps) {
    return (
        <div className={styles.main}>
            <div className={styles.modal}>
                {children}
            </div>
        </div>
    );
}