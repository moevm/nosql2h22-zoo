import React from 'react';
import {useModal} from "../../hooks";
import {ModalId} from "../../constants";
import {Modal} from "../../components";
import {request} from "../../utils";
import {Button, Grid, TextField} from "@mui/material";
import {Field, Form} from "react-final-form";

export const TimetableCreate = () => {
    const { closeModal, isOpen } = useModal(ModalId.TimetableCreate);

    const onCloseModal = React.useCallback(() => {
        closeModal();
    }, [closeModal]);

    const submitHandler = React.useCallback(async (data) => {
        try {
            await request('POST', 'add/timetable', data);
            onCloseModal();
        } catch (e) {
            console.error(e);
        }
    }, [onCloseModal]);

    return (
        <Modal
            title="Add Timetable"
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
                                <Field name="day">
                                    {props => (
                                        <Grid item xs={12} >
                                            <select name={props.input.name} value={props.input.value} onChange={props.input.onChange}>
                                                <option value="Monday">Monday</option>
                                                <option value="Tuesday">Tuesday</option>
                                                <option value="Wednesday">Wednesday</option>
                                                <option value="Thursday">Thursday</option>
                                                <option value="Friday">Friday</option>
                                                <option value="Saturday">Saturday</option>
                                                <option value="Sunday">Sunday</option>
                                            </select>
                                        </Grid>
                                    )}
                                </Field>
                                <Field name="time_from">
                                    {props => (
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="From"
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                            />
                                        </Grid>
                                    )}
                                </Field>
                                <Field name="time_to">
                                    {props => (
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="To"
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
