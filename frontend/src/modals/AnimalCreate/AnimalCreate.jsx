import React from 'react';
import {useModal} from "../../hooks";
import {ModalId} from "../../constants";
import {Modal} from "../../components";
import {Button, Grid, TextField} from "@mui/material";
import {Field, Form} from "react-final-form";
import {request} from "../../utils";

export const AnimalCreate = () => {
    const { closeModal, isOpen } = useModal(ModalId.AnimalCreate);

    const onCloseModal = React.useCallback(() => {
        closeModal();
    }, [closeModal]);

    const submitHandler = React.useCallback(async (data) => {
        try {
            await request('POST', 'add/animal', data);
            onCloseModal();
        } catch (e) {
            console.error(e);
        }
    }, [onCloseModal]);

    return (
        <Modal
            title="Add Animal"
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
                                <Field name="name">
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
                                <Field name="kind">
                                    {props => (
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Kind"
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                            />
                                        </Grid>
                                    )}
                                </Field>
                                <Field name="gender">
                                    {props => (
                                        <Grid item xs={12} >
                                            <select name={props.input.name} value={props.input.value} onChange={props.input.onChange}>
                                                <option value="male">male</option>
                                                <option value="female">female</option>
                                            </select>
                                        </Grid>
                                    )}
                                </Field>
                                <Field name="aviary">
                                    {props => (
                                        <Grid item xs={12}>
                                            <TextField
                                                type = {"number"}
                                                fullWidth
                                                label="aviary"
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
