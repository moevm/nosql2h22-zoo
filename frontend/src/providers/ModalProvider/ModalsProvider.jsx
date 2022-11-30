import React from 'react';

import { ModalsContext } from './ModalsContext';

export const ModalsProvider = ({ children }) => {
    const [state, setState] = React.useState({});

    const openModal = React.useCallback((id, args) => {
        setState(prevState => {
            return {
                ...prevState,
                [id]: {
                    isOpen: true,
                    args: args || null,
                },
            };
        });
    }, []);

    const closeModal = React.useCallback(id => {
        setState(prevState => {
            return {
                ...prevState,
                [id]: {
                    ...prevState[id],
                    isOpen: false,
                },
            };
        });
    }, []);

    const contextValue = React.useMemo(() => {
        return { state, openModal, closeModal };
    }, [closeModal, openModal, state]);

    return <ModalsContext.Provider value={contextValue}>{children}</ModalsContext.Provider>;
};
