import React from 'react';

import {useModal} from "../../hooks";
import {ModalId} from "../../constants";
import {Modal} from "../../components";
import {Field, Form} from "react-final-form";
import {Alert, Button, Grid, TextField, Typography} from "@mui/material";
import {request} from "../../utils";

export const EmployeeCreate = () => {
    const { closeModal, isOpen } = useModal(ModalId.EmployeeCreate);

    const onCloseModal = React.useCallback(() => {
        closeModal();
    }, [closeModal]);

    const submitHandler = React.useCallback(async (data) => {
        try {
            await request('POST', 'add/employee', data);
            onCloseModal();
        } catch (e) {
            console.error(e);
        }
    }, [onCloseModal]);

    return (
        <Modal
            title="Add Employee"
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
                                <Field name="username">
                                    {props => (
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Username"
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                            />
                                        </Grid>
                                    )}
                                </Field>
                                <Field name="position">
                                    {props => (
                                        <Grid item xs={12} >
                                            <select name={props.input.name} value={props.input.value} onChange={props.input.onChange}>
                                                <option value="director">director</option>
                                                <option value="sis admin">sis admin</option>
                                                <option value="veterinarian">veterinarian</option>
                                                <option value="cleaner">cleaner</option>
                                                <option value="zookeeper">zookeeper</option>
                                            </select>
                                        </Grid>
                                    )}
                                </Field>
                                <Field name="role">
                                    {props => (
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Role"
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                            />
                                        </Grid>
                                    )}
                                </Field>
                                <Field name="password">
                                    {props => (
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Password"
                                                type="password"
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
