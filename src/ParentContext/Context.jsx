/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';

export const WebController = createContext();

const Context = ({ children }) => {

    const Information = {};
    return (
        <WebController.Provider value={Information}>
            {children}
        </WebController.Provider>
    );
};

export default Context;