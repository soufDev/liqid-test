import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

const onSubmit = jest.fn();

test('should render withou crashing', () => {
    const { container } = render(<Button onClick={onSubmit} disabled={false}>test</Button>);
    expect(container.firstChild).toBeInTheDocument();
});

test('should call onSubmit when we fire a click event', () => {
    const wrapper = render(<Button onClick={onSubmit} disabled={false}>test</Button>);
    const button = wrapper.getByText('test');
    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalledTimes(1);
});

test('should render a disabled button', () => {
    const wrapper = render(<Button onClick={onSubmit} disabled={true}>test</Button>);
    expect(wrapper.getByText('test')).toBeDisabled();
})