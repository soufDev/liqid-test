import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    @media (max-width: 414px) {
        width: 100%;
    }
`;

export const StyledUserItem = styled.div`
    padding: 5px;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.blue};
    border-bottom: 1px solid ${({ theme }) => theme.white};
    &:hover {
        background-color: ${({ theme }) => theme.lightBlue};
        cursor: pointer;
    }
`;
