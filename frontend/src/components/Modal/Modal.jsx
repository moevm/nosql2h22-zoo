import React from 'react';

import { Dialog, DialogTitle, DialogContent, Divider } from '@mui/material';
import _ from 'lodash';

const DEFAULT_DIALOG_MAX_WIDTH = 600;
const DEFAULT_PADDING = 4;

export const Modal = ({
     title,
     dialogProps,
     titleProps,
     contentProps,
     maxWidth = DEFAULT_DIALOG_MAX_WIDTH,
     padding = DEFAULT_PADDING,
     children,
 }) => {
    const hasTitle = !_.isNil(title);

    const dialogRootProps = React.useMemo(() => {
        let dialogWithWidthProps = {};

        if (maxWidth !== false) {
            dialogWithWidthProps = {
                PaperProps: {
                    sx: { maxWidth },
                },
            };
        }

        return _.merge(defaultDialogProps, dialogWithWidthProps, dialogProps);
    }, [dialogProps, maxWidth]);

    const dialogTitleProps = React.useMemo(() => {
        const sxProp = { padding: padding === false ? 0 : padding };
        return _.merge({ sx: sxProp }, titleProps);
    }, [titleProps, padding]);

    const dialogContentProps = React.useMemo(() => {
        const sxProp = { padding: padding === false ? 0 : padding };
        return _.merge({ sx: sxProp }, contentProps);
    }, [contentProps, padding]);

    return (
        <Dialog {...dialogRootProps}>
            {hasTitle && <DialogTitle {...dialogTitleProps}>{title}</DialogTitle>}

            <DialogContent {...dialogContentProps}>{children}</DialogContent>
        </Dialog>
    );
};

const defaultDialogProps = {
    open: false,
    maxWidth: false,
    fullWidth: true,
};
