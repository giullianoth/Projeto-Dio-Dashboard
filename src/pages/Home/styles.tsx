import styled from "styled-components"
import { media } from "../../styles/responsivity.js"

export const HomeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.large`
        flex-direction: column-reverse;
        row-gap: 60px;
    `}
`

export const HomeHeadline = styled.div`
    max-width: 370px;

    ${media.large`
        text-align: center;
    `}

    a {
        ${media.small`
            width: 100%;
        `}
    }
`

export const HomeTitle = styled.h1`
    font-size: 2rem;
    margin-bottom: 12px;

    span {
        color: var(--color-accent);
        display: block;
    }
`

export const HomeTagline = styled.p`
    line-height: 1.4;
    margin-bottom: 40px;
`