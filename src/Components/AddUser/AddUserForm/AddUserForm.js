import React from 'react';
import { Formik, Form } from 'formik';
import { WrapperCommon } from '../../WrapperCommon';
import { StyledWrapper, StyledTitle, StyledButtonWrapper } from '../AddUser.styled';
import { Input } from '../Input';
import { Button } from '../Button';
import { initialValues, addUserSchema } from '../utils';
import { ErrorMessage } from '../../ErrorMessage';


export const AddUserForm = ({ onSubmit, error }) => {
    return (
        <StyledWrapper>
            <WrapperCommon isVisible={error}>
                <ErrorMessage data-testid="error-item" error={error} />
            </WrapperCommon>
            <StyledTitle>Add New User</StyledTitle>
            <Formik
                initialValues={initialValues}
                validationSchema={addUserSchema}
                onSubmit={onSubmit}
            >
                {(props) => (
                    <Form>
                        <Input type="text" placeholder="Full Name" name="fullname" />
                        <Input type="text" placeholder="Username" name="username" />
                        <Input type="text" placeholder="Email" name="email" />
                        <Input type="text" placeholder="Phone Number" name="phone" />
                        <Input type="text" placeholder="Website" name="website" />
                        <StyledButtonWrapper>
                            <Button>Submit</Button>
                        </StyledButtonWrapper>
                    </Form>
                )}
            </Formik>
        </StyledWrapper>
    )
}