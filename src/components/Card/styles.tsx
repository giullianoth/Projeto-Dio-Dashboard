import styled from "styled-components";

export const CardContainer = styled.article`
    border-radius: 16px;
    background-color: var(--color-background-neutral-alt);
    overflow: hidden;
`

export const CardImageContainer = styled.div`
    height: 160px;
`

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const CardInfo = styled.div`
    padding: 20px;
`

export const CardUser = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
`

export const CardUserImageContainer = styled.div`
    flex-basis: 32px;
`

export const CardUserImage = styled.img`
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid var(--color-white);
`

export const CardUserNameContainer = styled.div`
    flex-basis: calc(100% - 32px);
    line-height: 1.2;
`

export const CardUserName = styled.p`
    font-size: 1.125rem;
    font-weight: 700;
`

export const CardTitle = styled.h2`
    margin-bottom: 10px;
    font-size: 1.125em;
`

export const CardDescription = styled.p`
    margin-bottom: 20px;

    a:hover {
        text-decoration: underline;
    }
`

export const CardTags = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    font-weight: 700;
    margin-bottom: 20px;
`

export const CardLikes = styled.p`
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
        cursor: pointer;
    }
`