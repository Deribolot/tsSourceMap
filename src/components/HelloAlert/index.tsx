import React from 'react';
import Alert from '../Alert';

export interface IProps {
    onClose(): void,
}

export default function HelloAlert({ children, onClose }: React.PropsWithChildren<IProps>) {
    return (
        <Alert>
            Привет!
            {children}
            <button onClick={onClose} type='button' className='theme' >close</button>
        </Alert>
    );
}