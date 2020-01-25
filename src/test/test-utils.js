import React from 'react';
import { render } from '@testing-library/react';
import { Formik, Form } from 'formik';

export const renderField = (initialValues, schema, onSubmit, ui) => {
    return render(
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
            {({ props }) => (
                <Form>{ui}</Form>
            )}
        </Formik>
    )
}