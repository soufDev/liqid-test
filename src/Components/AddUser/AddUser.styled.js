import styled from 'styled-components';

export const StyledWrapper = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 300px;
    box-sizing: border-box;
    @media (max-width: 414px) {
        width: 100%;
    }
`;

export const StyledTitle = styled.h1`
    font-size: 18px;
    font-weight: 200;
    text-align: center;
`;

export const StyledError = styled.span`
    color: ${({ theme }) => theme.red};
    font-size: 12px;
`;


export const StyledInput = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: 2px solid ${({ theme, error }) => error ? theme.red: theme.lightBlue};
    font-size: 20px;
`;

export const StyledWrapperInput = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
`;


export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledButton = styled.button`
    padding: 10px;
    width: 100px;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.blue};
    border-radius: 10px;
    border: none;
    align-self: flex-end;
    outline: none;
    &:hover {
        background-color: ${({ theme }) => theme.lightBlue};    
    }
`;

export const StyledButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;