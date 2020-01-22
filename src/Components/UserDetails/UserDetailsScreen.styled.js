import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const StyledTitle = styled.h1`
    font-size: 18px;
`;

export const StyledItemInfo = styled.div`
    padding: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.lightGray};
`;

export const StyledContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
`;