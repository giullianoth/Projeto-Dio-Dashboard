import styled from "styled-components"

export const RankedUserContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const RankedUserImageContainer = styled.div`
    flex-basis: 42px;
`

export const RankedUserImage = styled.img`
    width: 42px;
    height: 42px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid var(--color-white);
`

export const RankedUserInfo = styled.div`
    flex-basis: calc(100% - 42px);
`

export const RankedUserName = styled.h3`
    font-size: 1.125rem;
    margin-bottom: 5px;
`

export const RankBar = styled.div`
    width: 100%;
    height: 9px;
    background-color: var(--color-white);
    border-radius: 9px;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: ${({ percent }) => percent}%;
        height: 9px;
        background-color: var(--color-green);
    }
`