import React from 'react';
import img from '@/1.jpg';

export default function () {
    return (
        <>
            {'Hello, I\'m reactive'}
            <img src={img} alt="cat" />
        </>
    );
}