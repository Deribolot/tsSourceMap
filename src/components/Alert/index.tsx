import React from 'react';
import { createPortal } from 'react-dom';
import Modal, { TProps } from './compopnents/Modal';

export default function Alert({ key, ...props }: { key?: null | string } & TProps) {
    let domNode = document.getElementById('root');

    if (!domNode) {
        return false;
    }

    return createPortal(<Modal {...props} />, domNode, key);
}