import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';
import { AddUserForm } from './AddUserForm';

const onSubmit = jest.fn();
test('should render withoud crashing', () => {
    const wrapper = render(<AddUserForm onSubmit={onSubmit} error={null} />)
    expect(wrapper.getAllByTestId('input-item').length).toBe(5);
    expect(wrapper.getByText(/Submit/)).toBeInTheDocument();
});

test('should render error', () => {
    const error = new Error('there is an error');
    const wrapper = render(<AddUserForm onSubmit={onSubmit} error={error} />)
    expect(wrapper.getByText(/there is an error/)).toBeInTheDocument();
})

test('should render input error', async () => {
    const wrapper = render(<AddUserForm onSubmit={onSubmit} error={null} />);
    await wait(() => {
        fireEvent.blur(wrapper.getByPlaceholderText('Full Name'));
        fireEvent.blur(wrapper.getByPlaceholderText('Username'));
        fireEvent.blur(wrapper.getByPlaceholderText('Email'));
        fireEvent.blur(wrapper.getByPlaceholderText('Phone Number'));
        fireEvent.blur(wrapper.getByPlaceholderText('Website'));
    });
    expect(wrapper.getAllByTestId('error-message').length).toBe(5);
});

test('should not render input error', async () => {
    const wrapper = render(<AddUserForm onSubmit={onSubmit} error={null} />);
    await wait(() => {
        fireEvent.change(wrapper.getByPlaceholderText('Full Name'), { target: { value: 'full name test'}});
        fireEvent.change(wrapper.getByPlaceholderText('Username'), { target: { value: 'username test'}});
        fireEvent.change(wrapper.getByPlaceholderText('Email'), { target: { value: 'email@example.com'}});
        fireEvent.change(wrapper.getByPlaceholderText('Phone Number'), { target: { value: '345-245-2345'}});
        fireEvent.change(wrapper.getByPlaceholderText('Website'), { target: { value: 'example.com'}});
    });
    expect(wrapper.queryAllByTestId('error-message').length).toBe(0);
    const submitButton = wrapper.getByText('Submit');
    await wait(() => {
        fireEvent.click(submitButton);
    })
    expect(onSubmit).toHaveBeenCalled();
});