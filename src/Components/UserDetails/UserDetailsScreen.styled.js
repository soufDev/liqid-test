import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media (max-width: 414px) {
        padding: 10px 0;
    }
`;

export const StyledTitle = styled.h1`
    font-size: 18px;
`;

export const StyledItemInfo = styled.div`
    padding: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.lightGray};
`;

export const StyledWrapperInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledImg = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    align-self: center;
`;