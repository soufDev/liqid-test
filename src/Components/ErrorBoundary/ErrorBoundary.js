import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
    color: ${({ theme }) => theme.lighterGrey};
    font-style: italic;
    padding: 10px 0;
    font-size: 12px;
    text-align: ${({ centerText }) => centerText ? 'center': 'left'}
`;

export class ErrorBoundary extends React.Component {
    static defaultProps = {
        centerText: false,
        fallback: null
    }
    state = { hasError: false };

    componentDidCatch(error) {
        console.error(error);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            const { fallback, centerText } = this.props;
            return fallback ||
                <StyledError centerText={centerText} >
                    Something went wrong...
                </StyledError>
        }
        return this.props.children;
    }
}