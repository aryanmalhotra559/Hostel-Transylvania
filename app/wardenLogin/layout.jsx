import React from 'react';
import Navsecond from '../../components/NavSecond';

const WardenLayout = ({ children }) => {
    return (
        <>
            <Navsecond />
            <main>
                {children}
            </main>
        </>
    );
};

export default WardenLayout;
