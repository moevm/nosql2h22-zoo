import React from 'react';

import {ModalsContext} from "../providers/ModalProvider";

export const useModal = (id) => {
    const { openModal, closeModal, state } = React.useContext(ModalsContext);

    const modalState = React.useMemo(()=> {
        return id ? state[id] : { isOpen: false, args: null };
    }, [id, state]);

    const openCurrentModal = React.useCallback(
        (customId, customArgs) => {
        if (customId) {
            openModal(customId, customArgs);
        } else if (id) {
            openModal(id);
        }
    },
    [id, openModal],
);

    const closeCurrentModal = React.useCallback(
        () => {
            closeModal(String(id));
        },
    [closeModal, id],
);

    return {
        ...modalState,
        openModal: openCurrentModal,
        closeModal: closeCurrentModal,
    };
};
