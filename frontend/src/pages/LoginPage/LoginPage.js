import React from "react";
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import { Field, Form } from 'react-final-form';

export const LoginPage = () => {
    const submitHandler = async data => {
        console.log(data);
    };

    return (
        <Form
            onSubmit={submitHandler}
            subscription={{ valid: true, values: true, submitting: true }}
        >
            {({ submitting, handleSubmit  }) => {
                return (
                    <form style={{ display: "flex", alignItems: "center", justifyContent: "center" }} onSubmit={handleSubmit}>
                        <Grid container spacing={2} maxWidth={500}>
                            <Grid item xs={12} textAlign="center">
                                <Typography variant="h3">
                                    Sign in
                                </Typography>
                            </Grid>
                            <Grid item container spacing={2} xs={12} mt={3}>
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
                            </Grid>
                            <Grid item xs={12} textAlign="center">
                                <Button
                                    fullWidth
                                    disabled={submitting}
                                    loading={submitting}
                                    color="primary"
                                    size="large"
                                    variant="contained"
                                    type="submit"
                                >
                                    sign in
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                );
            }}
        </Form>
    );
};
