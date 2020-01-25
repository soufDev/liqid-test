import React from 'react';
import { Input } from './Input';
import { fireEvent, wait } from '@testing-library/react';
import { addUserSchema } from '../utils';
import { renderField } from '../../../test/test-utils';


const fakeOnSubmit = jest.fn();

test('should render without crashing', () => {
    const { getByPlaceholderText } = renderField({ fullname: '' }, addUserSchema, fakeOnSubmit, <Input type="text" placeholder='fullname' name='fullname' />);
    expect(getByPlaceholderText('fullname')).toBeInTheDocument();
});

test('should render error message', async () => {
    const { getByPlaceholderText, getByTestId } = renderField({ fullname: '' }, addUserSchema, fakeOnSubmit, <Input type="text" placeholder='fullname' name='fullname' />);
    const input = getByPlaceholderText('fullname');
    await wait(() => fireEvent.blur(input));
    expect(getByTestId('error-message')).toBeInTheDocument();
});

test('should not render error message', async () => {
    const { getByPlaceholderText } = renderField({ fullname: '' }, addUserSchema, fakeOnSubmit, <Input type="text" placeholder='fullname' name='fullname' />);
    const input = getByPlaceholderText('fullname');
    await wait(() => fireEvent.change(input, { target: { value: 'fullname test' }}));
    expect(input.value).toBe('fullname test');
});