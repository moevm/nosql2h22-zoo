import React from 'react';
import {useModal} from "../../hooks";
import {ModalId} from "../../constants";
import {Modal} from "../../components";
import {request} from "../../utils";
import {Button, Grid, TextField} from "@mui/material";
import {Field, Form} from "react-final-form";

export const TicketCreate = () => {
    const { closeModal, isOpen } = useModal(ModalId.TicketCreate);

    const onCloseModal = React.useCallback(() => {
        closeModal();
    }, [closeModal]);

    const submitHandler = React.useCallback(async (data) => {
        try {
            await request('POST', 'add/ticket', data);
            onCloseModal();
        } catch (e) {
            console.error(e);
        }
    }, [onCloseModal]);

    return (
        <Modal
            title="Add Ticket"
            dialogProps={{
                fullWidth: true,
                onClose: onCloseModal,
                open: !!isOpen,
            }}
        >
            <Form
                onSubmit={submitHandler}
                subscription={{ valid: true, values: true, submitting: true }}
            >
                {({ submitting, handleSubmit  }) => {
                    return (
                        <form style={{ display: "flex", alignItems: "center", justifyContent: "center" }} onSubmit={handleSubmit}>
                            <Grid container spacing={2} mt={2}>
                                <Field name="date">
                                    {props => (
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Date"
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                            />
                                        </Grid>
                                    )}
                                </Field>
                                <Field name="username">
                                    {props => (
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Name"
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                            />
                                        </Grid>
                                    )}
                                </Field>
                                <Field name="price">
                                    {props => (
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Price"
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                            />
                                        </Grid>
                                    )}
                                </Field>
                                <Grid item xs={6} textAlign="right">
                                    <Button
                                        disabled={submitting}
                                        color="primary"
                                        size="large"
                                        variant="contained"
                                        type="submit"
                                    >
                                        add
                                    </Button>
                                </Grid>
                                <Grid item xs={6} textAlign="left">
                                    <Button
                                        disabled={submitting}
                                        onClick={() => onCloseModal()}
                                        color="error"
                                        size="large"
                                        variant="outlined"
                                    >
                                        cancel
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    );
                }}
            </Form>
        </Modal>
    );
};
